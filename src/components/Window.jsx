import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useAnimation, PanInfo } from 'framer-motion';
import { X, Minus, Maximize2, Sparkles, ChevronDown } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';

const Window = ({ id, title, children, isOpen, onClose, zIndex, onFocus, onMinimize }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    // Mobile detection
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Swipe-to-close state for mobile
    const dragY = useMotionValue(0);
    const dragOpacity = useTransform(dragY, [0, 150], [1, 0.5]);
    const dragScale = useTransform(dragY, [0, 150], [1, 0.95]);
    const controls = useAnimation();
    const contentRef = useRef(null);

    // Auto-maximize on mobile + trigger animation
    React.useEffect(() => {
        if (isMobile && isOpen) {
            setIsMaximized(true);
            // Trigger slide-up animation for mobile
            controls.start({
                y: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }
            });
        }
    }, [isMobile, isOpen, controls]);

    if (!isOpen) return null;

    const toggleMaximize = () => {
        setIsMaximized(!isMaximized);
    };

    // Handle swipe-down-to-close (mobile only, from header drag handle)
    const handleDragEnd = (event, info) => {
        // If dragged down more than 100px, close the window
        if (info.offset.y > 100) {
            controls.start({
                y: '100%',
                opacity: 0,
                transition: { duration: 0.2 }
            }).then(() => {
                onClose();
            });
        } else {
            // Snap back
            controls.start({
                y: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 400, damping: 30 }
            });
        }
    };

    const getPosition = () => {
        // On mobile, center all windows
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
            return { top: '40px', left: '50%', transform: 'translateX(-50%)' };
        }
        const positions = {
            about: { top: '80px', left: '60px' },
            projects: { top: '90px', left: '50%' },
            terminal: { top: '100px', left: '70px' },
            contact: { top: '80px', left: '55%' },
            ai: { top: '90px', left: '35%' },
            github: { top: '100px', left: '45%' },
            skills: { top: '85px', left: '40%' },
        };
        return positions[id] || { top: '100px', left: '30%' };
    };

    const position = getPosition();

    // Icon mapping for window titles
    const getWindowIcon = () => {
        const icons = {
            about: '👤',
            projects: '📁',
            terminal: '⚡',
            contact: '📧',
            ai: '🤖',
            github: '🐙',
            skills: '💼',
        };
        return icons[id] || '📄';
    };

    // Motion Variants - Platform Specific
    const mobileVariants = {
        initial: { opacity: 0, y: '100%' },
        animate: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 350, damping: 30, mass: 0.8 }
        },
        exit: {
            opacity: 0,
            y: '100%',
            transition: { duration: 0.2 }
        }
    };

    const desktopVariants = {
        initial: { opacity: 0, scale: 0.96 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 400, damping: 30 }
        },
        exit: {
            opacity: 0,
            scale: 0.98,
            transition: { duration: 0.15 }
        }
    };

    // Current variants based on platform
    const variants = isMobile ? mobileVariants : desktopVariants;

    return (
        <motion.div
            layout={!isMobile}
            variants={variants}
            initial="initial"
            animate={isMobile ? controls : "animate"}
            exit="exit"
            style={{
                zIndex,
                // Force full screen on mobile or if maximized
                ...((isMaximized || isMobile) ? {
                    width: '100vw',
                    // Use CSS variable for consistent layout accounting
                    height: isMobile
                        ? 'calc(100dvh - var(--mobile-nav-height) - var(--dock-height) - var(--safe-area-bottom, 0px))'
                        : 'calc(100vh - var(--nav-height))',
                    top: isMobile ? 'var(--mobile-nav-height)' : 'var(--nav-height)',
                    left: 0,
                    x: 0,
                    y: 0,
                    borderRadius: 0,
                    transform: 'none' // Important to prevent conflicts
                } : {
                    // Defensive check to prevent ReferenceError during hot reload
                    ...(typeof position !== 'undefined' ? position : {})
                })
            }}
            className={`
                absolute flex flex-col
                ${!(isMaximized || isMobile) ? 'w-[92vw] md:w-[560px] lg:w-[620px] rounded-2xl' : ''}
            `}
            onMouseDown={!isMobile ? onFocus : undefined}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            drag={!isMaximized && !isMobile} // Disable drag on mobile
            dragListener={!isMobile} // Disable drag listener on mobile to allow clicks
            dragMomentum={false}
            dragConstraints={{ left: -300, right: 400, top: -50, bottom: 400 }}
            dragElastic={0.03}
        >
            {/* Outer glow effect */}
            {!isMaximized && (
                <motion.div
                    className="absolute -inset-0.5 rounded-2xl pointer-events-none"
                    animate={{
                        opacity: isHovered ? 0.6 : 0,
                        boxShadow: isHovered
                            ? `0 0 40px ${theme.accent}30, 0 0 80px ${theme.accentSecondary}20`
                            : `0 0 0px transparent, 0 0 0px transparent`
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                        background: `linear-gradient(135deg, ${theme.accent}40, ${theme.accentSecondary}40, ${theme.accent}40)`,
                    }}
                />
            )}

            {/* Animated gradient border */}
            {isHovered && !isMaximized && (
                <div
                    className="absolute -inset-[1px] rounded-2xl opacity-50 pointer-events-none"
                    style={{
                        background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentSecondary}, ${theme.accent})`,
                        backgroundSize: '200% 200%',
                        animation: 'gradient-shift 3s linear infinite',
                    }}
                />
            )}

            {/* Window Frame */}
            <div
                className={`
                    relative flex flex-col h-full overflow-hidden
                    backdrop-blur-lg backdrop-saturate-125
                    transition-all duration-300
                    ${!isMaximized ? 'rounded-2xl' : ''}
                `}
                style={{
                    backgroundColor: isMobile ? '#121212f0' : `${theme.surface}e8`, // Solid mostly opaque dark bg on mobile for perf
                    boxShadow: (isHovered && !isMobile) // No expensive shadows on mobile
                        ? `0 25px 60px -12px ${theme.accent}25, 0 12px 30px -8px rgba(0,0,0,0.4)`
                        : (!isMobile ? `0 20px 50px -15px rgba(0,0,0,0.5), 0 8px 24px -8px rgba(0,0,0,0.3)` : 'none'),
                    border: `1px solid ${isHovered ? theme.accent + '30' : theme.border}`,
                    backdropFilter: isMobile ? 'none' : 'blur(16px) saturate(1.25)', // Explicitly remove expensive blur on mobile
                }}
            >
                {/* Subtle noise texture */}
                <div
                    className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                />

                {/* Mobile Header - Draggable for swipe-to-close */}
                {isMobile && (
                    <motion.div
                        className="flex flex-col items-center pt-3 pb-2 shrink-0 touch-none"
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={{ top: 0, bottom: 0.5 }}
                        onDrag={(e, info) => dragY.set(info.offset.y)}
                        onDragEnd={handleDragEnd}
                        style={{ cursor: 'grab' }}
                    >
                        {/* Swipe indicator pill - visual affordance */}
                        <div className="w-12 h-1.5 bg-white/50 rounded-full mb-3" />

                        {/* Swipe hint text */}
                        <span className="text-xs text-white/40 mb-2">Swipe down to close</span>

                        {/* App title with close button */}
                        <div className="w-full flex items-center justify-between px-5">
                            <div className="flex items-center gap-2">
                                <span className="text-lg">{getWindowIcon()}</span>
                                <span className="text-white font-semibold text-lg">{title}</span>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); onClose(); }}
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20 transition-colors touch-manipulation"
                                aria-label="Close app"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {/* Desktop Title Bar */}
                {!isMobile && (
                    <div
                        className="flex items-center h-10 px-3 shrink-0 cursor-grab active:cursor-grabbing relative"
                        style={{ borderBottom: `1px solid ${theme.border}` }}
                        onDoubleClick={toggleMaximize}
                    >
                        {/* Traffic Lights */}
                        <div className="flex items-center gap-1.5 mr-3">
                            <button
                                onClick={onClose}
                                className="group w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-all flex items-center justify-center shadow-sm"
                            >
                                <X className="w-2 h-2 text-[#8b0000] opacity-0 group-hover:opacity-100" strokeWidth={3} />
                            </button>
                            <button
                                onClick={onMinimize}
                                className="group w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-all flex items-center justify-center shadow-sm"
                            >
                                <Minus className="w-2 h-2 text-[#8b6508] opacity-0 group-hover:opacity-100" strokeWidth={3} />
                            </button>
                            <button
                                onClick={toggleMaximize}
                                className="group w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-all flex items-center justify-center shadow-sm"
                            >
                                <Maximize2 className="w-1.5 h-1.5 text-[#0d5415] opacity-0 group-hover:opacity-100" strokeWidth={3} />
                            </button>
                        </div>

                        {/* Title */}
                        <div className="flex-1 flex items-center justify-center gap-2 pr-12 overflow-hidden">
                            <motion.span
                                animate={{
                                    scale: isHovered ? [1, 1.1, 1] : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {getWindowIcon()}
                            </motion.span>
                            <span
                                className="text-[12px] font-medium select-none truncate transition-colors duration-200"
                                style={{ color: isHovered ? theme.text : theme.textMuted }}
                            >
                                {title}
                            </span>
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
                    </div>
                )}

                {/* Content */}
                <div
                    className={`
                        flex-1 overflow-y-auto overflow-x-hidden p-6
                        ${!isMaximized ? 'min-h-[320px] max-h-[58vh]' : 'h-full'}
                    `}
                    style={{ color: theme.text }}
                >
                    <div className="h-full">
                        {children}
                    </div>

                    {/* Mobile Home Indicator */}
                    {isMobile && (
                        <div className="flex justify-center py-4">
                            <div className="w-32 h-1 bg-white/30 rounded-full" />
                        </div>
                    )}
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${theme.accent}, ${theme.accentSecondary}, ${theme.accent}, transparent)`
                    }}
                    animate={{
                        opacity: isHovered ? 0.6 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </motion.div>
    );
};

// Add keyframes
if (typeof document !== 'undefined' && !document.getElementById('window-keyframes')) {
    const style = document.createElement('style');
    style.id = 'window-keyframes';
    style.textContent = `
        @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(style);
}

export default Window;
