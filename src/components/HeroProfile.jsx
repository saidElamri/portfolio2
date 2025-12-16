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

    return (
        <div className="h-full flex flex-col items-center justify-center p-8 text-center">
            {/* Profile Header - Centered, clean */}
            <div className="text-center mb-10">
                {/* Avatar */}
                <div className="inline-block mb-5">
                    <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                        style={{ backgroundColor: theme.surface }}
                    >
                        <span
                            className="text-3xl font-bold"
                            style={{ color: theme.accent }}
                        >
                            SE
                        </span>
                    </div>
                </div>

                {/* Name */}
                <h1 className="text-2xl font-bold mb-2" style={{ color: theme.text }}>
                    {t('hero.name')}
                </h1>

                {/* Title */}
                <p className="text-sm mb-4" style={{ color: theme.accent }}>
                    Full-Stack & AI Developer
                </p>

                {/* Location + Status */}
                <div className="flex items-center justify-center gap-4 text-sm" style={{ color: theme.textMuted }}>
                    <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {personalInfo.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-green-400">
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                        Available
                    </span>
                </div>
            </div>

            {/* Bio - Simple text */}
            <p
                className="text-center text-sm leading-relaxed mb-10 max-w-md mx-auto"
                style={{ color: theme.textMuted }}
            >
                Building AI-powered web applications that solve real problems.
                Focused on systems that work—not just UIs that look good.
            </p>

            {/* Action Buttons - Minimal */}
            <div className="flex justify-center gap-3 mb-10">
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onViewProjects}
                    className="px-6 py-2.5 rounded-lg text-sm font-medium text-white"
                    style={{ backgroundColor: theme.accent }}
                >
                    <span className="flex items-center gap-2">
                        <FolderOpen className="w-4 h-4" />
                        Projects
                    </span>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onSkills}
                    className="px-6 py-2.5 rounded-lg text-sm font-medium"
                    style={{
                        color: theme.text,
                        backgroundColor: theme.surface
                    }}
                >
                    <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4" />
                        Stack
                    </span>
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onContact}
                    className="px-6 py-2.5 rounded-lg text-sm font-medium"
                    style={{
                        color: theme.text,
                        backgroundColor: theme.surface
                    }}
                >
                    <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Contact
                    </span>
                </motion.button>
            </div>

            {/* Stats - Simple row */}
            <div className="flex justify-center gap-12 mb-10">
                <div className="text-center">
                    <div className="text-xl font-bold" style={{ color: theme.text }}>6</div>
                    <div className="text-xs" style={{ color: theme.textMuted }}>Projects</div>
                </div>
                <div className="text-center">
                    <div className="text-xl font-bold" style={{ color: theme.text }}>3</div>
                    <div className="text-xs" style={{ color: theme.textMuted }}>AI Apps</div>
                </div>
                <div className="text-center">
                    <div className="text-xl font-bold" style={{ color: theme.text }}>4</div>
                    <div className="text-xs" style={{ color: theme.textMuted }}>Languages</div>
                </div>
            </div>

            {/* Social Links - Bottom, minimal */}
            <div className="mt-auto flex justify-center gap-6">
                <a
                    href={`https://github.com/${personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors hover:bg-white/5"
                    style={{ color: theme.textMuted }}
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg transition-colors hover:bg-white/5"
                    style={{ color: theme.textMuted }}
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href="/resume.pdf"
                    download="Said_Elamri_Resume.pdf"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-white/5"
                    style={{ color: theme.accent }}
                >
                    <Download className="w-4 h-4" />
                    Resume
                </a>
            </div>
        </div>
    );
};

export default React.memo(HeroProfile);
