import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, Briefcase, GraduationCap, Zap, ChevronRight, ExternalLink, Globe, Shield, Database, Cpu } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { skills, certificates, journey, languages } from '../data/portfolio';

// ─── Sub-components ───

const SkillBadge = ({ name }) => (
    <span
        className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border whitespace-nowrap transition-all duration-300 hover:border-white/30 hover:text-white/80 cursor-default"
        style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderColor: 'rgba(255, 255, 255, 0.08)',
            color: 'rgba(255, 255, 255, 0.40)',
        }}
    >
        {name}
    </span>
);

// ─── SKILL CATEGORY CARD ───
// Uses CSS Grid with minmax(300px, 1fr) for the capabilities list
const SkillCategoryCard = ({ category, index, theme }) => {
    const icons = {
        'Frontend': Zap,
        'Backend': Database,
        'AI / ML': Cpu,
        'DevOps & Security': Shield,
    };
    const Icon = icons[category.title] || Zap;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderColor: 'rgba(255, 255, 255, 0.10)',
            }}
        >
            {/* Hover glow */}
            <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-15 transition-all duration-700 pointer-events-none"
                style={{ backgroundColor: theme.accent }}
            />

            {/* Content Inner: mandatory 32px padding */}
            <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                    >
                        <Icon className="w-6 h-6" style={{ color: theme.accent }} />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold tracking-tight text-white/90 group-hover:text-white transition-colors">
                            {category.title}
                        </h3>
                        <p className="text-[10px] uppercase tracking-widest text-white/25 font-medium">
                            {category.capabilities?.length || 0} capabilities
                        </p>
                    </div>
                </div>

                {/* Capabilities list */}
                <div className="space-y-6">
                    {category.capabilities?.map((cap) => (
                        <div key={cap.skill} className="group/item">
                            <div className="flex items-center justify-between mb-1.5">
                                <span className="text-sm font-bold text-white/70 group-hover/item:text-white transition-colors tracking-tight">
                                    {cap.skill}
                                </span>
                                <div className="hidden sm:flex gap-1.5 opacity-0 group-hover/item:opacity-100 transition-all duration-300">
                                    {cap.projects?.slice(0, 1).map(p => (
                                        <SkillBadge key={p} name={p} />
                                    ))}
                                </div>
                            </div>
                            {/* Body text: text-sm, leading-relaxed */}
                            <p className="text-sm leading-relaxed text-white/35 group-hover/item:text-white/55 transition-colors font-normal">
                                {cap.statement}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Progress bar */}
                <div className="mt-8 flex items-center gap-3 opacity-20 group-hover:opacity-50 transition-opacity duration-500">
                    <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ duration: 1.5, ease: 'circOut', delay: 0.3 }}
                            className="h-full"
                            style={{ backgroundColor: theme.accent }}
                        />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-white/40 shrink-0">
                        100%
                    </span>
                </div>
            </div>

            {/* Bottom edge glow */}
            <div
                className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                style={{ backgroundColor: theme.accent, boxShadow: `0 0 12px ${theme.accent}` }}
            />
        </motion.div>
    );
};

