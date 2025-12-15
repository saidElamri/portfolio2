import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Volume2, VolumeX, Sparkles, Globe, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useThemeStore, { themes } from '../stores/themeStore';

const ThemePicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentTheme, setTheme, soundEnabled, toggleSound, reducedMotion, toggleReducedMotion } = useThemeStore();
    const { t, i18n } = useTranslation();
    const theme = themes[currentTheme];

    // Mobile detection
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    const languages = [
        { code: 'en', label: 'EN', flag: '🇬🇧' },
        { code: 'fr', label: 'FR', flag: '🇫🇷' },
        { code: 'ar', label: 'AR', flag: '🇲🇦' }
    ];

    // Close on escape
    useEffect(() => {
        const handleEsc = (e) => e.key === 'Escape' && setIsOpen(false);
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    return (
        <>
            {/* Toggle Button - Fixed position */}
            <motion.button
                whileHover={!isMobile ? { scale: 1.05 } : undefined}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    fixed z-[100] flex items-center justify-center rounded-full
                    backdrop-blur-xl border shadow-lg transition-all
                    ${isMobile
                        ? 'bottom-24 right-4 w-12 h-12'
                        : 'bottom-28 right-6 w-14 h-14 rounded-2xl'
                    }
                `}
                style={{
                    backgroundColor: isOpen
                        ? theme.accent
                        : `color-mix(in srgb, ${theme.surface} 85%, transparent)`,
                    borderColor: isOpen ? theme.accent : theme.border,
                    boxShadow: `0 8px 32px ${theme.accent}30`
                }}
            >
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Palette className={`${isMobile ? 'w-5 h-5' : 'w-5 h-5'} text-white`} />
                </motion.div>
            </motion.button>

            {/* Theme Panel - Modal on mobile, popover on desktop */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop for mobile */}
                        {isMobile && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                            />
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: isMobile ? 100 : 10, scale: isMobile ? 1 : 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: isMobile ? 100 : 10, scale: isMobile ? 1 : 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className={`
                                fixed z-[101] backdrop-blur-2xl border shadow-2xl
                                ${isMobile
                                    ? 'bottom-0 left-0 right-0 rounded-t-3xl max-h-[80vh] pb-8'
                                    : 'bottom-28 right-24 w-80 rounded-2xl max-h-[70vh]'
                                }
                            `}
                            style={{
                                backgroundColor: `color-mix(in srgb, ${theme.surface} 95%, transparent)`,
                                borderColor: theme.border
                            }}
                        >
                            {/* Mobile drag indicator */}
                            {isMobile && (
                                <div className="flex justify-center pt-3 pb-2">
                                    <div className="w-10 h-1 bg-white/30 rounded-full" />
                                </div>
                            )}

                            {/* Header */}
                            <div
                                className="px-5 py-4 flex items-center justify-between"
                                style={{ borderBottom: `1px solid ${theme.border}` }}
                            >
                                <div>
                                    <h3 className="font-semibold text-white text-lg">
                                        {t('theme.title') || 'Appearance'}
                                    </h3>
                                    <p className="text-xs text-white/50 mt-0.5">Customize your experience</p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                                >
                                    <X className="w-4 h-4 text-white/60" />
                                </button>
                            </div>

                            {/* Scrollable content */}
                            <div className={`overflow-y-auto max-h-[calc(80vh-120px)] p-5 space-y-6 ${isMobile ? 'rounded-t-2xl' : 'rounded-b-xl'}`}>
                                {/* Theme Grid */}
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-wider mb-3">
                                        {t('theme.themes') || 'Themes'}
                                    </p>
                                    <div className="grid grid-cols-5 gap-3">
                                        {Object.entries(themes).map(([key, themeOption]) => (
                                            <motion.button
                                                key={key}
                                                whileHover={!isMobile ? { scale: 1.1, y: -2 } : undefined}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setTheme(key)}
                                                className={`
                                                    relative aspect-square rounded-xl overflow-hidden transition-all
                                                    ${currentTheme === key
                                                        ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent shadow-lg'
                                                        : 'hover:ring-1 hover:ring-white/30'
                                                    }
                                                `}
                                                title={themeOption.name}
                                            >
                                                <div
                                                    className="absolute inset-0"
                                                    style={{ backgroundColor: themeOption.background }}
                                                >
                                                    <div
                                                        className="absolute bottom-0 left-0 right-0 h-1/2"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${themeOption.accent}, ${themeOption.accentSecondary})`
                                                        }}
                                                    />
                                                </div>
                                                {currentTheme === key && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="absolute inset-0 flex items-center justify-center bg-black/40"
                                                    >
                                                        <Check className="w-5 h-5 text-white" />
                                                    </motion.div>
                                                )}
                                            </motion.button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-white/60 text-center font-medium mt-3">
                                        {themes[currentTheme]?.name}
                                    </p>
                                </div>

                                {/* Language Selector */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3 text-xs text-white/40 uppercase tracking-wider">
                                        <Globe className="w-3 h-3" />
                                        <span>{t('theme.language') || 'Language'}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => i18n.changeLanguage(lang.code)}
                                                className={`
                                                    flex-1 py-3 rounded-xl text-sm font-medium transition-all flex flex-col items-center gap-1
                                                    ${i18n.language === lang.code
                                                        ? 'bg-white/15 text-white border-white/20'
                                                        : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80 border-transparent'
                                                    } border
                                                `}
                                            >
                                                <span className="text-xl">{lang.flag}</span>
                                                <span>{lang.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Settings Toggles */}
                                <div className="space-y-3">
                                    <p className="text-xs text-white/40 uppercase tracking-wider">Settings</p>

                                    {/* Sound Toggle */}
                                    <button
                                        onClick={toggleSound}
                                        className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors"
                                        style={{
                                            backgroundColor: theme.background,
                                            border: `1px solid ${theme.border}`
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            {soundEnabled
                                                ? <Volume2 className="w-4 h-4 text-white/70" />
                                                : <VolumeX className="w-4 h-4 text-white/40" />
                                            }
                                            <span className="text-sm text-white/80">
                                                {t('theme.sound') || 'Sound Effects'}
                                            </span>
                                        </div>
                                        <div
                                            className="w-11 h-6 rounded-full transition-colors flex items-center px-0.5"
                                            style={{ backgroundColor: soundEnabled ? theme.accent : 'rgba(255,255,255,0.2)' }}
                                        >
                                            <motion.div
                                                animate={{ x: soundEnabled ? 20 : 0 }}
                                                className="w-5 h-5 rounded-full bg-white shadow-md"
                                            />
                                        </div>
                                    </button>

                                    {/* Reduced Motion Toggle */}
                                    <button
                                        onClick={toggleReducedMotion}
                                        className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors"
                                        style={{
                                            backgroundColor: theme.background,
                                            border: `1px solid ${theme.border}`
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Sparkles className="w-4 h-4 text-white/70" />
                                            <span className="text-sm text-white/80">
                                                {t('theme.motion') || 'Reduce Motion'}
                                            </span>
                                        </div>
                                        <div
                                            className="w-11 h-6 rounded-full transition-colors flex items-center px-0.5"
                                            style={{ backgroundColor: reducedMotion ? theme.accent : 'rgba(255,255,255,0.2)' }}
                                        >
                                            <motion.div
                                                animate={{ x: reducedMotion ? 20 : 0 }}
                                                className="w-5 h-5 rounded-full bg-white shadow-md"
                                            />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default ThemePicker;
