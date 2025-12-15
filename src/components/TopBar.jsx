import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Minus, Maximize2, Sparkles } from 'lucide-react';
import {
    User, FolderOpen, Terminal, Mail, Brain, Github,
    Layers, StickyNote, Store, Calculator, Gamepad2, Settings
} from 'lucide-react';

// Icon mapping for window titles
const getWindowIcon = (id) => {
    const icons = {
        about: User,
        projects: FolderOpen,
        terminal: Terminal,
        contact: Mail,
        ai: Brain,
        github: Github,
        skills: Layers,
        notes: StickyNote,
        store: Store,
        calculator: Calculator,
        tictactoe: Gamepad2,
        settings: Settings
    };
    return icons[id] || FolderOpen;
};

const TopBar = ({
    id,
    title,
    theme,
    isMaximized,
    isHovered,
    isMobile,
    onClose,
    onMinimize,
    onMaximize,
    onFocus,
    setIsHovered,
    // For mobile swipe
    dragHandlers
}) => {
    const Icon = getWindowIcon(id);
    const lastClickTime = useRef(0);

    // Handle double-click to maximize
    const handleTitleBarClick = (e) => {
        const now = Date.now();
        if (now - lastClickTime.current < 300) {
            // Double click detected
            onMaximize?.();
        }
        lastClickTime.current = now;
        onFocus?.();
    };

    // Mobile header with swipe-to-close
    if (isMobile) {
        return (
            <motion.div
                className="flex flex-col items-center pt-3 pb-2 shrink-0 touch-none"
                {...dragHandlers}
                style={{ cursor: 'grab' }}
            >
                {/* Swipe indicator pill */}
                <div className="w-12 h-1.5 bg-white/50 rounded-full mb-3" />

                {/* Swipe hint text */}
                <span className="text-xs text-white/40 mb-2">Swipe down to close</span>

                {/* App title with close button */}
                <div className="w-full flex items-center justify-between px-5">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center"
                            style={{ backgroundColor: theme.accent + '20' }}
                        >
                            <Icon className="w-5 h-5" style={{ color: theme.accent }} />
                        </div>
                        <span className="font-semibold text-lg" style={{ color: theme.text }}>
                            {title}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                        style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                    >
                        <X className="w-5 h-5" style={{ color: theme.text }} />
                    </button>
                </div>
            </motion.div>
        );
    }

    // Desktop header with double-click to maximize
    return (
        <div
            className="flex items-center justify-between px-4 py-2.5 shrink-0 rounded-t-xl cursor-move select-none"
            style={{ borderBottom: `1px solid ${theme.border}` }}
            onMouseDown={handleTitleBarClick}
        >
            {/* Traffic lights */}
            <div className="flex gap-2">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
                >
                    <X className="w-2 h-2 text-red-900 opacity-0 group-hover:opacity-100" />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onMinimize}
                    className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors flex items-center justify-center group"
                >
                    <Minus className="w-2 h-2 text-yellow-900 opacity-0 group-hover:opacity-100" />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onMaximize}
                    className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors flex items-center justify-center group"
                >
                    <Maximize2 className="w-1.5 h-1.5 text-green-900 opacity-0 group-hover:opacity-100" />
                </motion.button>
            </div>

            {/* Title */}
            <div
                className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
                style={{ color: theme.text }}
            >
                <Icon className="w-4 h-4 shrink-0" style={{ color: theme.accent }} />
                <span className="text-sm font-medium truncate max-w-[200px]">{title}</span>
                {isHovered && (
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0 }}
                    >
                        <Sparkles className="w-3 h-3 shrink-0" style={{ color: theme.accent }} />
                    </motion.div>
                )}
            </div>

            {/* Spacer for balance */}
            <div className="w-14" />
        </div>
    );
};

export default TopBar;
