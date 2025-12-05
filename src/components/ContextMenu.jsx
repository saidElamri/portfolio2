import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Folder, Terminal, Mail, Bot, Github as GithubIcon,
    RefreshCw, Palette, Download, ExternalLink, Copy, Info
} from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { useToast } from './Toast';

const ContextMenu = React.memo(({ toggleWindow, focusWindow }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef(null);
    const { currentTheme, setTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const toast = useToast();

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('said.elamri.evil@gmail.com');
        toast.success('Email copied to clipboard!');
    };

    const handleThemeChange = (key, themeName) => {
        setTheme(key);
        toast.info(`Theme changed to ${themeName}`);
    };

    const handleDownloadResume = () => {
        window.open('/resume.pdf', '_blank');
        toast.info('Opening resume...');
    };

    const menuItems = [
        { type: 'header', label: 'Quick Actions' },
        { icon: User, label: 'About Me', shortcut: '1', action: () => { toggleWindow('about'); focusWindow('about'); } },
        { icon: Folder, label: 'Projects', shortcut: '2', action: () => { toggleWindow('projects'); focusWindow('projects'); } },
        { icon: Terminal, label: 'Terminal', shortcut: '3', action: () => { toggleWindow('terminal'); focusWindow('terminal'); } },
        { icon: Mail, label: 'Contact', shortcut: '4', action: () => { toggleWindow('contact'); focusWindow('contact'); } },
        { type: 'divider' },
        { type: 'header', label: 'Tools' },
        { icon: Bot, label: 'Ask SaidAI', action: () => { toggleWindow('ai'); focusWindow('ai'); } },
        { icon: GithubIcon, label: 'GitHub Stats', action: () => { toggleWindow('github'); focusWindow('github'); } },
        { type: 'divider' },
        { icon: Download, label: 'Download Resume', action: handleDownloadResume },
        { icon: Copy, label: 'Copy Email', action: handleCopyEmail },
        { type: 'divider' },
        { icon: RefreshCw, label: 'Refresh Page', action: () => window.location.reload() },
        {
            icon: Palette, label: 'Change Theme', submenu: Object.entries(themes).map(([key, t]) => ({
                label: t.name,
                action: () => handleThemeChange(key, t.name),
                active: currentTheme === key
            }))
        },
        { type: 'divider' },
        { icon: Info, label: 'About SaidOS', action: () => toast.info('SaidOS v2.0 • Built with React + Framer Motion') },
    ];

    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();

            const x = Math.min(e.clientX, window.innerWidth - 220);
            const y = Math.min(e.clientY, window.innerHeight - 400);

            setPosition({ x, y });
            setIsOpen(true);
        };

        const handleClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const MenuItem = ({ item }) => {
        const [showSubmenu, setShowSubmenu] = useState(false);

        if (item.type === 'divider') {
            return <div className="my-1.5 h-px bg-white/10" />;
        }

        if (item.type === 'header') {
            return (
                <div className="px-3 py-1.5 text-[10px] text-white/40 uppercase tracking-wider">
                    {item.label}
                </div>
            );
        }

        return (
            <div
                className="relative"
                onMouseEnter={() => item.submenu && setShowSubmenu(true)}
                onMouseLeave={() => item.submenu && setShowSubmenu(false)}
            >
                <button
                    onClick={() => {
                        if (!item.submenu) {
                            item.action?.();
                            setIsOpen(false);
                        }
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-colors group"
                >
                    <item.icon className="w-4 h-4 text-white/50 group-hover:text-white/80" />
                    <span className="flex-1 text-left text-sm text-white/70 group-hover:text-white">
                        {item.label}
                    </span>
                    {item.shortcut && (
                        <kbd className="text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded">
                            {item.shortcut}
                        </kbd>
                    )}
                    {item.submenu && (
                        <span className="text-white/30">›</span>
                    )}
                </button>

                {/* Submenu */}
                {item.submenu && showSubmenu && (
                    <div
                        className="absolute left-full top-0 ml-1 w-40 p-1.5 rounded-xl shadow-xl"
                        style={{
                            backgroundColor: theme.surface,
                            border: `1px solid ${theme.border}`
                        }}
                    >
                        {item.submenu.map((sub, i) => (
                            <button
                                key={i}
                                onClick={() => { sub.action(); setIsOpen(false); }}
                                className={`w-full text-left px-3 py-1.5 text-sm rounded-lg transition-colors ${sub.active ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {sub.active && <span className="mr-2">✓</span>}
                                {sub.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={menuRef}
                    initial={{ opacity: 0, scale: 0.95, y: -5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -5 }}
                    transition={{ duration: 0.1 }}
                    className="fixed z-[300] w-56 p-1.5 rounded-xl shadow-2xl backdrop-blur-xl"
                    style={{
                        left: position.x,
                        top: position.y,
                        backgroundColor: 'color-mix(in srgb, var(--color-surface) 95%, transparent)',
                        border: '1px solid var(--color-border)'
                    }}
                >
                    {menuItems.map((item, i) => (
                        <MenuItem key={i} item={item} />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
});

export default ContextMenu;
