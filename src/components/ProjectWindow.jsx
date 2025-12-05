import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, X, Calendar, Layers, Code, Globe, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useThemeStore, { themes } from '../stores/themeStore';

const ProjectWindow = ({ project, onClose }) => {
    const { t } = useTranslation();
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    if (!project) return null;

    const accentColor = project.color || theme.accent;

    return (
        <div className="flex flex-col h-full bg-transparent text-white">
            {/* Toolbar */}
            <div
                className="flex items-center justify-between px-4 py-3 shrink-0 backdrop-blur-xl border-b z-20"
                style={{
                    backgroundColor: 'color-mix(in srgb, var(--color-surface) 90%, transparent)',
                    borderColor: theme.border
                }}
            >
                <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-white/10">
                        <span className="text-xl">{project.icon}</span>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold leading-tight">{project.title}</h2>
                        <p className="text-xs text-white/50">{project.category}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {project.demo && project.demo !== '#' && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-2 transition-all hover:brightness-110"
                            style={{ backgroundColor: accentColor, color: '#fff' }}
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {t('projects.viewProject')}
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
                            title="View Code"
                        >
                            <Github className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative w-full h-64 rounded-2xl overflow-hidden border shadow-2xl group"
                    style={{ borderColor: theme.border }}
                >
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white/5">
                            <span className="text-4xl">{project.icon}</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400" />
                                {t('windows.about')}
                            </h3>
                            <p className="text-sm leading-relaxed text-white/80">
                                {project.longDesc || project.desc}
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                <Layers className="w-4 h-4 text-blue-400" />
                                {t('hero.techStack')}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors"
                                        style={{
                                            backgroundColor: 'rgba(255,255,255,0.03)',
                                            borderColor: theme.border,
                                            color: theme.text
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Details */}
                    <div className="space-y-6">
                        <div className="p-4 rounded-xl border bg-white/5 backdrop-blur-sm" style={{ borderColor: theme.border }}>
                            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">Project Info</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-sm">
                                    <Globe className="w-4 h-4 text-white/60" />
                                    <span className="text-white/80">{project.category}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar className="w-4 h-4 text-white/60" />
                                    <span className="text-white/80">2024</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Code className="w-4 h-4 text-white/60" />
                                    <span className="text-white/80">v1.0.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectWindow;
