import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, Briefcase, GraduationCap, Zap } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { skills, certificates, journey } from '../data/portfolio';

// Skills Section - Clean list
const SkillsSection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="space-y-6" style={{ paddingLeft: '16px' }}>
            {skills.map((category, catIndex) => (
                <motion.div
                    key={category.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: catIndex * 0.1 }}
                >
                    {/* Category Header */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-base">{category.icon}</span>
                        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.text }}>
                            {category.title}
                        </span>
                    </div>

                    {/* Skills */}
                    <div className="space-y-3 pl-6">
                        {category.capabilities ? (
                            category.capabilities.map((cap) => (
                                <div key={cap.skill} className="space-y-1">
                                    <div className="text-sm font-medium" style={{ color: theme.accent }}>
                                        {cap.skill}
                                    </div>
                                    <p className="text-xs" style={{ color: theme.textMuted }}>
                                        {cap.statement}
                                    </p>
                                </div>
                            ))
                        ) : (
                            category.items?.map((skill) => (
                                <div key={skill.name} className="flex justify-between text-xs">
                                    <span style={{ color: theme.textMuted }}>{skill.name}</span>
                                    <span style={{ color: theme.accent }}>{skill.level}%</span>
                                </div>
                            ))
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// Certificates Section - Clean cards
const CertificatesSection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="grid grid-cols-2 gap-3" style={{ paddingLeft: '16px' }}>
            {certificates.map((cert, index) => (
                <motion.div
                    key={cert.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-xl"
                    style={{
                        backgroundColor: theme.surface,
                        border: `1px solid ${theme.border}`,
                    }}
                >
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg mb-3"
                        style={{ backgroundColor: theme.background }}
                    >
                        {cert.icon}
                    </div>
                    <h4 className="text-sm font-semibold mb-1" style={{ color: theme.text }}>
                        {cert.title}
                    </h4>
                    <div className="flex items-center gap-2 text-xs" style={{ color: theme.textMuted }}>
                        <Award className="w-3 h-3" />
                        <span>{cert.issuer}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

// Journey Section - Clean timeline
const JourneySection = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const getIcon = (type) => {
        switch (type) {
            case 'work': return Briefcase;
            case 'education': return GraduationCap;
            default: return Calendar;
        }
    };

    return (
        <div className="space-y-4" style={{ paddingLeft: '16px' }}>
            {journey.map((item, index) => {
                const Icon = getIcon(item.type);
                return (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4"
                    >
                        {/* Icon */}
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                            style={{ backgroundColor: theme.surface }}
                        >
                            <Icon className="w-4 h-4" style={{ color: theme.accent }} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-4" style={{ borderBottom: index < journey.length - 1 ? `1px solid ${theme.border}` : 'none' }}>
                            <h4 className="text-sm font-semibold" style={{ color: theme.text }}>
                                {item.title}
                            </h4>
                            <p className="text-xs mb-1" style={{ color: theme.accent }}>
                                {item.company} • {item.period}
                            </p>
                            <p className="text-xs" style={{ color: theme.textMuted }}>
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

// Main Skills Window
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
        <div className="h-full flex flex-col px-8 py-6">
            {/* Tab Navigation - Centered */}
            <div className="flex justify-center mb-6">
                <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: theme.background }}>
                    {tabs.map((tab) => {
                        const TabIcon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className="py-2 px-4 rounded-md text-xs font-medium flex items-center gap-1.5 transition-colors"
                                style={{
                                    backgroundColor: activeTab === tab.id ? theme.accent : 'transparent',
                                    color: activeTab === tab.id ? '#fff' : theme.textMuted,
                                }}
                            >
                                <TabIcon className="w-3.5 h-3.5" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto pb-4 ml-2">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="pl-4"
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
