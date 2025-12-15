import { useEffect } from 'react';
import useAppStore from '../stores/appStore';

/**
 * Hook for global keyboard shortcuts
 * - Cmd/Ctrl + W: Close active window
 * - Cmd/Ctrl + Q: Close all windows
 * - Escape: Close active window (on desktop)
 */
const useKeyboardShortcuts = () => {
    const { activeApp, closeApp, closeAllApps } = useAppStore();

    useEffect(() => {
        const handleKeyDown = (e) => {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const modifier = isMac ? e.metaKey : e.ctrlKey;

            // Cmd/Ctrl + W: Close active window
            if (modifier && e.key.toLowerCase() === 'w') {
                e.preventDefault();
                if (activeApp) {
                    closeApp(activeApp);
                }
            }

            // Cmd/Ctrl + Q: Close all windows
            if (modifier && e.key.toLowerCase() === 'q') {
                e.preventDefault();
                closeAllApps();
            }

            // Escape: Close active window (desktop only)
            if (e.key === 'Escape' && window.innerWidth >= 768) {
                if (activeApp) {
                    closeApp(activeApp);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeApp, closeApp, closeAllApps]);
};

export default useKeyboardShortcuts;
