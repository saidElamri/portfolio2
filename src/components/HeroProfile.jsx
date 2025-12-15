import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Download, ChevronRight, Sparkles, Zap, Brain, Server, Shield, Globe } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { personalInfo, languages } from '../data/portfolio';



const HeroProfile = ({ onViewProjects, onContact }) => {
    const { t } = useTranslation();
    const [statusIndex, setStatusIndex] = useState(0);
    const [taglineIndex, setTaglineIndex] = useState(0);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const statusMessages = [
        { text: t('hero.status.0', "Building AI solutions"), icon: Brain, color: "#a371f7" },
        { text: t('hero.status.1', "Open for opportunities"), icon: Zap, color: "#7ee787" },
        { text: t('hero.status.2', "Crafting microservices"), icon: Server, color: "#58a6ff" },
        { text: t('hero.status.3', "Securing systems"), icon: Shield, color: "#f0b429" },
    ];

    const taglines = t('hero.taglines', { returnObjects: true });

    useEffect(() => {
        const timer = setInterval(() => {
            setStatusIndex((prev) => (prev + 1) % statusMessages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTaglineIndex((prev) => (prev + 1) % (taglines?.length || 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [taglines]);

    const currentStatus = statusMessages[statusIndex];
    const StatusIcon = currentStatus.icon;

    return (
        <div className="space-y-6">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                {/* Avatar */}
                <div className="relative group shrink-0">
                    <motion.div
                        className="absolute -inset-1 rounded-2xl opacity-60 blur-sm"
                        style={{
                            background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentSecondary})`,
                        }}
                        animate={{
                            opacity: [0.4, 0.7, 0.4],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />

                    <div
                        className="relative w-20 h-20 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-2xl md:text-xl font-bold overflow-hidden"
                        style={{
                            backgroundColor: theme.surface,
                            border: `2px solid ${theme.accent}30`,
                        }}
                    >
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0l10 10-10 10L0 10z' fill='${encodeURIComponent(theme.accent)}' fill-opacity='0.4'/%3E%3C/svg%3E")`,
                                backgroundSize: '10px 10px',
                            }}
                        />
                        <span
                            className="bg-clip-text text-transparent relative z-10"
                            style={{ backgroundImage: `linear-gradient(135deg, ${theme.accent}, ${theme.accentSecondary})` }}
                        >
                            SE
                        </span>
                    </div>

                    {/* Live indicator */}
                    <div
                        className="absolute -bottom-0.5 -right-0.5 w-5 h-5 md:w-4 md:h-4 rounded-full border-2 flex items-center justify-center"
                        style={{ backgroundColor: theme.surface, borderColor: theme.background }}
                    >
                        <motion.div
                            className="w-2.5 h-2.5 md:w-2 md:h-2 rounded-full"
                            style={{ backgroundColor: '#7ee787' }}
                            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </div>

                {/* Name & Status */}
                <div className="flex-1 min-w-0 w-full flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl md:text-xl font-bold" style={{ color: theme.text }}>
                            {t('hero.name')}
                        </h1>
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                        >
                            <Sparkles className="w-5 h-5 md:w-3.5 md:h-3.5" style={{ color: theme.accent }} />
                        </motion.div>
                    </div>

                    {/* Rotating tagline */}
                    <div className="h-5 md:h-4 overflow-hidden mt-1 md:mt-0.5">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={taglineIndex}
                                initial={{ y: 16, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -16, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="text-sm md:text-xs"
                                style={{ color: theme.textMuted }}
                            >
                                {taglines && taglines[taglineIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Location & Status */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-2 mt-3 md:mt-2">
                        <span
                            className="flex items-center gap-1.5 text-sm md:text-xs px-3 py-1.5 md:px-2.5 md:py-1 rounded-full"
                            style={{
                                color: theme.textMuted,
                                backgroundColor: theme.background,
                                border: `1px solid ${theme.border}`
                            }}
                        >
                            <MapPin className="w-3 h-3 md:w-2.5 md:h-2.5" />
                            {personalInfo.location}
                        </span>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={statusIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex items-center gap-1.5 px-3 py-1.5 md:px-2.5 md:py-1 rounded-full text-sm md:text-xs font-medium"
                                style={{
                                    backgroundColor: `${currentStatus.color}12`,
                                    color: currentStatus.color,
                                    border: `1px solid ${currentStatus.color}25`,
                                }}
                            >
                                <StatusIcon className="w-3 h-3 md:w-2.5 md:h-2.5" />
                                {currentStatus.text}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Skill Orbs - Compact */}
            <div
                className="grid grid-cols-3 gap-3 p-4 rounded-xl"
                style={{ backgroundColor: theme.background }}
            >
                {[
                    { label: t('projects.aiMl'), icon: Brain, value: 90, color: theme.accentSecondary },
                    { label: t('projects.fullStack'), icon: Zap, value: 95, color: theme.accent },
                    { label: 'DevOps', icon: Server, value: 85, color: '#7ee787' },
                    { label: 'Security', icon: Shield, value: 78, color: '#f0b429' },
                ].map((skill, i) => (
                    <motion.div
                        key={skill.label}
                        className="flex flex-col items-center gap-1 py-1"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.08 }}
                    >
                        <div className="relative w-12 h-12">
                            <svg className="w-full h-full -rotate-90">
                                <circle cx="20" cy="20" r="16" fill="none" stroke={theme.border} strokeWidth="2.5" />
                                <motion.circle
                                    cx="20" cy="20" r="16" fill="none" stroke={skill.color} strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeDasharray={`${skill.value * 1.005} 100.5`}
                                    initial={{ strokeDasharray: '0 100.5' }}
                                    animate={{ strokeDasharray: `${skill.value * 1.005} 100.5` }}
                                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <skill.icon className="w-3.5 h-3.5" style={{ color: skill.color }} />
                            </div>
                        </div>
                        <span className="text-xs uppercase tracking-wider" style={{ color: theme.textMuted }}>
                            {skill.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            {/* Languages - Compact */}
            <div
                className="flex items-center gap-2 p-3 rounded-lg overflow-x-auto hide-scrollbar"
                style={{ backgroundColor: theme.background }}
            >
                <Globe className="w-4 h-4 shrink-0" style={{ color: theme.accent }} />
                {languages.map((lang, i) => (
                    <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.08 }}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs shrink-0"
                        style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
                    >
                        <span>{lang.flag}</span>
                        <span style={{ color: theme.text }}>{lang.name}</span>
                    </motion.div>
                ))}
            </div>

            {/* Quick Stats - Compact grid */}
            <div className="grid grid-cols-4 gap-2">
                {personalInfo.highlights.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className="text-center py-3 rounded-lg"
                        style={{ backgroundColor: theme.background }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 + i * 0.08 }}
                        whileHover={{ borderColor: theme.accent + '50', scale: 1.02 }}
                    >
                        <div className="text-sm">{stat.icon}</div>
                        <div className="text-sm font-bold" style={{ color: theme.accent }}>{stat.value}</div>
                        <div className="text-xs uppercase tracking-wider" style={{ color: theme.textMuted }}>{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Code Block - Compact */}
            <div
                className="font-mono text-xs p-4 rounded-lg space-y-1"
                style={{ backgroundColor: theme.background }}
            >
                <div style={{ color: theme.textMuted }}>// Currently building</div>
                <div>
                    <span style={{ color: theme.accent }}>const</span>{' '}
                    <span style={{ color: theme.text }}>focus</span> = [
                    <span style={{ color: theme.accentSecondary }}>'AI apps'</span>,{' '}
                    <span style={{ color: theme.accentSecondary }}>'microservices'</span>,{' '}
                    <span style={{ color: theme.accentSecondary }}>'i18n'</span>];
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 relative z-50">
                <button
                    onClick={() => { console.log('View Projects button clicked!'); if (onViewProjects) onViewProjects(); }}
                    onTouchEnd={(e) => { e.preventDefault(); console.log('View Projects touch!'); if (onViewProjects) onViewProjects(); }}
                    className="flex-1 py-3 rounded-lg font-medium text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform touch-manipulation"
                    style={{
                        background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentSecondary})`,
                        color: '#fff',
                        boxShadow: `0 4px 14px ${theme.accent}30`,
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent'
                    }}
                >
                    {t('hero.viewProjects')}
                    <ChevronRight className="w-4 h-4" />
                </button>

                <button
                    onClick={() => { console.log('Contact button clicked!'); if (onContact) onContact(); }}
                    onTouchEnd={(e) => { e.preventDefault(); console.log('Contact touch!'); if (onContact) onContact(); }}
                    className="flex-1 py-3 rounded-lg font-medium text-sm active:scale-95 transition-transform touch-manipulation"
                    style={{
                        backgroundColor: theme.surface,
                        border: `1px solid ${theme.border}`,
                        color: theme.text,
                        touchAction: 'manipulation',
                        WebkitTapHighlightColor: 'transparent'
                    }}
                >
                    {t('hero.contactMe')}
                </button>
            </div>

            {/* Resume Link */}
            <motion.a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 py-2 text-xs"
                style={{ color: theme.textMuted }}
                whileHover={{ color: theme.accent }}
            >
                <Download className="w-3 h-3" />
                {t('common.download')} {t('common.resume')} (PDF)
            </motion.a>
        </div>
    );
};

export default React.memo(HeroProfile);
