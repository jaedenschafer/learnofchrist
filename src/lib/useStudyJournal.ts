'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Lightweight localStorage-backed journal primitives.
 * Keys are prefixed `loc-` so they're easy to migrate to an
 * authenticated account or iOS shared container later.
 */

export function useJournalEntry(key: string) {
  const [value, setValue] = useState<string>('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      setValue(typeof window !== 'undefined' ? localStorage.getItem(key) || '' : '');
    } catch {}
    setLoaded(true);
  }, [key]);

  const save = useCallback((v: string) => {
    setValue(v);
    try {
      if (v) localStorage.setItem(key, v);
      else localStorage.removeItem(key);
    } catch {}
  }, [key]);

  return { value, save, loaded };
}

export function useCommitment(key: string) {
  const [checked, setChecked] = useState(false);
  const [committedAt, setCommittedAt] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const v = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
      if (v) {
        setChecked(true);
        setCommittedAt(v);
      }
    } catch {}
    setLoaded(true);
  }, [key]);

  const toggle = useCallback(() => {
    setChecked((prev) => {
      const nv = !prev;
      try {
        if (nv) {
          const ts = new Date().toISOString();
          localStorage.setItem(key, ts);
          setCommittedAt(ts);
        } else {
          localStorage.removeItem(key);
          setCommittedAt(null);
        }
      } catch {}
      return nv;
    });
  }, [key]);

  return { checked, toggle, committedAt, loaded };
}
