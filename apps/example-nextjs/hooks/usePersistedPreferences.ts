'use client';

import { useState, useCallback } from 'react';
import type { ReadiumProps } from 'nouns-reader';

const STORAGE_KEY = 'reader-preferences';

function readFromStorage(): ReadiumProps['preferences'] | undefined {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as ReadiumProps['preferences'];
    }
  } catch {
    // ignore malformed JSON
  }
  return undefined;
}

export function usePersistedPreferences() {
  const [initialPreferences] = useState(() => readFromStorage());

  const handlePreferencesChange = useCallback(
    (preferences: ReadiumProps['preferences']) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
      } catch {
        // ignore storage errors (e.g. quota exceeded)
      }
    },
    []
  );

  return { initialPreferences, handlePreferencesChange };
}
