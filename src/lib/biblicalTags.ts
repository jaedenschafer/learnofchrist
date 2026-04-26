/**
 * Canonical lists for the /art faceted filters.
 *
 * These keys are the values stored in the artworks.biblical_character[],
 * biblical_theme[], and era columns. Backfill scripts and ingester normalize
 * to these keys; the UI maps key → display label.
 *
 * Adding a key here doesn't require any migration — the array columns are
 * unconstrained text[] — but keeping the list curated is what makes the
 * filter sidebar feel intentional.
 */

export type EraKey =
  | 'early-christian'
  | 'byzantine'
  | 'medieval'
  | 'renaissance'
  | 'baroque'
  | 'modern'
  | 'contemporary';

export const ERAS: Array<{ key: EraKey; label: string; yearMin?: number; yearMax?: number }> = [
  { key: 'early-christian', label: 'Early Christian', yearMax: 500 },
  { key: 'byzantine',       label: 'Byzantine',       yearMin: 500,  yearMax: 1300 },
  { key: 'medieval',        label: 'Medieval',        yearMin: 1300, yearMax: 1500 },
  { key: 'renaissance',     label: 'Renaissance',     yearMin: 1500, yearMax: 1600 },
  { key: 'baroque',         label: 'Baroque',         yearMin: 1600, yearMax: 1750 },
  { key: 'modern',          label: 'Modern',          yearMin: 1750, yearMax: 1900 },
  { key: 'contemporary',    label: 'Contemporary',    yearMin: 1900 },
];

export function eraForYear(year: number | null | undefined): EraKey | null {
  if (year == null) return null;
  for (const era of ERAS) {
    if (era.yearMin != null && year < era.yearMin) continue;
    if (era.yearMax != null && year >= era.yearMax) continue;
    return era.key;
  }
  return null;
}

/** Most-displayed biblical figures across the catalog. Order = sidebar order. */
export const BIBLICAL_CHARACTERS: Array<{ key: string; label: string; aliases: string[] }> = [
  { key: 'jesus',            label: 'Jesus Christ',  aliases: ['jesus', 'christ', 'lord'] },
  { key: 'mary',             label: 'Mary',          aliases: ['virgin mary', 'madonna', 'theotokos'] },
  { key: 'john_baptist',     label: 'John the Baptist', aliases: ['john the baptist', 'baptist'] },
  { key: 'peter',            label: 'Peter',         aliases: ['st peter', 'saint peter', 'simon peter'] },
  { key: 'paul',             label: 'Paul',          aliases: ['st paul', 'saint paul', 'paul of tarsus'] },
  { key: 'moses',            label: 'Moses',         aliases: [] },
  { key: 'abraham',          label: 'Abraham',       aliases: [] },
  { key: 'david',            label: 'David',         aliases: ['king david'] },
  { key: 'solomon',          label: 'Solomon',       aliases: ['king solomon'] },
  { key: 'noah',             label: 'Noah',          aliases: [] },
  { key: 'adam',             label: 'Adam',          aliases: [] },
  { key: 'eve',              label: 'Eve',           aliases: [] },
  { key: 'joseph',           label: 'Joseph',        aliases: ['joseph of nazareth'] },
  { key: 'isaac',            label: 'Isaac',         aliases: [] },
  { key: 'jacob',            label: 'Jacob',         aliases: ['israel'] },
  { key: 'mary_magdalene',   label: 'Mary Magdalene', aliases: ['magdalene'] },
  { key: 'judas',            label: 'Judas',         aliases: ['judas iscariot'] },
  { key: 'samson',           label: 'Samson',        aliases: [] },
  { key: 'elijah',           label: 'Elijah',        aliases: ['elias'] },
  { key: 'job',              label: 'Job',           aliases: [] },
  { key: 'jonah',            label: 'Jonah',         aliases: [] },
  { key: 'daniel',           label: 'Daniel',        aliases: [] },
  { key: 'esther',           label: 'Esther',        aliases: [] },
  { key: 'ruth',             label: 'Ruth',          aliases: [] },
];

/** Conceptual scenes. Many overlap with the existing `scenes` DB table —
 *  if a scene_slug is also here, prefer joining via the table. This list
 *  exists for art rows that haven't been linked to a scene yet. */
export const BIBLICAL_THEMES: Array<{ key: string; label: string; aliases: string[] }> = [
  { key: 'creation',     label: 'Creation',         aliases: ['creation', 'genesis'] },
  { key: 'fall',         label: 'The Fall',         aliases: ['fall of man', 'expulsion'] },
  { key: 'flood',        label: 'The Flood',        aliases: ['noah', 'ark', 'deluge'] },
  { key: 'exodus',       label: 'Exodus',           aliases: ['exodus', 'red sea', 'plagues'] },
  { key: 'nativity',     label: 'Nativity',         aliases: ['nativity', 'birth of christ', 'manger'] },
  { key: 'baptism',      label: 'Baptism',          aliases: ['baptism of christ'] },
  { key: 'sermon_mount', label: 'Sermon on the Mount', aliases: ['sermon on the mount'] },
  { key: 'miracles',     label: 'Miracles',         aliases: ['miracle', 'healing'] },
  { key: 'parables',     label: 'Parables',         aliases: ['parable', 'prodigal'] },
  { key: 'last_supper',  label: 'Last Supper',      aliases: ['last supper'] },
  { key: 'passion',      label: 'Passion',          aliases: ['passion', 'agony', 'gethsemane', 'arrest'] },
  { key: 'crucifixion',  label: 'Crucifixion',      aliases: ['crucifixion', 'calvary'] },
  { key: 'resurrection', label: 'Resurrection',     aliases: ['resurrection', 'risen'] },
  { key: 'ascension',    label: 'Ascension',        aliases: ['ascension'] },
  { key: 'pentecost',    label: 'Pentecost',        aliases: ['pentecost', 'holy spirit', 'tongues of fire'] },
  { key: 'apocalypse',   label: 'Revelation',       aliases: ['apocalypse', 'revelation', 'last judgement', 'last judgment'] },
  { key: 'annunciation', label: 'Annunciation',     aliases: ['annunciation'] },
  { key: 'pieta',        label: 'Pietà',            aliases: ['pieta', 'pietà'] },
];

/** Lookup an era's display label. */
export function eraLabel(key: string | null | undefined): string {
  if (!key) return '';
  return ERAS.find((e) => e.key === key)?.label ?? key;
}

/** Lookup a character's display label. */
export function characterLabel(key: string): string {
  return BIBLICAL_CHARACTERS.find((c) => c.key === key)?.label ?? key;
}

/** Lookup a theme's display label. */
export function themeLabel(key: string): string {
  return BIBLICAL_THEMES.find((t) => t.key === key)?.label ?? key;
}

/**
 * Given a free-text artwork title (and optional description), infer the
 * biblical_character[] and biblical_theme[] keys that should be tagged.
 * Used by scripts/backfill-metadata.mjs and the ingester.
 */
export function inferTagsFromText(text: string): { characters: string[]; themes: string[] } {
  const lower = text.toLowerCase();
  const characters = new Set<string>();
  const themes = new Set<string>();
  for (const c of BIBLICAL_CHARACTERS) {
    if (lower.includes(c.label.toLowerCase()) || c.aliases.some((a) => lower.includes(a))) {
      characters.add(c.key);
    }
  }
  for (const t of BIBLICAL_THEMES) {
    if (t.aliases.some((a) => lower.includes(a))) themes.add(t.key);
  }
  return { characters: [...characters], themes: [...themes] };
}
