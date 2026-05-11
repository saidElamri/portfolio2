import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, AlertCircle, GitBranch, Brain, Lightbulb, Layers, Target, ArrowRight, Code, Terminal, Sparkles, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import useThemeStore, { themes } from '../stores/themeStore';
import MagneticButton from './MagneticButton';

// Section component for consistent styling
const Section = ({ title, icon: Icon, children, color, className = "" }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`p-8 rounded-[2.5rem] border backdrop-blur-2xl relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:bg-white/[0.04] glass-shine-hover ${className}`}
            style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderColor: 'rgba(255, 255, 255, 0.05)'
            }}
        >
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div 
                className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full transition-all duration-700 ease-in-out"
                style={{ backgroundColor: color || theme.accent }}
            />
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5" style={{ color: color || theme.accent }} />
                </div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-white/100 transition-colors">
                    {title}
                </h3>
            </div>
            <div className="text-sm leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                {children}
            </div>
        </motion.div>
    );
};

// Stack breakdown component
const StackBreakdown = ({ frontend, backend, database }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const items = [
        { label: 'Frontend', value: frontend, icon: <Code className="w-4 h-4" /> },
        { label: 'Backend', value: backend, icon: <Terminal className="w-4 h-4" /> },
        { label: 'Database', value: database, icon: <Layers className="w-4 h-4" /> },
    ].filter(item => item.value);

    return (
        <div className="grid grid-cols-1 gap-4 mt-6">
            {items.map(item => (
                <div 
                    key={item.label} 
                    className="flex items-center gap-4 p-4 rounded-[1.5rem] border bg-black/20 group/stack hover:bg-black/40 transition-all duration-300"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}
                >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/5 text-white/40 group-hover/stack:text-white transition-colors">
                        {item.icon}
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase font-black tracking-widest text-white/20 mb-0.5">{item.label}</span>
                        <span className="text-xs font-bold text-white/80">{item.value}</span>
                    </div>
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
        <div className="flex flex-col h-full bg-black/10 text-white overflow-hidden">
            {/* Immersive Hero Header */}
            <div className="relative h-80 shrink-0 overflow-hidden">
                {/* Background Pattern/Gradient */}
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{ 
                        background: `radial-gradient(circle at 20% 50%, ${accentColor}, transparent 60%), radial-gradient(circle at 80% 80%, ${theme.accentSecondary}, transparent 60%)`
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#050505]" />
                
                {/* Header Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-12 pb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-end gap-8 mb-6"
                    >
                        <div className="w-24 h-24 rounded-[2rem] flex items-center justify-center text-5xl shadow-2xl backdrop-blur-3xl border border-white/10 relative group"
                             style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border"
                                      style={{ backgroundColor: `${accentColor}10`, color: accentColor, borderColor: `${accentColor}30` }}>
                                    {project.category}
                                </span>
                                <div className="h-[1px] w-12 bg-white/10" />
                            </div>
                            <h2 className="text-5xl font-black tracking-tighter mb-2 leading-none">{project.title}</h2>
                        </div>
                    </motion.div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-white/40 max-w-2xl leading-relaxed italic font-medium"
                    >
                        "{project.desc}"
                    </motion.p>
                </div>

                {/* Floating Actions */}
                <div className="absolute top-10 right-10 flex gap-4">
                    {project.github && (
                        <MagneticButton
                            strength={0.3}
                            onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                            className="w-14 h-14 rounded-2xl backdrop-blur-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-white/40 hover:text-white shadow-xl"
                        >
                            <Github className="w-6 h-6" />
                        </MagneticButton>
                    )}
                    {project.demo && project.demo !== '#' && (
                        <MagneticButton
                            strength={0.2}
                            onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                            className="px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:brightness-110 transition-all"
                            style={{ backgroundColor: accentColor, color: '#000' }}
                        >
                            <div className="flex items-center gap-3">
                                <ExternalLink className="w-4 h-4" />
                                {t('projects.viewProject')}
                            </div>
                        </MagneticButton>
                    )}
                </div>
            </div>

            {/* Scrollable Content Bento Grid */}
            <div className="flex-1 overflow-y-auto p-12 pt-4 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    
                    {/* The Problem */}
                    {project.problem && (
                        <Section title="The Challenge" icon={AlertCircle} color="#ff6b6b" className="md:col-span-1 lg:col-span-1">
                            <p className="text-lg font-bold text-white/90 leading-tight mb-4">{project.problem}</p>
                            <div className="w-12 h-1 bg-red-500/20 rounded-full" />
                        </Section>
                    )}

                    {/* Architecture */}
                    {project.architecture && (
                        <Section title="Core Architecture" icon={GitBranch} color="#4dabf7" className="md:col-span-2 lg:col-span-2">
                            <div className="grid md:grid-cols-2 gap-8 h-full">
                                <div className="flex flex-col justify-center">
                                    <p className="text-sm leading-relaxed text-white/50 mb-6">{project.architecture.overview}</p>
                                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400">
                                        <Sparkles className="w-3 h-3" />
                                        <span>Highly Scalable Design</span>
                                    </div>
                                </div>
                                <StackBreakdown
                                    frontend={project.architecture.frontend}
                                    backend={project.architecture.backend}
                                    database={project.architecture.database}
                                />
                            </div>
                        </Section>
                    )}

                    {/* AI Details */}
                    {project.aiDetails && (
                        <Section title="AI Orchestration" icon={Brain} color={theme.accentSecondary} className="md:col-span-2 lg:col-span-2">
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <span className="text-[9px] uppercase font-black text-white/20 tracking-widest">Model</span>
                                    <p className="text-xs font-bold text-white/80">{project.aiDetails.model}</p>
                                </div>
                                <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <span className="text-[9px] uppercase font-black text-white/20 tracking-widest">Pipeline</span>
                                    <p className="text-xs font-bold text-white/80">{project.aiDetails.dataFlow}</p>
                                </div>
                                <div className="space-y-2 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                                    <span className="text-[9px] uppercase font-black text-white/20 tracking-widest">Logic</span>
                                    <p className="text-xs font-bold text-white/80">{project.aiDetails.whyAI}</p>
                                </div>
                            </div>
                            {project.aiDetails.integration && (
                                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-[11px] leading-relaxed flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                    <p className="text-white/40 italic"><span className="text-white/60 font-bold not-italic mr-2">Integration:</span> {project.aiDetails.integration}</p>
                                </div>
                            )}
                        </Section>
                    )}

                    {/* Technical Decisions */}
                    {project.technicalDecisions && (
                        <Section title="Key Decisions" icon={Lightbulb} color="#ffd43b" className="lg:row-span-2">
                            <ul className="space-y-6">
                                {project.technicalDecisions.map((decision, i) => (
                                    <li key={i} className="flex gap-4 group/li">
                                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover/li:border-white/20 transition-colors">
                                            <span className="text-[10px] font-black text-white/20 group-hover/li:text-white/100 transition-colors">{i + 1}</span>
                                        </div>
                                        <span className="text-xs font-bold leading-relaxed text-white/50 group-hover/li:text-white/80 transition-colors">{decision}</span>
                                    </li>
                                ))}
                            </ul>
                        </Section>
                    )}

                    {/* Tech Stack Pills */}
                    <Section title="Tech Stack" icon={Layers} color="#fff">
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all hover:scale-110 hover:bg-white/10 hover:border-white/30 cursor-default"
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.03)',
                                        borderColor: 'rgba(255,255,255,0.05)',
                                        color: 'rgba(255,255,255,0.6)'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </Section>

                    {/* Failure Handling */}
                    {project.failureHandling && (
                        <Section title="Reliability" icon={Shield} color="#fa5252">
                            <div className="flex items-start gap-4">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                    <Shield className="w-4 h-4" />
                                </div>
                                <p className="text-xs leading-relaxed font-medium text-white/50">{project.failureHandling}</p>
                            </div>
                        </Section>
                    )}

                    {/* Outcome */}
                    {project.outcome && (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 rounded-[3rem] md:col-span-2 flex flex-col justify-center relative overflow-hidden group shadow-2xl glass-shine-hover"
                            style={{ 
                                background: `linear-gradient(135deg, ${accentColor}10, ${theme.accentSecondary}05)`,
                                border: `1px solid ${accentColor}20` 
                            }}
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="absolute -right-20 -bottom-20 w-64 h-64 blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity duration-1000" style={{ backgroundColor: accentColor }} />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                    <Target className="w-8 h-8" style={{ color: accentColor }} />
                                </div>
                                <div>
                                    <span className="text-2xl font-black uppercase tracking-tighter block" style={{ color: accentColor }}>Project Outcome</span>
                                    <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-bold">Metrics & Impact</span>
                                </div>
                            </div>
                            <p className="text-2xl font-black leading-tight text-white/90 tracking-tight" style={{ lineHeight: '1.2' }}>
                                "{project.outcome}"
                            </p>
                            
                            <div className="mt-8 flex items-center gap-3 text-white/20">
                                <div className="h-[1px] flex-1 bg-white/5" />
                                <Sparkles className="w-4 h-4" />
                                <div className="h-[1px] flex-1 bg-white/5" />
                            </div>
                        </motion.div>
                    )}

                </div>
                
                {/* Spacer */}
                <div className="h-20" />
            </div>
        </div>
    );
};

export default ProjectWindow;
