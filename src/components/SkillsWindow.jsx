import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, ChevronRight, Briefcase, GraduationCap, Zap } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { skills, certificates, journey } from '../data/portfolio';

// Skills Section - Capability Statements (New Format)
const SkillsSection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="space-y-5">
            {skills.map((category, catIndex) => (
                <motion.div
                    key={category.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: catIndex * 0.1 }}
                    className="space-y-3"
                >
                    {/* Category Header */}
                    <div className="flex items-center gap-2">
                        <span className="text-base">{category.icon}</span>
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.text }}>
                            {category.title}
                        </span>
                    </div>

                    {/* Capability Items */}
                    <div className="space-y-3 pl-6">
                        {category.capabilities ? (
                            // New format: capability statements
                            category.capabilities.map((cap, capIndex) => (
                                <motion.div
                                    key={cap.skill}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.1 + catIndex * 0.05 + capIndex * 0.03 }}
                                    className="space-y-1.5"
                                >
                                    <div className="text-sm font-medium" style={{ color: theme.accent }}>
                                        {cap.skill}
                                    </div>
                                    <p className="text-xs leading-relaxed" style={{ color: theme.textMuted }}>
                                        {cap.statement}
                                    </p>
                                    {cap.projects && cap.projects.length > 0 && (
                                        <div className="flex gap-1.5 flex-wrap mt-1">
                                            {cap.projects.map(p => (
                                                <span
                                                    key={p}
                                                    className="text-xs px-2 py-0.5 rounded"
                                                    style={{
                                                        backgroundColor: theme.background,
                                                        border: `1px solid ${theme.border}`,
                                                        color: theme.textMuted
                                                    }}
                                                >
                                                    {p}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))
                        ) : (
                            // Fallback: Legacy format with progress bars
                            category.items?.map((skill, skillIndex) => (
                                <div key={skill.name} className="space-y-1">
                                    <div className="flex justify-between text-xs">
                                        <span style={{ color: theme.textMuted }}>{skill.name}</span>
                                        <span className="font-medium" style={{ color: theme.accent }}>{skill.level}%</span>
                                    </div>
                                    <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.surface }}>
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentSecondary})` }}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 0.8, delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05 }}
                                        />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// Certificates Section
const CertificatesSection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="grid grid-cols-2 gap-3">
            {certificates.map((cert, index) => (
                <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.08 }}
                    className="p-4 rounded-xl group cursor-pointer"
                    style={{ backgroundColor: theme.background }}
                    whileHover={{ scale: 1.02, borderColor: cert.color + '50' }}
                >
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3"
                        style={{ backgroundColor: `${cert.color}15` }}
                    >
                        {cert.icon}
                    </div>
                    <h4 className="text-sm font-semibold line-clamp-1" style={{ color: theme.text }}>
                        {cert.title}
                    </h4>
                    <div className="flex items-center gap-1 mt-1.5 text-xs" style={{ color: theme.textMuted }}>
                        <Award className="w-2.5 h-2.5" />
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// Journey Timeline Section
const JourneySection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="relative">
            {/* Timeline line */}
            <div
                className="absolute left-[15px] top-0 bottom-0 w-0.5"
                style={{ background: `linear-gradient(to bottom, ${theme.accent}, ${theme.accentSecondary})` }}
            />

            <div className="space-y-4">
                {journey.map((item, index) => (
                    <motion.div
                        key={item.year}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.12 }}
                        className="relative flex gap-3 pl-1"
                    >
                        {/* Dot */}
                        <div
                            className="relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-base shrink-0 shadow-lg"
                            style={{
                                backgroundColor: theme.surface,
                                border: `2px solid ${item.color}`,
                                boxShadow: `0 0 12px ${item.color}40`
                            }}
                        >
                            {item.icon}
                        </div>

                        {/* Content */}
                        <div
                            className="flex-1 p-4 rounded-xl"
                            style={{ backgroundColor: theme.background }}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs font-bold" style={{ color: item.color }}>
                                    {item.year}
                                </span>
                                <ChevronRight className="w-3 h-3" style={{ color: theme.textMuted }} />
                            </div>
                            <h4 className="text-sm font-semibold" style={{ color: theme.text }}>
                                {item.title}
                            </h4>
                            <p className="text-xs mt-1 line-clamp-2" style={{ color: theme.textMuted }}>
                                {item.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {item.skills.slice(0, 3).map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2 py-1 text-xs rounded font-medium"
                                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};



// Main Skills Window Component
const SkillsWindow = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('skills');
    const { currentTheme } = useThemeStore();

    // Tab Navigation
    const tabs = [
        { id: 'skills', label: t('skills.tabs.skills'), icon: Zap },
        { id: 'certs', label: t('skills.tabs.certificates'), icon: GraduationCap },
        { id: 'journey', label: t('skills.tabs.journey'), icon: Calendar },
    ];
    const theme = themes[currentTheme];

    return (
        <div className="space-y-3">
            {/* Tab Navigation */}
            <div
                className="flex gap-1 p-1 rounded-xl"
                style={{ backgroundColor: theme.background }}
            >
                {tabs.map((tab) => {
                    const TabIcon = tab.icon;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className="flex-1 py-2.5 px-4 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                            style={{
                                background: activeTab === tab.id
                                    ? `linear-gradient(135deg, ${theme.accent}, ${theme.accentSecondary})`
                                    : 'transparent',
                                color: activeTab === tab.id ? '#fff' : theme.textMuted,
                            }}
                        >
                            <TabIcon className="w-3.5 h-3.5" />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="max-h-[50vh] overflow-y-auto pr-1 hide-scrollbar">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
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
