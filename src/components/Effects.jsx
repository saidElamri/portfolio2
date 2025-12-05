import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useThemeStore, { themes } from '../stores/themeStore';

// Mouse spotlight that follows cursor with theme-colored glow
const Spotlight = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            animate={{ opacity: isVisible ? 1 : 0 }}
        >
            <div
                className="absolute rounded-full blur-[100px] transition-all duration-100"
                style={{
                    width: '400px',
                    height: '400px',
                    left: mousePos.x - 200,
                    top: mousePos.y - 200,
                    background: `radial-gradient(circle, ${theme.accent}15 0%, transparent 70%)`,
                }}
            />
        </motion.div>
    );
};

// Click ripple effect
const ClickRipple = () => {
    const [ripples, setRipples] = useState([]);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    useEffect(() => {
        const handleClick = (e) => {
            const ripple = {
                id: Date.now(),
                x: e.clientX,
                y: e.clientY,
            };
            setRipples(prev => [...prev, ripple]);
            setTimeout(() => {
                setRipples(prev => prev.filter(r => r.id !== ripple.id));
            }, 600);
        };

        window.addEventListener('click', handleClick);
        return () => window.removeEventListener('click', handleClick);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
            <AnimatePresence>
                {ripples.map(ripple => (
                    <motion.div
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="absolute rounded-full"
                        style={{
                            width: 20,
                            height: 20,
                            left: ripple.x - 10,
                            top: ripple.y - 10,
                            border: `2px solid ${theme.accent}`,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

// Konami code easter egg
const useKonamiCode = (callback) => {
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    const [inputSequence, setInputSequence] = useState([]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            const newSequence = [...inputSequence, e.key].slice(-10);
            setInputSequence(newSequence);

            if (newSequence.join(',') === konamiSequence.join(',')) {
                callback();
                setInputSequence([]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [inputSequence, callback]);
};

// Floating achievement notification
const Achievement = ({ show, title, description, onClose }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 4000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: 400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 400, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="fixed top-20 right-4 z-[100] p-4 rounded-xl backdrop-blur-xl border shadow-2xl max-w-xs"
                    style={{
                        backgroundColor: `${theme.surface}ee`,
                        borderColor: theme.accent,
                    }}
                >
                    <div className="flex items-start gap-3">
                        <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                            style={{ backgroundColor: `${theme.accent}20` }}
                        >
                            🏆
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm">{title}</h4>
                            <p className="text-white/60 text-xs">{description}</p>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <motion.div
                        initial={{ width: '100%' }}
                        animate={{ width: '0%' }}
                        transition={{ duration: 4, ease: 'linear' }}
                        className="absolute bottom-0 left-0 h-0.5 rounded-full"
                        style={{ backgroundColor: theme.accent }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

// Time-based greeting
const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 6) return { text: 'Night owl? 🦉', emoji: '🌙' };
    if (hour < 12) return { text: 'Good morning', emoji: '☀️' };
    if (hour < 17) return { text: 'Good afternoon', emoji: '🌤️' };
    if (hour < 21) return { text: 'Good evening', emoji: '🌅' };
    return { text: 'Good night', emoji: '🌙' };
};

// Animated typing text
const TypeWriter = ({ text, speed = 50, className = '' }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, text, speed]);

    return (
        <span className={className}>
            {displayText}
            <span className="animate-pulse">|</span>
        </span>
    );
};

// Live activity indicator
const LiveIndicator = () => {
    return (
        <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-[10px] text-green-400 uppercase tracking-wider font-medium">Live</span>
        </div>
    );
};

export {
    Spotlight,
    ClickRipple,
    useKonamiCode,
    Achievement,
    getGreeting,
    TypeWriter,
    LiveIndicator
};
