import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Download, ChevronRight, FolderOpen, Layers, Mail, Github, Linkedin } from 'lucide-react';
import useThemeStore, { themes } from '../stores/themeStore';
import { personalInfo } from '../data/portfolio';

const HeroProfile = ({ onViewProjects, onContact, onSkills }) => {
    const { t } = useTranslation();
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    // Navigation buttons component
    const NavButton = ({ onClick, icon: Icon, label, primary }) => (
        <motion.button
            onClick={onClick}
            onTouchEnd={(e) => { e.preventDefault(); onClick?.(); }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl transition-all touch-manipulation"
            style={{
                backgroundColor: primary ? theme.accent : theme.background,
                color: primary ? '#fff' : theme.text,
                border: primary ? 'none' : `1px solid ${theme.border}`,
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent'
            }}
        >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium">{label}</span>
        </motion.button>
    );

    return (
        <div className="flex flex-col h-full">
            {/* Profile Header - Clean and Confident */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left mb-8">
                {/* Avatar */}
                <div className="relative shrink-0">
                    <div
                        className="relative w-20 h-20 rounded-2xl flex items-center justify-center text-xl font-bold overflow-hidden"
                        style={{
                            backgroundColor: theme.surface,
                            border: `1px solid ${theme.border}`,
                        }}
                    >
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: `linear-gradient(135deg, ${theme.accent}, ${theme.accentSecondary})` }}
                        >
                            SE
                        </span>
                    </div>

                    {/* Available indicator */}
                    <div
                        className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                        style={{ backgroundColor: theme.surface, borderColor: theme.background }}
                    >
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#7ee787' }} />
                    </div>
                </div>

                {/* Name & Title */}
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-bold" style={{ color: theme.text }}>
                        {t('hero.name')}
                    </h1>
                    <p className="text-sm font-medium mt-1" style={{ color: theme.accent }}>
                        MERN Full-Stack & Web AI Developer
                    </p>

                    {/* Location badge */}
                    <div className="flex justify-center md:justify-start mt-3">
                        <span
                            className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
                            style={{
                                color: theme.textMuted,
                                backgroundColor: theme.background,
                                border: `1px solid ${theme.border}`
                            }}
                        >
                            <MapPin className="w-3 h-3" />
                            {personalInfo.location}
                            <span className="text-green-400">• Open to work</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Value Proposition - Single, clear statement */}
            <div
                className="p-5 rounded-xl mb-8"
                style={{ backgroundColor: theme.background }}
            >
                <p className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                    I build <span style={{ color: theme.text, fontWeight: 500 }}>AI-powered web applications</span> that solve real problems.
                    From neural networks to microservices, I focus on <span style={{ color: theme.text, fontWeight: 500 }}>systems that work</span>—not just UIs that look good.
                </p>
            </div>

            {/* Quick Navigation - 3 clear paths */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <NavButton
                    onClick={onViewProjects}
                    icon={FolderOpen}
                    label="Projects"
                    primary
                />
                <NavButton
                    onClick={onSkills}
                    icon={Layers}
                    label="Stack"
                />
                <NavButton
                    onClick={onContact}
                    icon={Mail}
                    label="Contact"
                />
            </div>

            {/* Proof Points - Real numbers, not percentages */}
            <div
                className="flex items-center justify-center gap-8 py-5 rounded-xl mb-8"
                style={{ backgroundColor: theme.background }}
            >
                <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: theme.accent }}>6</div>
                    <div className="text-xs mt-1" style={{ color: theme.textMuted }}>Production Apps</div>
                </div>
                <div className="w-px h-10" style={{ backgroundColor: theme.border }} />
                <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: theme.accent }}>3</div>
                    <div className="text-xs mt-1" style={{ color: theme.textMuted }}>AI Projects</div>
                </div>
                <div className="w-px h-10" style={{ backgroundColor: theme.border }} />
                <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: theme.accent }}>4</div>
                    <div className="text-xs mt-1" style={{ color: theme.textMuted }}>Languages</div>
                </div>
            </div>

            {/* Spacer to push social links to bottom */}
            <div className="flex-1" />

            {/* Social Links - at bottom */}
            <div className="flex items-center justify-center gap-4 pt-4" style={{ borderTop: `1px solid ${theme.border}` }}>
                <a
                    href={`https://github.com/${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg transition-colors hover:bg-white/5"
                    style={{ color: theme.textMuted }}
                >
                    <Github className="w-4 h-4" />
                </a>
                <a
                    href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg transition-colors hover:bg-white/5"
                    style={{ color: theme.textMuted }}
                >
                    <Linkedin className="w-4 h-4" />
                </a>
                <a
                    href="/resume.pdf"
                    download="Said_Elamri_Resume.pdf"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs transition-colors hover:bg-white/5"
                    style={{ color: theme.textMuted }}
                >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('common.resume') || 'Resume'}</span>
                </a>
            </div>
        </div>
    );
};

export default React.memo(HeroProfile);

