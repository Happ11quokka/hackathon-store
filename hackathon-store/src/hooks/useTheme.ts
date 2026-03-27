'use client';

import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored) {
      setThemeState(stored);
      if (stored === 'system') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', stored);
      }
    }
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'system') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', newTheme);
    }
  }, []);

  const toggle = useCallback(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setTheme(isDark ? 'light' : 'dark');
  }, [theme, setTheme]);

  return { theme, setTheme, toggle };
}
