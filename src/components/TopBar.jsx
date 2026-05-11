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
    dragHandlers,
    _dragControls
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
                <div className="w-12 h-1.5 bg-white/20 rounded-full mb-3" />

                {/* App title with close button */}
                <div className="w-full flex items-center justify-between px-6 py-2">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                            style={{ 
                                background: `linear-gradient(135deg, ${theme.accent}33, ${theme.accent}11)`,
                                border: `1px solid ${theme.accent}44`
                            }}
                        >
                            <Icon className="w-6 h-6" style={{ color: theme.accent }} />
                        </div>
                        <span className="font-bold text-xl tracking-tight" style={{ color: theme.text }}>
                            {title}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-90"
                        style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <X className="w-5 h-5" style={{ color: theme.text }} />
                    </button>
                </div>
            </motion.div>
        );
    }

    // Desktop header
    return (
        <div
            className="flex items-center justify-between px-6 h-12 shrink-0 cursor-move select-none relative group/topbar"
            style={{ 
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(10px)',
                borderBottom: `1px solid rgba(255, 255, 255, 0.06)` 
            }}
            onPointerDown={(e) => {
                onFocus?.();
                _dragControls?.start(e);
            }}
            onDoubleClick={onMaximize}
        >
            {/* Traffic lights - Mac style */}
            <div className="flex gap-2.5 z-10 group/traffic">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); onClose(); }}
                    className="w-3.5 h-3.5 rounded-full bg-[#ff5f57] border border-[#e0443e] flex items-center justify-center group relative transition-all active:brightness-75 shadow-sm"
                >
                    <X className="w-2.5 h-2.5 text-black/40 opacity-0 group-hover:opacity-100" strokeWidth={3} />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); onMinimize(); }}
                    className="w-3.5 h-3.5 rounded-full bg-[#febc2e] border border-[#d8a124] flex items-center justify-center group relative transition-all active:brightness-75 shadow-sm"
                >
                    <Minus className="w-2.5 h-2.5 text-black/40 opacity-0 group-hover:opacity-100" strokeWidth={3} />
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); onMaximize(); }}
                    className="w-3.5 h-3.5 rounded-full bg-[#28c840] border border-[#24aa35] flex items-center justify-center group relative transition-all active:brightness-75 shadow-sm"
                >
                    <Maximize2 className="w-2 h-2 text-black/40 opacity-0 group-hover:opacity-100" strokeWidth={3} />
                </motion.button>
            </div>

            {/* Title */}
            <div
                className="absolute inset-0 flex items-center justify-center gap-2.5 pointer-events-none"
                style={{ color: theme.text }}
            >
                <motion.div
                    animate={{ 
                        rotate: isHovered ? [0, -10, 10, 0] : 0 
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <Icon className="w-4 h-4 opacity-70" style={{ color: theme.accent }} />
                </motion.div>
                <span className="text-[11px] font-bold tracking-[0.15em] opacity-60 uppercase font-mono">{title}</span>
                {isHovered && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="ml-1"
                    >
                        <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theme.accent }} />
                    </motion.div>
                )}
            </div>

            {/* Right side controls / indicators */}
            <div className="flex items-center gap-3 z-10 shrink-0">
                 <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] transition-all hover:bg-white/[0.08] hover:border-white/[0.1] shadow-inner group/live">
                    <div 
                        className="w-1.5 h-1.5 rounded-full bg-green-500 relative shrink-0"
                    >
                        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                        <div className="absolute inset-0 rounded-full bg-green-500 blur-[2px]" />
                    </div>
                    {isMaximized && (
                        <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.2em] group-hover/live:text-white/60 transition-colors whitespace-nowrap">System Active</span>
                    )}
                 </div>
            </div>
        </div>
    );
};

export default TopBar;

