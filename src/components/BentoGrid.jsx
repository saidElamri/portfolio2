import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Zap, Star, LayoutGrid, Layers, Sparkles } from 'lucide-react';
import { projectCategories } from '../data/portfolio';
import useThemeStore, { themes } from '../stores/themeStore';

// Category Filter - Modern pill design
const CategoryFilter = ({ categories, activeCategory, onSelect }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const { t } = useTranslation();

    return (
        <div className="flex justify-center mb-8 px-4">
            <div
                className="flex gap-1 p-2 rounded-xl backdrop-blur-3xl border shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-x-auto no-scrollbar max-w-full relative"
                style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    borderColor: 'rgba(255, 255, 255, 0.05)'
                }}
            >
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => onSelect(cat.id)}
                        className="px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-500 relative group z-10"
                        style={{
                            color: activeCategory === cat.id ? '#000' : 'rgba(255, 255, 255, 0.4)',
                        }}
                    >
                        {activeCategory === cat.id && (
                            <motion.div
                                layoutId="active-cat-bg"
                                className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                style={{ backgroundColor: theme.accent }}
                                transition={{ type: 'spring', bounce: 0.15, duration: 0.7 }}
                            />
                        )}
                        <span className="relative z-20 flex items-center gap-2">
                            <span className="group-hover:scale-125 transition-transform duration-300">{cat.icon}</span>
                            {t(`projects.categories.${cat.id}`, cat.label)}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

// Project Card - Premium Bento Design
const ProjectCard = ({ project, index, onOpenProject }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const accentColor = project.color || theme.accent;
    const isFeatured = project.featured;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
            }}
            className={`
                group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700
                ${isFeatured ? 'col-span-full' : ''}
            `}
            onClick={() => onOpenProject && onOpenProject(project)}
        >
            {/* Background Layers */}
            <div 
                className="absolute inset-0 bg-[#080808] transition-all duration-700 group-hover:scale-110"
            />
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000"
                style={{ 
                    background: `radial-gradient(circle at top right, ${accentColor}, transparent 70%)`
                }}
            />
            
            {/* Content Container — card-based with 1.5rem internal padding */}
            <div className="relative h-full p-6 flex flex-col justify-between border border-white/[0.03] group-hover:border-white/[0.1] transition-colors duration-500 backdrop-blur-sm">
                
                {/* Top Section */}
                <div className="flex justify-between items-start">
                    <div 
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-white/[0.02] border border-white/5 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                    >
                        {project.icon}
                    </div>
                    <div className="flex items-center gap-3">
                        {isFeatured && (
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40">
                                <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                                <span className="text-[9px] font-black uppercase tracking-widest">Featured Project</span>
                            </div>
                        )}
                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                            <ArrowUpRight className="w-5 h-5 text-white/40" />
                        </div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="space-y-4">
                    <div className="space-y-1">
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/20 block" style={{ color: `${accentColor}40` }}>
                            {project.category}
                        </span>
                        <h3 
                            className={`${isFeatured ? 'text-[2rem]' : 'text-[1.5rem]'} font-black tracking-tighter leading-tight mb-6 group-hover:text-white transition-colors duration-500`}
                        >
                            {project.title}
                        </h3>
                    </div>
                    
                    <p 
                        className={`${isFeatured ? 'text-lg' : 'text-sm'} leading-relaxed text-white/30 group-hover:text-white/50 transition-colors duration-500 line-clamp-2 italic`}
                    >
                        {project.problem || project.desc}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.slice(0, isFeatured ? 5 : 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest bg-white/[0.03] border border-white/[0.05] text-white/30 group-hover:border-white/20 group-hover:text-white/60 transition-all duration-500"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom Border Accent */}
                <div 
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-in-out shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    style={{ backgroundColor: accentColor }}
                />
            </div>
        </motion.article>
    );
};

// Main BentoGrid Component
const BentoGrid = ({ projects, onOpenProject }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const { t } = useTranslation();

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="max-w-[1600px] mx-auto bg-transparent">
            {/* Header Area */}
            <div className="flex flex-col gap-6 mb-10">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                            <LayoutGrid className="w-4 h-4" style={{ color: theme.accent }} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">
                            Innovation Lab
                        </span>
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-black tracking-[-0.04em] leading-none mb-4"
                    >
                        CRAFTING <span className="relative inline-block">
                            <span className="relative z-10" style={{ color: theme.accent }}>FUTURE</span>
                            <div className="absolute -bottom-2 left-0 w-full h-2 bg-white/10 blur-md" />
                        </span>
                    </motion.h2>
                    <p className="text-sm text-white/30 max-w-xl font-medium leading-relaxed italic">
                        "Pushing the boundaries of what's possible with code, AI, and design thinking."
                    </p>
                </div>

                {/* Stats grid — 2-col with centered, level cards */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="min-h-[120px] flex flex-col justify-center items-center rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-3xl font-black">{projects.length}+</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-2">Solutions</span>
                    </div>
                    <div className="min-h-[120px] flex flex-col justify-center items-center rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-3xl font-black">99%</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-2">Uptime</span>
                    </div>
                    <div className="min-h-[120px] flex flex-col justify-center items-center rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-3xl font-black">4+</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-2">Years</span>
                    </div>
                    <div className="min-h-[120px] flex flex-col justify-center items-center rounded-xl bg-white/[0.02] border border-white/[0.05]">
                        <span className="text-3xl font-black">24/7</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-white/40 mt-2">Execution</span>
                    </div>
                </div>
            </div>

            {/* Filter */}
            <CategoryFilter
                categories={projectCategories}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
            />

            {/* Project Grid */}
            <div className="grid gap-6 auto-rows-[minmax(320px,auto)]" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            onOpenProject={onOpenProject}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-40 rounded-2xl border border-dashed border-white/10 bg-white/[0.01]"
                >
                    <Layers className="w-16 h-16 mx-auto mb-6 text-white/10" />
                    <p className="text-2xl font-black tracking-tight text-white/20 uppercase">
                        No artifacts found in this sector
                    </p>
                </motion.div>
            )}

            {/* Custom Animation Styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}} />
        </div>
    );
};

export default BentoGrid;
