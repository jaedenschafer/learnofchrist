/**
 * Versioned localStorage helper.
 *
 * Every entry we persist for 1M-user scale needs a way to evolve without
 * stranding old browsers. This wrapper stores values as
 *
 *   { v: <version>, d: <payload> }
 *
 * so a future schema change can detect and transform older shapes instead of
 * throwing. The helper is also SSR-safe and swallows quota errors silently
 * (Safari private mode can refuse writes).
 */

export interface VersionedEntry<T> {
  v: number;
  d: T;
}

type Migration<T> = (oldValue: unknown) => T | null;

export interface ReadOptions<T> {
  key: string;
  /** Current schema version. Defaults to 1. */
  version?: number;
  /** Value returned when nothing is stored or the payload can't be recovered. */
  fallback: T;
  /**
   * If the stored version is older than `version`, these migrations are run
   * in order starting from the stored version. Index 0 migrates v1 → v2,
   * index 1 migrates v2 → v3, etc. Return `null` to abandon and fall back.
   */
  migrations?: Migration<T>[];
  /** Optional runtime validator — return true if the value is usable. */
  validate?: (value: unknown) => value is T;
}

const isVersionedEntry = <T>(value: unknown): value is VersionedEntry<T> =>
  !!value &&
  typeof value === 'object' &&
  'v' in (value as Record<string, unknown>) &&
  'd' in (value as Record<string, unknown>);

export function readStored<T>(opts: ReadOptions<T>): T {
  const { key, version = 1, fallback, migrations = [], validate } = opts;
  if (typeof window === 'undefined') return fallback;
  let raw: string | null;
  try {
    raw = localStorage.getItem(key);
  } catch {
    return fallback;
  }
  if (raw == null) return fallback;

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    // Legacy plain-string value — treat as v1 payload.
    parsed = { v: 1, d: raw };
  }

  let current: unknown;
  let ver = 1;
  if (isVersionedEntry<unknown>(parsed)) {
    current = parsed.d;
    ver = parsed.v;
  } else {
    current = parsed;
  }

  for (let i = ver - 1; i < migrations.length && ver < version; i++) {
    const migrated = migrations[i](current);
    if (migrated == null) return fallback;
    current = migrated;
    ver += 1;
  }

  if (validate && !validate(current)) return fallback;
  return current as T;
}

export function writeStored<T>(key: string, value: T, version = 1): void {
  if (typeof window === 'undefined') return;
  try {
    const entry: VersionedEntry<T> = { v: version, d: value };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // Safari private mode / storage-full / disabled cookies — swallow.
  }
}

export function removeStored(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(key);
  } catch {}
}

/**
 * One-time bootstrap on the client: writes `loc-schema-version` so future
 * versions can detect a pre-versioned installation and migrate legacy keys.
 */
export function bootstrapStorageSchema(currentVersion = 1): void {
  if (typeof window === 'undefined') return;
  try {
    const existing = localStorage.getItem('loc-schema-version');
    if (existing !== String(currentVersion)) {
      localStorage.setItem('loc-schema-version', String(currentVersion));
    }
  } catch {}
}
