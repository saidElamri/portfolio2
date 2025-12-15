import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, AlertCircle, GitBranch, Brain, Lightbulb, Layers, Target, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useThemeStore, { themes } from '../stores/themeStore';

// Section component for consistent styling
const Section = ({ title, icon: Icon, children, color }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="space-y-3">
            <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: color || theme.text }}>
                <Icon className="w-4 h-4" />
                {title}
            </h3>
            <div className="text-sm leading-relaxed" style={{ color: theme.textMuted }}>
                {children}
            </div>
        </div>
    );
};

// Stack breakdown component
const StackBreakdown = ({ frontend, backend, database }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const items = [
        { label: 'Frontend', value: frontend },
        { label: 'Backend', value: backend },
        { label: 'Database', value: database },
    ].filter(item => item.value);

    return (
        <div className="space-y-2">
            {items.map(item => (
                <div key={item.label} className="flex gap-3 text-xs">
                    <span className="font-medium w-16 shrink-0" style={{ color: theme.accent }}>{item.label}</span>
                    <span style={{ color: theme.textMuted }}>{item.value}</span>
                </div>
            ))}
        </div>
    );
};

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
            <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">

                {/* 1. Problem Statement - Lead with what was solved */}
                {project.problem && (
                    <Section title="The Problem" icon={AlertCircle} color="#f97316">
                        <p>{project.problem}</p>
                    </Section>
                )}

                {/* 2. Architecture Overview */}
                {project.architecture && (
                    <Section title="Architecture" icon={GitBranch} color="#3b82f6">
                        <p className="mb-4">{project.architecture.overview}</p>
                        <StackBreakdown
                            frontend={project.architecture.frontend}
                            backend={project.architecture.backend}
                            database={project.architecture.database}
                        />
                    </Section>
                )}

                {/* 3. AI Details - For AI/ML projects */}
                {project.aiDetails && (
                    <div
                        className="p-4 rounded-xl space-y-3"
                        style={{ backgroundColor: `${theme.accentSecondary}10`, border: `1px solid ${theme.accentSecondary}20` }}
                    >
                        <h3 className="text-sm font-semibold flex items-center gap-2" style={{ color: theme.accentSecondary }}>
                            <Brain className="w-4 h-4" />
                            AI Implementation
                        </h3>
                        <div className="space-y-3 text-xs">
                            <div>
                                <span className="font-medium" style={{ color: theme.text }}>Model: </span>
                                <span style={{ color: theme.textMuted }}>{project.aiDetails.model}</span>
                            </div>
                            <div>
                                <span className="font-medium" style={{ color: theme.text }}>Data Flow: </span>
                                <span style={{ color: theme.textMuted }}>{project.aiDetails.dataFlow}</span>
                            </div>
                            <div>
                                <span className="font-medium" style={{ color: theme.text }}>Why AI? </span>
                                <span style={{ color: theme.textMuted }}>{project.aiDetails.whyAI}</span>
                            </div>
                            {project.aiDetails.integration && (
                                <div>
                                    <span className="font-medium" style={{ color: theme.text }}>Integration: </span>
                                    <span style={{ color: theme.textMuted }}>{project.aiDetails.integration}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* 4. Key Technical Decisions */}
                {project.technicalDecisions && project.technicalDecisions.length > 0 && (
                    <Section title="Key Technical Decisions" icon={Lightbulb} color="#eab308">
                        <ul className="space-y-2">
                            {project.technicalDecisions.map((decision, i) => (
                                <li key={i} className="flex gap-2 text-xs">
                                    <ArrowRight className="w-3 h-3 shrink-0 mt-0.5" style={{ color: theme.accent }} />
                                    <span>{decision}</span>
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}

                {/* 5. Tech Stack */}
                <Section title="Tech Stack" icon={Layers}>
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
                </Section>

                {/* 6. Outcome / Results */}
                {project.outcome && (
                    <div
                        className="p-4 rounded-xl"
                        style={{ backgroundColor: '#7ee78710', border: '1px solid #7ee78720' }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <Target className="w-4 h-4" style={{ color: '#7ee787' }} />
                            <span className="text-sm font-semibold" style={{ color: '#7ee787' }}>Outcome</span>
                        </div>
                        <p className="text-xs" style={{ color: theme.textMuted }}>{project.outcome}</p>
                    </div>
                )}

                {/* Fallback: Long description if no structured data */}
                {!project.problem && !project.architecture && (
                    <Section title="About" icon={AlertCircle}>
                        <p>{project.longDesc || project.desc}</p>
                    </Section>
                )}

            </div>
        </div>
    );
};

export default ProjectWindow;

