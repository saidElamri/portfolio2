import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Theme presets
export const themes = {
  midnight: {
    name: 'Midnight',
    background: '#0a0a0f',
    surface: '#0d1117',
    surfaceHover: '#161b22',
    border: 'rgba(255, 255, 255, 0.1)',
    accent: '#58a6ff',
    accentSecondary: '#a371f7',
    text: '#ffffff',
    textMuted: 'rgba(255, 255, 255, 0.6)',
    success: '#7ee787',
    warning: '#d29922',
    error: '#f85149',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    background: '#0d0221',
    surface: '#1a0a2e',
    surfaceHover: '#2d1b4e',
    border: 'rgba(255, 0, 128, 0.2)',
    accent: '#ff0080',
    accentSecondary: '#00ffff',
    text: '#ffffff',
    textMuted: 'rgba(255, 255, 255, 0.7)',
    success: '#00ff88',
    warning: '#ffcc00',
    error: '#ff3366',
  },
  nature: {
    name: 'Nature',
    background: '#0a1612',
    surface: '#0f1f1a',
    surfaceHover: '#1a2f28',
    border: 'rgba(126, 231, 135, 0.15)',
    accent: '#7ee787',
    accentSecondary: '#56d364',
    text: '#ffffff',
    textMuted: 'rgba(255, 255, 255, 0.6)',
    success: '#7ee787',
    warning: '#f0b429',
    error: '#ff6b6b',
  },
  ocean: {
    name: 'Ocean',
    background: '#0a1929',
    surface: '#0d2137',
    surfaceHover: '#173a5e',
    border: 'rgba(79, 195, 247, 0.15)',
    accent: '#4fc3f7',
    accentSecondary: '#29b6f6',
    text: '#ffffff',
    textMuted: 'rgba(255, 255, 255, 0.7)',
    success: '#69f0ae',
    warning: '#ffd54f',
    error: '#ff5252',
  },
  sunset: {
    name: 'Sunset',
    background: '#1a0a0f',
    surface: '#2d1419',
    surfaceHover: '#3d1f26',
    border: 'rgba(255, 128, 171, 0.15)',
    accent: '#ff80ab',
    accentSecondary: '#ff4081',
    text: '#ffffff',
    textMuted: 'rgba(255, 255, 255, 0.6)',
    success: '#69f0ae',
    warning: '#ffc107',
    error: '#ff5252',
  },
};

// Zustand store with persistence
const useThemeStore = create(
  persist(
    (set, get) => ({
      currentTheme: 'midnight',
      soundEnabled: true,
      reducedMotion: false,
      customTheme: {
        name: 'Custom',
        background: '#1a1a1a',
        surface: '#2a2a2a',
        surfaceHover: '#333333',
        border: 'rgba(255, 255, 255, 0.1)',
        accent: '#58a6ff',
        accentSecondary: '#a371f7',
        text: '#ffffff',
        textMuted: 'rgba(255, 255, 255, 0.6)',
        success: '#7ee787',
        warning: '#d29922',
        error: '#f85149',
      },
      
      setTheme: (themeName) => {
        if (themes[themeName]) {
          set({ currentTheme: themeName });
          applyTheme(themes[themeName]);
        } else if (themeName === 'custom') {
            set({ currentTheme: 'custom' });
            applyTheme(get().customTheme);
        }
      },

      setCustomTheme: (newThemeValues) => {
        set((state) => {
             const updatedCustom = { ...state.customTheme, ...newThemeValues };
             applyTheme(updatedCustom);
             return { 
                 customTheme: updatedCustom,
                 currentTheme: 'custom'
             };
        });
      },
      
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      toggleReducedMotion: () => set((state) => ({ reducedMotion: !state.reducedMotion })),
      
      getTheme: () => {
          const state = get();
          return state.currentTheme === 'custom' ? state.customTheme : themes[state.currentTheme];
      },
    }),
    {
      name: 'saidos-theme',
    }
  )
);

// Apply theme to CSS variables
const applyTheme = (theme) => {
  if (!theme) return;
  const root = document.documentElement;
  root.style.setProperty('--color-background', theme.background);
  root.style.setProperty('--color-surface', theme.surface);
  root.style.setProperty('--color-surface-hover', theme.surfaceHover);
  root.style.setProperty('--color-border', theme.border);
  root.style.setProperty('--color-accent', theme.accent);
  root.style.setProperty('--color-accent-secondary', theme.accentSecondary);
  root.style.setProperty('--color-text', theme.text);
  root.style.setProperty('--color-text-muted', theme.textMuted);
};

// Initialize theme on load
if (typeof window !== 'undefined') {
  const stored = localStorage.getItem('saidos-theme');
  if (stored) {
    try {
      const { state } = JSON.parse(stored);
      if (state?.currentTheme) {
          if (state.currentTheme === 'custom' && state.customTheme) {
              applyTheme(state.customTheme);
          } else if (themes[state.currentTheme]) {
              applyTheme(themes[state.currentTheme]);
          }
      }
    } catch (e) {
      applyTheme(themes.midnight);
    }
  } else {
    applyTheme(themes.midnight);
  }
}

export default useThemeStore;
