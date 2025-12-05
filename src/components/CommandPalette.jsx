import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Command, User, Folder, Terminal, Mail,
    Sparkles, Github, Palette, X, ArrowRight
} from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';

const CommandPalette = ({ windows, toggleWindow, focusWindow, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const commands = [
        { id: 'about', icon: User, label: 'About Me', shortcut: '1', category: 'Windows' },
        { id: 'projects', icon: Folder, label: 'Projects', shortcut: '2', category: 'Windows' },
        { id: 'terminal', icon: Terminal, label: 'Terminal', shortcut: '3', category: 'Windows' },
        { id: 'contact', icon: Mail, label: 'Contact', shortcut: '4', category: 'Windows' },
        { id: 'ai', icon: Sparkles, label: 'SaidAI Assistant', shortcut: '5', category: 'Windows' },
        { id: 'github', icon: Github, label: 'GitHub Stats', shortcut: '6', category: 'Windows' },
        { id: 'theme-midnight', icon: Palette, label: 'Theme: Midnight', category: 'Themes', action: () => setTheme('midnight') },
        { id: 'theme-cyberpunk', icon: Palette, label: 'Theme: Cyberpunk', category: 'Themes', action: () => setTheme('cyberpunk') },
        { id: 'theme-aurora', icon: Palette, label: 'Theme: Aurora', category: 'Themes', action: () => setTheme('aurora') },
        { id: 'theme-sunset', icon: Palette, label: 'Theme: Sunset', category: 'Themes', action: () => setTheme('sunset') },
        { id: 'theme-ocean', icon: Palette, label: 'Theme: Ocean', category: 'Themes', action: () => setTheme('ocean') },
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase()) ||
        cmd.category.toLowerCase().includes(query.toLowerCase())
    );

    const groupedCommands = filteredCommands.reduce((acc, cmd) => {
        if (!acc[cmd.category]) acc[cmd.category] = [];
        acc[cmd.category].push(cmd);
        return acc;
    }, {});

    // Open palette on Ctrl+K or Cmd+K
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Ctrl+K or Cmd+K to open
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
                setQuery('');
                setSelectedIndex(0);
            }

            // Escape to close
            if (e.key === 'Escape' && isOpen) {
                setIsOpen(false);
            }

            // Number shortcuts when palette is closed
            if (!isOpen && !e.ctrlKey && !e.metaKey && !e.altKey) {
                const windowMap = { '1': 'about', '2': 'projects', '3': 'terminal', '4': 'contact', '5': 'ai', '6': 'github' };
                if (windowMap[e.key]) {
                    e.preventDefault();
                    toggleWindow(windowMap[e.key]);
                    focusWindow(windowMap[e.key]);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, toggleWindow, focusWindow]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSelectedIndex(prev => Math.max(prev - 1, 0));
        } else if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
            executeCommand(filteredCommands[selectedIndex]);
        }
    };

    const executeCommand = (cmd) => {
        if (cmd.action) {
            cmd.action();
        } else {
            toggleWindow(cmd.id);
            focusWindow(cmd.id);
        }
        setIsOpen(false);
        setQuery('');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
                    />

                    {/* Palette */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-[90vw] max-w-xl z-[201] overflow-hidden rounded-2xl shadow-2xl"
                        style={{
                            backgroundColor: theme.surface,
                            border: `1px solid ${theme.border}`
                        }}
                    >
                        {/* Search Input */}
                        <div className="flex items-center gap-3 px-4 py-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
                            <Search className="w-5 h-5 text-white/40" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0); }}
                                onKeyDown={handleKeyDown}
                                placeholder="Search commands..."
                                className="flex-1 bg-transparent text-white text-sm placeholder-white/40 outline-none"
                            />
                            <div className="flex items-center gap-1">
                                <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-white/50">ESC</kbd>
                            </div>
                        </div>

                        {/* Results */}
                        <div className="max-h-[300px] overflow-y-auto p-2">
                            {Object.entries(groupedCommands).map(([category, cmds]) => (
                                <div key={category} className="mb-2">
                                    <div className="px-3 py-1.5 text-[10px] text-white/40 uppercase tracking-wider">
                                        {category}
                                    </div>
                                    {cmds.map((cmd, i) => {
                                        const globalIndex = filteredCommands.indexOf(cmd);
                                        const isSelected = globalIndex === selectedIndex;
                                        return (
                                            <button
                                                key={cmd.id}
                                                onClick={() => executeCommand(cmd)}
                                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${isSelected ? 'bg-white/10' : 'hover:bg-white/5'
                                                    }`}
                                            >
                                                <cmd.icon className="w-4 h-4" style={{ color: isSelected ? theme.accent : 'rgba(255,255,255,0.5)' }} />
                                                <span className="flex-1 text-left text-sm text-white/80">{cmd.label}</span>
                                                {cmd.shortcut && (
                                                    <kbd className="px-1.5 py-0.5 text-[10px] bg-white/10 rounded text-white/40">
                                                        {cmd.shortcut}
                                                    </kbd>
                                                )}
                                                {isSelected && (
                                                    <ArrowRight className="w-4 h-4" style={{ color: theme.accent }} />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            ))}

                            {filteredCommands.length === 0 && (
                                <div className="py-8 text-center text-white/40 text-sm">
                                    No commands found
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between px-4 py-2 text-[10px] text-white/30" style={{ borderTop: `1px solid ${theme.border}` }}>
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1 py-0.5 bg-white/10 rounded">↑</kbd>
                                    <kbd className="px-1 py-0.5 bg-white/10 rounded">↓</kbd>
                                    navigate
                                </span>
                                <span className="flex items-center gap-1">
                                    <kbd className="px-1 py-0.5 bg-white/10 rounded">↵</kbd>
                                    select
                                </span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Command className="w-3 h-3" />
                                <span>K to toggle</span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
