import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { MapPin, Download, FolderOpen, Layers, Mail, Github, Linkedin } from 'lucide-react';
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
            className="flex flex-col items-center justify-center gap-2 py-5 rounded-xl transition-all touch-manipulation"
            style={{
                backgroundColor: primary ? theme.accent : theme.surface,
                color: primary ? '#fff' : theme.text,
                border: primary ? 'none' : `1px solid ${theme.border}`,
                touchAction: 'manipulation',
                WebkitTapHighlightColor: 'transparent'
            }}
        >
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium">{label}</span>
        </motion.button>
    );

    return (
        <div className="flex flex-col justify-between h-full min-h-[500px] p-2">
            {/* Top Section: Profile */}
            <div className="flex items-start gap-5">
                {/* Avatar */}
                <div className="relative shrink-0">
                    <div
                        className="relative w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-bold overflow-hidden"
                        style={{
                            backgroundColor: theme.surface,
                            border: `2px solid ${theme.accent}30`,
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
                        className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 flex items-center justify-center"
                        style={{ backgroundColor: theme.surface, borderColor: theme.background }}
                    >
                        <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#7ee787' }} />
                    </div>
                </div>

                {/* Name & Title */}
                <div className="flex-1 min-w-0 pt-1">
                    <h1 className="text-2xl font-bold" style={{ color: theme.text }}>
                        {t('hero.name')}
                    </h1>
                    <p className="text-base font-medium mt-1" style={{ color: theme.accent }}>
                        MERN Full-Stack & Web AI Developer
                    </p>

                    {/* Location badge */}
                    <div className="flex mt-3">
                        <span
                            className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full"
                            style={{
                                color: theme.textMuted,
                                backgroundColor: theme.background,
                                border: `1px solid ${theme.border}`
                            }}
                        >
                            <MapPin className="w-3.5 h-3.5" />
                            {personalInfo.location}
                            <span className="text-green-400">• Open to work</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Middle Section: Value Proposition + Buttons */}
            <div className="space-y-6">
                <div
                    className="p-6 rounded-xl"
                    style={{ backgroundColor: theme.background }}
                >
                    <p className="text-base leading-relaxed" style={{ color: theme.textMuted }}>
                        I build <span style={{ color: theme.text, fontWeight: 500 }}>AI-powered web applications</span> that solve real problems.
                        From neural networks to microservices, I focus on <span style={{ color: theme.text, fontWeight: 500 }}>systems that work</span>—not just UIs that look good.
                    </p>
                </div>

                {/* Navigation Buttons */}
                <div className="grid grid-cols-3 gap-4">
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
            </div>

            {/* Bottom Section: Stats + Social */}
            <div className="space-y-6">
                {/* Stats Section */}
                <div
                    className="flex items-center justify-around py-6 rounded-xl"
                    style={{ backgroundColor: theme.background }}
                >
                    <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: theme.accent }}>6</div>
                        <div className="text-sm mt-1" style={{ color: theme.textMuted }}>Production Apps</div>
                    </div>
                    <div className="w-px h-12" style={{ backgroundColor: theme.border }} />
                    <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: theme.accent }}>3</div>
                        <div className="text-sm mt-1" style={{ color: theme.textMuted }}>AI Projects</div>
                    </div>
                    <div className="w-px h-12" style={{ backgroundColor: theme.border }} />
                    <div className="text-center">
                        <div className="text-3xl font-bold" style={{ color: theme.accent }}>4</div>
                        <div className="text-sm mt-1" style={{ color: theme.textMuted }}>Languages</div>
                    </div>
                </div>

                {/* Social Links */}
                <div
                    className="flex items-center justify-center gap-6 pt-4"
                    style={{ borderTop: `1px solid ${theme.border}` }}
                >
                    <a
                        href={`https://github.com/${personalInfo.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 rounded-xl transition-colors hover:bg-white/5"
                        style={{ color: theme.textMuted }}
                    >
                        <Github className="w-5 h-5" />
                        <span className="text-sm">GitHub</span>
                    </a>
                    <a
                        href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 p-3 rounded-xl transition-colors hover:bg-white/5"
                        style={{ color: theme.textMuted }}
                    >
                        <Linkedin className="w-5 h-5" />
                        <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                        href="/resume.pdf"
                        download="Said_Elamri_Resume.pdf"
                        className="flex items-center gap-2 px-4 py-3 rounded-xl transition-colors"
                        style={{
                            color: theme.accent,
                            backgroundColor: theme.accent + '15',
                            border: `1px solid ${theme.accent}30`
                        }}
                    >
                        <Download className="w-4 h-4" />
                        <span className="text-sm font-medium">Resume</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default React.memo(HeroProfile);
