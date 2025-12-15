import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, useMotionValue, useTransform, useAnimation, AnimatePresence } from 'framer-motion';
import useThemeStore, { themes } from '../stores/themeStore';
import TopBar from './TopBar';

const Window = ({ id, title, children, isOpen, onClose, zIndex, onFocus, onMinimize }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    // Mobile detection
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Swipe-to-close state for mobile
    const dragY = useMotionValue(0);
    const dragOpacity = useTransform(dragY, [0, 150], [1, 0.5]);
    const dragScale = useTransform(dragY, [0, 150], [1, 0.95]);
    const controls = useAnimation();
    const contentRef = useRef(null);

    // Auto-maximize on mobile + trigger animation
    useEffect(() => {
        if (isMobile && isOpen) {
            setIsMaximized(true);
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

    // Handle swipe-down-to-close (mobile only)
    const handleDragEnd = (event, info) => {
        if (info.offset.y > 100) {
            controls.start({
                y: '100%',
                opacity: 0,
                transition: { duration: 0.2 }
            }).then(() => {
                onClose();
            });
        } else {
            controls.start({
                y: 0,
                opacity: 1,
                transition: { type: 'spring', stiffness: 400, damping: 30 }
            });
        }
    };

    const getPosition = () => {
        if (isMobile) {
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

    // Animation variants
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
        initial: { opacity: 0, scale: 0.9, y: 20 },
        animate: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 25 }
        },
        exit: {
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.15 }
        }
    };

    // Drag handlers for mobile TopBar
    const dragHandlers = {
        drag: "y",
        dragConstraints: { top: 0, bottom: 0 },
        dragElastic: { top: 0, bottom: 0.5 },
        onDrag: (e, info) => dragY.set(info.offset.y),
        onDragEnd: handleDragEnd
    };

    // Window content
    const windowContent = (
        <motion.div
            key={`window-${id}`}
            variants={isMobile ? mobileVariants : desktopVariants}
            initial="initial"
            animate={isMobile ? controls : "animate"}
            exit="exit"
            style={{
                position: 'fixed',
                zIndex: zIndex,
                ...(isMobile ? {
                    top: `calc(var(--mobile-nav-height, 64px) + var(--safe-area-top, 0px))`,
                    left: 0,
                    right: 0,
                    bottom: `calc(var(--dock-height, 90px) + var(--safe-area-bottom, 0px))`,
                    width: '100%',
                } : {
                    ...position,
                    width: isMaximized ? '100%' : 'min(90vw, 700px)',
                    height: isMaximized ? '100%' : undefined,
                    top: isMaximized ? 0 : position.top,
                    left: isMaximized ? 0 : position.left,
                    transform: isMaximized ? 'none' : (position.transform || 'none'),
                }),
                opacity: isMobile ? dragOpacity : 1,
                scale: isMobile ? dragScale : 1,
            }}
            onClick={onFocus}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex flex-col"
        >
            {/* Window container */}
            <div
                className={`
                    flex flex-col overflow-hidden backdrop-blur-xl
                    ${isMobile ? 'h-full rounded-t-3xl' : 'rounded-xl shadow-2xl'}
                `}
                style={{
                    backgroundColor: theme.surface + 'f5',
                    border: `1px solid ${theme.border}`,
                    height: isMobile ? '100%' : (isMaximized ? '100vh' : undefined),
                }}
            >
                {/* TopBar */}
                <TopBar
                    id={id}
                    title={title}
                    theme={theme}
                    isMaximized={isMaximized}
                    isHovered={isHovered}
                    isMobile={isMobile}
                    onClose={onClose}
                    onMinimize={onMinimize}
                    onMaximize={toggleMaximize}
                    onFocus={onFocus}
                    setIsHovered={setIsHovered}
                    dragHandlers={dragHandlers}
                />

                {/* Content */}
                <div
                    ref={contentRef}
                    className={`
                        flex-1 overflow-y-auto overflow-x-hidden p-6 flex flex-col min-h-0
                        ${!isMaximized && !isMobile ? 'min-h-[320px] max-h-[60vh]' : ''}
                    `}
                    style={{ color: theme.text }}
                >
                    <div className="flex-1 flex flex-col min-h-0">
                        {children}
                    </div>

                    {/* Mobile Home Indicator */}
                    {isMobile && (
                        <div className="flex justify-center py-4 shrink-0">
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

    // Render via portal for proper stacking
    if (typeof document !== 'undefined') {
        let portalRoot = document.getElementById('window-portal-root');
        if (!portalRoot) {
            portalRoot = document.createElement('div');
            portalRoot.id = 'window-portal-root';
            portalRoot.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: var(--z-window, 40);';
            document.body.appendChild(portalRoot);
        }

        return ReactDOM.createPortal(
            <div style={{ pointerEvents: 'auto' }}>
                {windowContent}
            </div>,
            portalRoot
        );
    }

    return windowContent;
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
