import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, useMotionValue, useTransform, useAnimation, useDragControls } from 'framer-motion';
import useThemeStore, { themes } from '../stores/themeStore';
import useAppStore from '../stores/appStore';
import TopBar from './TopBar';

const Window = ({ id, title, children, isOpen, onClose, zIndex, onFocus, onMinimize }) => {
    const [isMaximized, setIsMaximized] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { currentTheme } = useThemeStore();
    const { activeApp } = useAppStore();
    const theme = themes[currentTheme];
    const isActive = activeApp === id;

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

    const dragControls = useDragControls();

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
            drag={!isMobile && !isMaximized}
            dragControls={dragControls}
            dragListener={false} 
            dragMomentum={false}
            style={{
                position: 'fixed',
                zIndex: zIndex,
                ...(isMobile ? {
                    top: `calc(var(--mobile-nav-height, 64px) + env(safe-area-inset-top, 0px))`,
                    left: 0,
                    right: 0,
                    bottom: `calc(var(--dock-height, 90px) + env(safe-area-inset-bottom, 0px))`,
                    width: '100%',
                } : {
                    ...position,
                    width: isMaximized ? '100%' : 'min(95vw, 900px)',
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
            _dragControls={dragControls}
        >
            {/* ─── OUTER SHELL: Glassmorphism + border ─── */}
            <div
                className={`
                    flex flex-col overflow-hidden transition-all duration-500
                    ${isMobile ? 'h-full rounded-t-[2.5rem]' : ''}
                    ${isActive && !isMobile ? 'active-window-glow' : ''}
                    relative group/window
                `}
                style={{
                    /* RULE: bg-black/60 + backdrop-blur-xl */
                    backgroundColor: 'rgba(0, 0, 0, 0.60)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    /* RULE: 1px border border-white/20 */
                    border: '1px solid rgba(255, 255, 255, 0.20)',
                    boxShadow: isActive
                        ? `0 25px 60px -12px rgba(0, 0, 0, 0.8), 0 0 30px -10px ${theme.accent}44, inset 0 1px 0 rgba(255,255,255,0.06)`
                        : (isHovered 
                            ? `0 25px 60px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255,255,255,0.06)` 
                            : `0 10px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.04)`
                        ),
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
                    dragHandlers={isMobile ? dragHandlers : {}}
                    _dragControls={dragControls} 
                />

                {/* ─── SCROLL CONTAINER: Safe Flow Architecture ─── */}
                <div
                    ref={contentRef}
                    className={`
                        flex-1 overflow-y-auto overflow-x-hidden min-h-0 relative
                        custom-scrollbar
                        ${!isMaximized && !isMobile ? 'min-h-[450px] max-h-[85vh]' : ''}
                    `}
                >
                    {/* Mandatory safe padding zone */}
                    <div className="px-12 py-10">
                        {/* Centered professional content block without absolute escapes */}
                        <div className="max-w-4xl mx-auto relative">
                            {children}
                        </div>
                    </div>

                    {/* Mobile Home Indicator */}
                    {isMobile && (
                        <div className="flex justify-center py-4 shrink-0">
                            <div className="w-24 h-1.5 bg-white/10 rounded-full" />
                        </div>
                    )}
                </div>

                {/* Bottom accent glow */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none"
                    style={{
                        background: `linear-gradient(90deg, transparent, ${theme.accent}66, transparent)`
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        scaleX: isHovered ? 1 : 0.5
                    }}
                    transition={{ duration: 0.5 }}
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
