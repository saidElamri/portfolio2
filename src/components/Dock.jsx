import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound, { sounds } from '../hooks/useSound';
import useThemeStore, { themes } from '../stores/themeStore';

const DockItem = ({ icon: Icon, label, onClick, isOpen, index, isMobile }) => {
    const playHover = useSound(sounds.hover, 0.1);
    const playClick = useSound(sounds.click, 0.3);
    const [isHovered, setIsHovered] = useState(false);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.05, type: 'spring', stiffness: 400 }}
            whileHover={!isMobile ? { y: -10, scale: 1.15 } : {}}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                playClick();
                onClick();
            }}
            onMouseEnter={() => { if (!isMobile) playHover(); setIsHovered(true); }}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex flex-col items-center group touch-manipulation"
            aria-label={label}
        >
            {/* Reflection glow - desktop only */}
            {!isMobile && (
                <motion.div
                    className="absolute -bottom-6 w-10 h-4 rounded-full blur-md"
                    style={{ backgroundColor: theme.accent }}
                    animate={{
                        opacity: isHovered ? 0.4 : isOpen ? 0.2 : 0,
                        scale: isHovered ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                />
            )}

            {/* Icon Container */}
            <motion.div
                className={`relative rounded-[14px] flex items-center justify-center overflow-hidden
                    ${isMobile ? 'w-11 h-11' : 'w-12 h-12'}
                `}
                style={{
                    backgroundColor: isOpen
                        ? `color-mix(in srgb, ${theme.accent} 20%, transparent)`
                        : 'rgba(255,255,255,0.08)',
                    border: `1px solid ${isOpen ? theme.accent + '40' : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: isOpen
                        ? `0 8px 24px ${theme.accent}30, inset 0 1px 0 rgba(255,255,255,0.1)`
                        : 'inset 0 1px 0 rgba(255,255,255,0.05)'
                }}
            >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Moroccan pattern overlay for open items */}
                {isOpen && (
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0l8 8-8 8L0 8z' fill='${encodeURIComponent(theme.accent)}' fill-opacity='0.5'/%3E%3C/svg%3E")`,
                            backgroundSize: '8px 8px',
                        }}
                    />
                )}

                <Icon
                    className={`transition-all duration-200 relative z-10 ${isMobile ? 'w-4 h-4' : 'w-5 h-5'}`}
                    style={{
                        color: isOpen ? theme.accent : 'rgba(255,255,255,0.8)',
                        filter: isHovered && !isMobile ? `drop-shadow(0 0 6px ${theme.accent})` : 'none'
                    }}
                />
            </motion.div>

            {/* Tooltip - desktop only */}
            {!isMobile && (
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.9 }}
                            transition={{ duration: 0.15, type: 'spring', stiffness: 500 }}
                            className="absolute -top-10 px-3 py-1.5 text-white text-[11px] font-medium rounded-lg shadow-xl whitespace-nowrap z-50"
                            style={{
                                backgroundColor: theme.surface,
                                border: `1px solid ${theme.border}`,
                            }}
                        >
                            {label}
                            <div
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                                style={{
                                    backgroundColor: theme.surface,
                                    borderRight: `1px solid ${theme.border}`,
                                    borderBottom: `1px solid ${theme.border}`
                                }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}

            {/* Active Indicator */}
            <motion.div
                className="absolute -bottom-1.5 h-1 rounded-full"
                style={{ backgroundColor: theme.accent }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    width: isOpen ? (isMobile ? 12 : isHovered ? 20 : 16) : 4,
                    boxShadow: isOpen ? `0 0 8px ${theme.accent}` : 'none'
                }}
                transition={{ duration: 0.2 }}
            />
        </motion.button>
    );
};

const Dock = ({ items }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="fixed bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 z-50 px-2 pb-[env(safe-area-inset-bottom)]">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Dock glow - desktop only */}
                {!isMobile && (
                    <motion.div
                        className="absolute inset-0 rounded-[22px] blur-xl"
                        style={{ backgroundColor: theme.accent }}
                        animate={{ opacity: isHovered ? 0.15 : 0.05 }}
                        transition={{ duration: 0.3 }}
                    />
                )}

                {/* Dock container */}
                <motion.div
                    className={`relative flex items-center backdrop-blur-2xl transition-colors duration-300
                        ${isMobile ? 'gap-1 px-2 py-2 rounded-2xl' : 'gap-2 px-3 py-2.5 rounded-[20px]'}
                    `}
                    style={{
                        backgroundColor: `color-mix(in srgb, ${theme.surface} 75%, transparent)`,
                        border: `1px solid ${isHovered && !isMobile ? theme.accent + '30' : theme.border}`,
                        boxShadow: isMobile
                            ? '0 8px 24px rgba(0,0,0,0.3)'
                            : '0 20px 50px -12px rgba(0,0,0,0.4), 0 8px 24px -8px rgba(0,0,0,0.3)'
                    }}
                >
                    {/* Separator - desktop only */}
                    {!isMobile && <div className="w-px h-6 bg-white/10 mr-1" />}

                    {items.map((item, index) => (
                        <React.Fragment key={item.id}>
                            <DockItem {...item} index={index} isMobile={isMobile} />
                            {/* Separator - desktop only */}
                            {!isMobile && (index === 2 || index === 5) && (
                                <div className="w-px h-6 bg-white/10 mx-1" />
                            )}
                        </React.Fragment>
                    ))}

                    {/* Separator - desktop only */}
                    {!isMobile && <div className="w-px h-6 bg-white/10 ml-1" />}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Dock;
