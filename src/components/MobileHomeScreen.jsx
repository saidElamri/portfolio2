import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, FolderOpen, Terminal, Mail, Github, Bot,
    Briefcase, FileText, ShoppingBag, Calculator, Gamepad2, Settings
} from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';

const MobileHomeScreen = ({
    windows,
    toggleWindow,
    focusWindow,
    installedApps,
    dockItems
}) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    // Define all apps with their icons and gradients
    const appDefinitions = {
        about: { icon: User, gradient: 'from-blue-500 to-blue-600', label: 'About' },
        projects: { icon: FolderOpen, gradient: 'from-amber-500 to-orange-500', label: 'Projects' },
        skills: { icon: Briefcase, gradient: 'from-purple-500 to-pink-500', label: 'Skills' },
        notes: { icon: FileText, gradient: 'from-yellow-400 to-yellow-500', label: 'Notes' },
        store: { icon: ShoppingBag, gradient: 'from-cyan-400 to-blue-500', label: 'Store' },
        terminal: { icon: Terminal, gradient: 'from-gray-700 to-gray-900', label: 'Terminal' },
        ai: { icon: Bot, gradient: 'from-green-500 to-emerald-600', label: 'SaidAI' },
        github: { icon: Github, gradient: 'from-gray-800 to-black', label: 'GitHub' },
        contact: { icon: Mail, gradient: 'from-green-400 to-green-600', label: 'Contact' },
        calculator: { icon: Calculator, gradient: 'from-gray-500 to-gray-700', label: 'Calc' },
        tictactoe: { icon: Gamepad2, gradient: 'from-indigo-500 to-purple-600', label: 'Game' },
        settings: { icon: Settings, gradient: 'from-gray-600 to-gray-800', label: 'Settings' },
    };

    // Build app list from dock items
    const apps = dockItems.map(item => ({
        id: item.id,
        label: item.label || appDefinitions[item.id]?.label || item.id,
        icon: appDefinitions[item.id]?.icon || item.icon,
        gradient: appDefinitions[item.id]?.gradient || 'from-gray-500 to-gray-700',
        onClick: () => {
            toggleWindow(item.id);
            focusWindow(item.id);
        }
    }));

    const handleAppClick = (app) => {
        app.onClick();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 md:hidden overflow-auto"
            style={{
                top: 'var(--mobile-nav-height)',
                paddingBottom: 'calc(var(--dock-height) + var(--safe-area-bottom, 0px) + 8px)',
                paddingLeft: 'calc(var(--safe-area-left, 0px) + 20px)',
                paddingRight: 'calc(var(--safe-area-right, 0px) + 20px)',
                zIndex: 'var(--z-fixed)',
                background: `linear-gradient(180deg, ${theme.surface}99 0%, ${theme.background} 100%)`,
                pointerEvents: 'auto'
            }}
        >
            {/* Wallpaper effect */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 30% 20%, ${theme.accent}40 0%, transparent 50%),
                                      radial-gradient(circle at 70% 80%, ${theme.accentSecondary}30 0%, transparent 50%)`,
                }}
            />

            {/* App Grid */}
            <div className="relative z-10 h-full flex flex-col">
                <div className="flex-1 grid grid-cols-4 gap-y-6 gap-x-4 content-start pt-6">
                    {apps.map((app, index) => {
                        const Icon = app.icon;
                        return (
                            <motion.button
                                key={app.id}
                                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.03,
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 25
                                }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleAppClick(app)}
                                onTouchEnd={(e) => { e.preventDefault(); handleAppClick(app); }}
                                className="flex flex-col items-center gap-2"
                                style={{ touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent' }}
                            >
                                {/* App Icon */}
                                <div
                                    className={`w-14 h-14 rounded-[16px] bg-gradient-to-br ${app.gradient} 
                                        flex items-center justify-center
                                        active:brightness-90 transition-all`}
                                    style={{
                                        // No box-shadow on mobile for performance
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}
                                >
                                    <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                                </div>

                                {/* App Label */}
                                {/* App Label - Allow wrapping */}
                                <span className="text-xs text-white/90 font-medium text-center leading-tight max-w-20">
                                    {app.label}
                                </span>
                            </motion.button>
                        );
                    })}
                </div>

                {/* Page Indicator Dots */}
                <div className="flex justify-center gap-2 py-4">
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.accent }}
                    />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                </div>

                {/* Home Indicator */}
                <div className="flex justify-center pb-2">
                    <div className="w-32 h-1 bg-white/40 rounded-full" />
                </div>
            </div>
        </motion.div>
    );
};

export default MobileHomeScreen;
