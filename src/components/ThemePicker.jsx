import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Volume2, VolumeX, Sparkles, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useThemeStore, { themes } from '../stores/themeStore';

const ThemePicker = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { currentTheme, setTheme, soundEnabled, toggleSound, reducedMotion, toggleReducedMotion } = useThemeStore();
    const { t, i18n } = useTranslation();

    const languages = [
        { code: 'en', label: 'English', flag: '🇬🇧' },
        { code: 'fr', label: 'Français', flag: '🇫🇷' },
        { code: 'ar', label: 'العربية', flag: '🇲🇦' }
    ];

    return (
        <div className="fixed bottom-28 right-6 z-[100]">
            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-2xl backdrop-blur-xl border flex items-center justify-center text-white transition-all shadow-xl"
                style={{
                    backgroundColor: isOpen ? 'var(--color-accent)' : 'color-mix(in srgb, var(--color-surface) 80%, transparent)',
                    borderColor: isOpen ? 'var(--color-accent)' : 'var(--color-border)'
                }}
            >
                <Palette className="w-5 h-5" />
            </motion.button>

            {/* Theme Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className="absolute bottom-18 right-0 w-80 backdrop-blur-2xl rounded-2xl border shadow-2xl overflow-hidden"
                        style={{
                            backgroundColor: 'color-mix(in srgb, var(--color-surface) 95%, transparent)',
                            borderColor: 'var(--color-border)'
                        }}
                    >
                        {/* Header */}
                        <div className="px-5 py-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                            <h3 className="font-semibold text-white text-base">{t('theme.title')}</h3>
                            <div className="h-1"></div>
                            <p className="text-xs text-white/50">Customize your experience</p>
                        </div>

                        <div className="h-4"></div>

                        {/* Theme Grid */}
                        <div className="px-5">
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">{t('theme.themes')}</p>

                            <div className="h-3"></div>

                            <div className="grid grid-cols-5 gap-3">
                                {Object.entries(themes).map(([key, theme]) => (
                                    <motion.button
                                        key={key}
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setTheme(key)}
                                        className={`relative w-12 h-12 rounded-xl overflow-hidden transition-all ${currentTheme === key
                                            ? 'ring-2 ring-white ring-offset-2 ring-offset-transparent shadow-lg'
                                            : 'hover:ring-1 hover:ring-white/30'
                                            }`}
                                        title={theme.name}
                                    >
                                        {/* Theme preview */}
                                        <div
                                            className="absolute inset-0"
                                            style={{ backgroundColor: theme.background }}
                                        >
                                            <div
                                                className="absolute bottom-0 left-0 right-0 h-1/2"
                                                style={{
                                                    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentSecondary})`
                                                }}
                                            />
                                        </div>

                                        {/* Checkmark */}
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

                            <div className="h-3"></div>

                            {/* Current theme label */}
                            <p className="text-xs text-white/60 text-center font-medium">
                                {themes[currentTheme]?.name}
                            </p>
                        </div>

                        <div className="h-5"></div>

                        {/* Settings */}
                        <div className="px-5 pb-5">
                            <p className="text-[10px] text-white/40 uppercase tracking-wider">Settings</p>

                            <div className="h-3"></div>

                            {/* Language Selector */}
                            <div className="mb-4">
                                <div className="flex items-center gap-2 mb-2 text-white/80 text-sm">
                                    <Globe className="w-3.5 h-3.5" />
                                    <span>{t('theme.language')}</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => i18n.changeLanguage(lang.code)}
                                            className={`py-2 rounded-lg text-xs font-medium transition-all ${i18n.language === lang.code
                                                    ? 'bg-white/10 text-white border-white/20'
                                                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80 border-transparent'
                                                } border`}
                                        >
                                            <div className="text-lg mb-0.5">{lang.flag}</div>
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sound Toggle */}
                            <button
                                onClick={toggleSound}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors"
                                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
                            >
                                <div className="flex items-center gap-3">
                                    {soundEnabled ? <Volume2 className="w-4 h-4 text-white/70" /> : <VolumeX className="w-4 h-4 text-white/40" />}
                                    <span className="text-sm text-white/80">{t('theme.sound')}</span>
                                </div>
                                <div
                                    className="w-10 h-6 rounded-full transition-colors flex items-center px-0.5"
                                    style={{ backgroundColor: soundEnabled ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)' }}
                                >
                                    <motion.div
                                        animate={{ x: soundEnabled ? 16 : 0 }}
                                        className="w-5 h-5 rounded-full bg-white shadow-md"
                                    />
                                </div>
                            </button>

                            <div className="h-3"></div>

                            {/* Reduced Motion Toggle */}
                            <button
                                onClick={toggleReducedMotion}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-colors"
                                style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-border)' }}
                            >
                                <div className="flex items-center gap-3">
                                    <Sparkles className="w-4 h-4 text-white/70" />
                                    <span className="text-sm text-white/80">{t('theme.motion')}</span>
                                </div>
                                <div
                                    className="w-10 h-6 rounded-full transition-colors flex items-center px-0.5"
                                    style={{ backgroundColor: reducedMotion ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)' }}
                                >
                                    <motion.div
                                        animate={{ x: reducedMotion ? 16 : 0 }}
                                        className="w-5 h-5 rounded-full bg-white shadow-md"
                                    />
                                </div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemePicker;
