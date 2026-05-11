import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Download, FolderOpen, Mail, Github, Linkedin } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { personalInfo } from '../data/portfolio';
import MagneticButton from './MagneticButton';

// ─── DESIGN TOKENS ───
// Typography:  Primary = text-4xl font-bold tracking-tight
//              Secondary = text-sm font-medium opacity-60
//              Labels = text-[10px] uppercase tracking-widest
// Spacing:     gap-10 between sections, p-12 in window (handled by Window.jsx)
// Cards:       border border-white/5, NO background fill
// CTA:         bg-accent/10, border-accent/20 (glassy)

// ─── STAT CARD: Apple-style — zero bg, 1px border, centered numbers ───
const StatCard = ({ stat, theme, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + index * 0.08, type: 'spring', stiffness: 300, damping: 24 }}
        className="min-h-[120px] rounded-xl flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-0.5"
        style={{
            border: '1px solid rgba(255, 255, 255, 0.05)',
        }}
    >
        <div
            className="text-2xl font-bold tracking-tight"
            style={{ color: theme.text }}
        >
            {stat.value}
        </div>
        <div
            className="text-[10px] font-semibold uppercase tracking-widest opacity-40 mt-1.5"
            style={{ color: theme.text }}
        >
            {stat.label}
        </div>
    </motion.div>
);

