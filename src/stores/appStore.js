import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// App definitions with metadata
const APP_CONFIG = {
    about: { title: 'About Me', defaultOpen: false },
    projects: { title: 'Projects', defaultOpen: false },
    projectDetails: { title: 'Project Details', defaultOpen: false },
    terminal: { title: 'Terminal', defaultOpen: false },
    contact: { title: 'Contact', defaultOpen: false },
    ai: { title: 'SaidAI', defaultOpen: false },
    github: { title: 'GitHub', defaultOpen: false },
    skills: { title: 'Skills', defaultOpen: false },
    notes: { title: 'Dev Notes', defaultOpen: false },
    store: { title: 'App Store', defaultOpen: false },
    calculator: { title: 'Calculator', defaultOpen: false },
    tictactoe: { title: 'Tic Tac Toe', defaultOpen: false },
    settings: { title: 'Settings', defaultOpen: false }
};

// Default window positions for desktop
const DEFAULT_POSITIONS = {
    about: { top: 80, left: 60 },
    projects: { top: 90, left: 400 },
    terminal: { top: 100, left: 70 },
    contact: { top: 80, left: 450 },
    ai: { top: 90, left: 250 },
    github: { top: 100, left: 350 },
    skills: { top: 85, left: 300 },
    notes: { top: 95, left: 150 },
    store: { top: 85, left: 200 },
    calculator: { top: 120, left: 500 },
    tictactoe: { top: 110, left: 400 },
    settings: { top: 75, left: 350 }
};

// Base z-index for windows (matches --z-window in CSS)
const Z_WINDOW_BASE = 40;

const useAppStore = create(
    persist(
        (set, get) => ({
            // State
            openApps: [], // Array of { id, zIndex }
            activeApp: null,
            zCounter: Z_WINDOW_BASE,
            windowPositions: DEFAULT_POSITIONS, // Persisted positions
            
            // Computed: Check if an app is open
            isAppOpen: (id) => get().openApps.some(app => app.id === id),
            
            // Get z-index for a specific app
            getAppZIndex: (id) => {
                const app = get().openApps.find(app => app.id === id);
                return app ? app.zIndex : Z_WINDOW_BASE;
            },
            
            // Get window position
            getWindowPosition: (id) => {
                const positions = get().windowPositions;
                return positions[id] || DEFAULT_POSITIONS[id] || { top: 100, left: 100 };
            },
            
            // Update window position (for drag)
            setWindowPosition: (id, position) => set((state) => ({
                windowPositions: {
                    ...state.windowPositions,
                    [id]: position
                }
            })),
            
            // Open an app (or bring to front if already open)
            openApp: (id) => set((state) => {
                const existingIndex = state.openApps.findIndex(app => app.id === id);
                
                if (existingIndex !== -1) {
                    // App is already open, bring to front
                    const newCounter = state.zCounter + 1;
                    const newOpenApps = state.openApps.map(app => 
                        app.id === id ? { ...app, zIndex: newCounter } : app
                    );
                    return {
                        openApps: newOpenApps,
                        activeApp: id,
                        zCounter: newCounter
                    };
                }
                
                // App is not open, add it
                const newCounter = state.zCounter + 1;
                return {
                    openApps: [...state.openApps, { id, zIndex: newCounter }],
                    activeApp: id,
                    zCounter: newCounter
                };
            }),
            
            // Close an app
            closeApp: (id) => set((state) => {
                const newOpenApps = state.openApps.filter(app => app.id !== id);
                const newActiveApp = state.activeApp === id 
                    ? (newOpenApps.length > 0 ? newOpenApps[newOpenApps.length - 1].id : null)
                    : state.activeApp;
                
                return {
                    openApps: newOpenApps,
                    activeApp: newActiveApp
                };
            }),
            
            // Bring app to front (focus)
            bringToFront: (id) => set((state) => {
                const existingIndex = state.openApps.findIndex(app => app.id === id);
                if (existingIndex === -1) return state;
                
                const newCounter = state.zCounter + 1;
                const newOpenApps = state.openApps.map(app =>
                    app.id === id ? { ...app, zIndex: newCounter } : app
                );
                
                return {
                    openApps: newOpenApps,
                    activeApp: id,
                    zCounter: newCounter
                };
            }),
            
            // Close all apps
            closeAllApps: () => set({
                openApps: [],
                activeApp: null
            }),
            
            // Toggle app (open if closed, close if open)
            toggleApp: (id) => {
                const { isAppOpen, openApp, closeApp } = get();
                if (isAppOpen(id)) {
                    closeApp(id);
                } else {
                    openApp(id);
                }
            },
            
            // Get app config
            getAppConfig: (id) => APP_CONFIG[id] || { title: id, defaultOpen: false },
            
            // Get all app IDs
            getAllAppIds: () => Object.keys(APP_CONFIG),
            
            // Reset positions to defaults
            resetPositions: () => set({ windowPositions: DEFAULT_POSITIONS })
        }),
        {
            name: 'saidos-app-store',
            // Only persist window positions, not open apps (those reset on refresh)
            partialize: (state) => ({ windowPositions: state.windowPositions })
        }
    )
);

export { APP_CONFIG, DEFAULT_POSITIONS };
export default useAppStore;