// ─── SKILLS SECTION ───
// RULE: grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
const SkillsSection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="space-y-6">
            {/* ── Skill cards grid: auto-fit with 300px minimum ── */}
            <div
                className="grid gap-6"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
            >
                {skills.map((category, index) => (
                    <SkillCategoryCard key={category.title} category={category} index={index} theme={theme} />
                ))}
            </div>

            {/* ── Languages Card ── */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="rounded-2xl border relative overflow-hidden group transition-all duration-500 hover:-translate-y-1"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                }}
            >
                {/* Content Inner: 32px safe zone */}
                <div className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-5 relative z-10">
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.08)',
                            }}
                        >
                            <Globe className="w-6 h-6" style={{ color: theme.accent }} />
                        </div>
                        <div>
                            <span className="text-base font-bold tracking-wider uppercase text-white/90 block mb-0.5">
                                Global Reach
                            </span>
                            <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium">
                                Multilingual Professional
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 relative z-10">
                        {languages.map(lang => (
                            <div key={lang.name} className="flex flex-col items-center gap-3 group/lang cursor-default">
                                <span className="text-3xl grayscale group-hover/lang:grayscale-0 transition-all duration-500 group-hover/lang:scale-125">
                                    {lang.flag}
                                </span>
                                <div className="flex flex-col items-center">
                                    <span className="text-sm font-bold text-white/80 group-hover/lang:text-white transition-colors tracking-tight">
                                        {lang.name}
                                    </span>
                                    <span className="text-[10px] uppercase tracking-wider font-medium" style={{ color: theme.accent + '99' }}>
                                        {lang.level}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// ─── CERTIFICATES SECTION ───
const CertificatesSection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div
            className="grid gap-6 pb-8"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
            {certificates.map((cert, index) => (
                <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="group rounded-2xl border relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        borderColor: 'rgba(255, 255, 255, 0.10)',
                    }}
                >
                    {/* Content Inner: 32px safe zone */}
                    <div className="p-8">
                        {/* Icon area */}
                        <div
                            className="w-full h-40 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.40)',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                            }}
                        >
                            <span className="text-6xl opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700">
                                {cert.icon}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-3 mb-4">
                            <span
                                className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                                style={{
                                    backgroundColor: theme.accent + '15',
                                    color: theme.accent,
                                    border: `1px solid ${theme.accent}30`,
                                }}
                            >
                                {cert.issuer}
                            </span>
                            <span className="text-[10px] font-medium text-white/30 uppercase tracking-wider">
                                {cert.date}
                            </span>
                        </div>

                        <h4 className="text-xl font-bold text-white/95 mb-3 leading-tight tracking-tight group-hover:text-white transition-colors">
                            {cert.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-white/40 mb-6 group-hover:text-white/60 transition-colors">
                            {cert.description}
                        </p>

                        <button className="flex items-center gap-3 text-xs font-bold tracking-wider text-white/40 hover:text-white transition-all uppercase group/btn">
                            <span>Verify Credential</span>
                            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" style={{ color: theme.accent }} />
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// ─── JOURNEY SECTION ───
const JourneySection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="max-w-3xl mx-auto py-6 relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="space-y-20">
                {journey.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className={`relative flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        {/* Content card */}
                        <div
                            className={`w-full md:w-[45%] rounded-2xl border group/card transition-all duration-500 hover:-translate-y-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                                borderColor: 'rgba(255, 255, 255, 0.08)',
                            }}
                        >
                            {/* Content Inner: 32px safe zone */}
                            <div className="p-8">
                                <div className={`flex items-center gap-4 mb-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 transition-transform duration-500 group-hover/card:scale-110 group-hover/card:rotate-6"
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                            border: '1px solid rgba(255, 255, 255, 0.08)',
                                            color: theme.accent,
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white tracking-tight mb-0.5">{item.title}</h4>
                                        <p className="text-[10px] text-white/25 font-medium tracking-widest uppercase">
                                            Professional Milestone
                                        </p>
                                    </div>
                                </div>

                                <p className="text-sm leading-relaxed text-white/40 mb-6 group-hover/card:text-white/60 transition-colors">
                                    {item.description}
                                </p>

                                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                    {item.skills?.map(skill => (
                                        <SkillBadge key={skill} name={skill} />
                                    ))}
                                </div>

                                {/* Mobile year */}
                                <div className="md:hidden mt-6 text-center">
                                    <span className="text-3xl font-bold text-white/10 tracking-tighter">{item.year}</span>
                                </div>
                            </div>
                        </div>

                        {/* Year badge (center, desktop) */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 items-center justify-center z-10">
                            <div
                                className="w-full h-full rounded-full flex items-center justify-center transition-all duration-500 group-hover/card:scale-110"
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                                    border: '3px solid rgba(255, 255, 255, 0.08)',
                                }}
                            >
                                <span className="text-xs font-bold text-white tracking-wider">{item.year}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

// ─── MAIN WINDOW ───
const SkillsWindow = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('skills');
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const tabs = [
        { id: 'skills', label: t('skills.tabs.skills'), icon: Zap },
        { id: 'certs', label: t('skills.tabs.certificates'), icon: GraduationCap },
        { id: 'journey', label: t('skills.tabs.journey'), icon: Calendar },
    ];

    return (
        <div className="h-full flex flex-col min-h-0">
            {/* Header — inside Window's p-8 safe zone */}
            <div className="flex flex-col items-start gap-4 mb-8 shrink-0">
                <div className="min-w-0">
                    <h2 className="text-2xl font-bold tracking-tight text-white mb-2 leading-none">
                        TECHNICAL{' '}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(to right, ${theme.accent}, ${theme.accent}99)` }}
                        >
                            MASTERY
                        </span>
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="h-[2px] w-10" style={{ backgroundColor: theme.accent }} />
                        <p className="text-[10px] uppercase tracking-[0.4em] text-white/25 font-medium">
                            Architecture • Engineering • Security
                        </p>
                    </div>
                </div>

                {/* Tab Switcher */}
                <div
                    className="relative flex p-1.5 rounded-xl shrink-0"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.40)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                >
                    {tabs.map((tab) => {
                        const TabIcon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="relative py-2.5 px-4 rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 z-10"
                                style={{
                                    color: isActive ? '#000' : 'rgba(255, 255, 255, 0.40)',
                                    minHeight: '44px',
                                }}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabGlow"
                                        className="absolute inset-0 rounded-lg z-[-1]"
                                        style={{ backgroundColor: theme.accent }}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <TabIcon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-black' : 'group-hover:text-white/80'}`} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {activeTab === 'skills' && <SkillsSection />}
                        {activeTab === 'certs' && <CertificatesSection />}
                        {activeTab === 'journey' && <JourneySection />}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default SkillsWindow;