// ─── HERO PROFILE: High-Fidelity macOS-grade layout ───
const HeroProfile = ({ onViewProjects, onContact, onSkills }) => {
    const { t } = useTranslation();
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const fadeUp = {
        hidden: { opacity: 0, y: 16 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, type: 'spring', stiffness: 300, damping: 24 },
        }),
    };

    return (
        <motion.div
            className="flex flex-col gap-10"
            initial="hidden"
            animate="visible"
        >
            {/* ════════════════════════════════════════════
                SECTION 1: Identity
            ════════════════════════════════════════════ */}
            <motion.div custom={0} variants={fadeUp}>
                {/* Name row: title + avatar circle */}
                <div className="flex items-start justify-between mb-3">
                    {/* Status badge */}
                    <div className="flex items-center gap-2.5">
                        <div className="relative shrink-0">
                            <div className="absolute -inset-1.5 rounded-full blur-md animate-pulse" style={{ backgroundColor: theme.accent + '33' }} />
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: theme.accent }} />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] opacity-40" style={{ color: theme.text }}>
                            Available
                        </span>
                    </div>

                    {/* SE Avatar Circle — subtle, 56px */}
                    <div
                        className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 hover:scale-105"
                        style={{
                            border: `1px solid ${theme.accent}30`,
                            backgroundColor: theme.accent + '10',
                        }}
                    >
                        <span
                            className="text-lg font-bold tracking-tight select-none"
                            style={{ color: theme.accent }}
                        >
                            {personalInfo.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                </div>

                {/* Primary Title — text-4xl font-bold tracking-tight */}
                <div className="pt-4 pb-6">
                    <h1
                        className="text-4xl font-bold tracking-tight leading-[1.1]"
                        style={{ color: theme.text }}
                    >
                        {t('hero.name').split(' ')[0]}
                        <br />
                        <span
                            className="bg-clip-text text-transparent italic inline-block"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${theme.accent}, ${theme.accent}88)`,
                                paddingRight: '8px',
                            }}
                        >
                            {t('hero.name').split(' ').slice(1).join(' ')}
                        </span>
                    </h1>
                </div>

                {/* Secondary Header — text-sm font-medium opacity-60 */}
                <p
                    className="text-sm font-medium opacity-60 mb-3"
                    style={{ color: theme.text }}
                >
                    {personalInfo.title}
                </p>

                {/* Body text */}
                <p
                    className="text-xs leading-relaxed opacity-40 max-w-sm"
                    style={{ color: theme.text }}
                >
                    Architecting <span className="font-semibold opacity-100" style={{ color: theme.accent }}>intelligent</span> systems
                    and digital experiences with high-fidelity performance.
                </p>
            </motion.div>

            {/* ════════════════════════════════════════════
                SECTION 2: Meta — location + email
            ════════════════════════════════════════════ */}
            <motion.div
                custom={1}
                variants={fadeUp}
                className="flex flex-wrap items-center gap-6 py-4"
                style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}
            >
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest opacity-40" style={{ color: theme.text }}>
                    <MapPin className="w-3 h-3 shrink-0" style={{ color: theme.accent }} />
                    {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest opacity-40" style={{ color: theme.text }}>
                    <Mail className="w-3 h-3 shrink-0" style={{ color: theme.accent }} />
                    {personalInfo.email}
                </div>
                {/* Social icons inline */}
                <div className="flex items-center gap-2 ml-auto">
                    {[
                        { icon: Github, url: `https://github.com/${personalInfo.github}` },
                        { icon: Linkedin, url: `https://linkedin.com/in/${personalInfo.linkedin}` },
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg transition-all hover:scale-110 active:scale-95"
                            style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
                        >
                            <social.icon className="w-4 h-4" style={{ color: theme.accent, opacity: 0.6 }} />
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* ════════════════════════════════════════════
                SECTION 3: Stats Grid — Apple style
            ════════════════════════════════════════════ */}
            <motion.div custom={2} variants={fadeUp}>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {personalInfo.highlights.slice(0, 4).map((stat, i) => (
                        <StatCard key={i} stat={stat} theme={theme} index={i} />
                    ))}
                </div>
            </motion.div>

            {/* ════════════════════════════════════════════
                SECTION 4: "Ready to Build" — Glassy Feature Card
                bg-accent/10 + border-accent/20, 50% smaller
            ════════════════════════════════════════════ */}
            <motion.div
                custom={3}
                variants={fadeUp}
                className="rounded-xl relative overflow-hidden"
                style={{
                    backgroundColor: theme.accent + '1A',  /* /10 */
                    border: `1px solid ${theme.accent}33`,  /* /20 */
                }}
            >
                <div className="px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                    {/* Left: text */}
                    <div>
                        <h3
                            className="text-lg font-bold tracking-tight mb-1"
                            style={{ color: theme.text }}
                        >
                            Ready to build?
                        </h3>
                        <p className="text-[10px] uppercase tracking-widest font-semibold opacity-40" style={{ color: theme.text }}>
                            Transforming concepts into digital reality
                        </p>
                    </div>

                    {/* Right: action buttons */}
                    <div className="flex items-center gap-2.5 shrink-0">
                        <MagneticButton
                            strength={0.15}
                            onClick={onViewProjects}
                            className="rounded-lg bg-white/10 backdrop-blur-sm font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-white/15 flex items-center justify-center gap-2"
                            style={{
                                color: theme.text,
                                minHeight: '36px',
                                padding: '8px 16px',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                            }}
                        >
                            <FolderOpen className="w-3.5 h-3.5" />
                            Artifacts
                        </MagneticButton>
                        <button
                            onClick={onSkills}
                            className="rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-white/10 flex items-center justify-center"
                            style={{
                                color: theme.text,
                                opacity: 0.6,
                                minHeight: '36px',
                                padding: '8px 14px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            Stack
                        </button>
                        <button
                            onClick={onContact}
                            className="rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-white/10 flex items-center justify-center"
                            style={{
                                color: theme.text,
                                opacity: 0.6,
                                minHeight: '36px',
                                padding: '8px 14px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            Engage
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* ════════════════════════════════════════════
                SECTION 5: Resume — minimal strip
            ════════════════════════════════════════════ */}
            <motion.div
                custom={4}
                variants={fadeUp}
                className="rounded-xl transition-all duration-500 hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(255, 255, 255, 0.05)' }}
            >
                <div className="px-8 py-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div
                            className="w-10 h-10 shrink-0 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: theme.accent + '10', border: `1px solid ${theme.accent}20` }}
                        >
                            <Download className="w-4.5 h-4.5" style={{ color: theme.accent }} />
                        </div>
                        <div>
                            <div className="text-sm font-bold tracking-tight" style={{ color: theme.text }}>Digital Dossier</div>
                            <div className="text-[10px] font-semibold uppercase tracking-widest opacity-30" style={{ color: theme.text }}>
                                PDF • 1.2 MB
                            </div>
                        </div>
                    </div>

                    {/* Animated bar (desktop) */}
                    <div className="flex-1 max-w-[120px] hidden lg:block mx-4">
                        <div className="h-px w-full bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute inset-y-0 left-0 w-8"
                                style={{ backgroundColor: theme.accent + '40' }}
                                animate={{ x: ['-100%', '200%'] }}
                                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </div>
                    </div>

                    <MagneticButton
                        strength={0.2}
                        onClick={() => {
                            const link = document.createElement('a');
                            link.href = '/resume.pdf';
                            link.download = 'Said_Elamri_Resume.pdf';
                            link.click();
                        }}
                        className="rounded-lg font-bold text-[10px] uppercase tracking-widest transition-all flex items-center justify-center"
                        style={{
                            border: `1px solid ${theme.accent}40`,
                            color: theme.accent,
                            minHeight: '36px',
                            padding: '8px 20px',
                        }}
                    >
                        Acquire
                    </MagneticButton>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default React.memo(HeroProfile);
