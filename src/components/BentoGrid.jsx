import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projectCategories } from '../data/portfolio';
import useThemeStore, { themes } from '../stores/themeStore';

// Category Filter - Clean, no hover effects
const CategoryFilter = ({ categories, activeCategory, onSelect }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const { t } = useTranslation();

    return (
        <div
            className="flex gap-1.5 p-1.5 rounded-lg overflow-x-auto hide-scrollbar"
            style={{ backgroundColor: theme.background }}
        >
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onSelect(cat.id)}
                    className="px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-colors"
                    style={{
                        backgroundColor: activeCategory === cat.id ? theme.accent : 'transparent',
                        color: activeCategory === cat.id ? '#fff' : theme.textMuted,
                    }}
                >
                    {t(`projects.categories.${cat.id}`, cat.label)}
                </button>
            ))}
        </div>
    );
};

// Project Card - Text-first, system-first, no visual noise
const ProjectCard = ({ project, index, onOpenProject }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const accentColor = project.color || theme.accent;

    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: index * 0.05, duration: 0.2 }}
            className="group cursor-pointer"
            onClick={() => onOpenProject && onOpenProject(project)}
        >
            <div
                className="p-5 rounded-xl h-full transition-colors"
                style={{
                    backgroundColor: theme.surface,
                    border: `1px solid ${theme.border}`,
                }}
            >
                {/* Header: Icon + Title + Category */}
                <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">{project.icon}</span>
                        <div>
                            <h3 className="text-sm font-semibold" style={{ color: theme.text }}>
                                {project.title}
                            </h3>
                            <span
                                className="text-xs"
                                style={{ color: accentColor }}
                            >
                                {project.category}
                            </span>
                        </div>
                    </div>
                    <ArrowRight
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: theme.textMuted }}
                    />
                </div>

                {/* Problem Statement - Lead with this */}
                <p
                    className="text-xs leading-relaxed mb-3 line-clamp-2"
                    style={{ color: theme.textMuted }}
                >
                    {project.problem || project.desc}
                </p>

                {/* Architecture One-liner */}
                {project.architecture && (
                    <p
                        className="text-xs mb-3 line-clamp-1"
                        style={{ color: theme.text }}
                    >
                        {project.architecture.overview}
                    </p>
                )}

                {/* Tech Stack - Compact */}
                <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-xs"
                            style={{
                                backgroundColor: theme.background,
                                color: theme.textMuted,
                                border: `1px solid ${theme.border}`
                            }}
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="px-2 py-0.5 text-xs" style={{ color: theme.textMuted }}>
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>

                {/* Links - Only show on projects with live demos */}
                {(project.demo && project.demo !== '#') && (
                    <div className="flex gap-2 mt-3 pt-3" style={{ borderTop: `1px solid ${theme.border}` }}>
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-xs transition-colors hover:opacity-80"
                            style={{ color: accentColor }}
                        >
                            <ExternalLink className="w-3 h-3" />
                            Demo
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1 text-xs transition-colors hover:opacity-80"
                                style={{ color: theme.textMuted }}
                            >
                                <Github className="w-3 h-3" />
                                Code
                            </a>
                        )}
                    </div>
                )}
            </div>
        </motion.article>
    );
};

// Main Grid Component
const BentoGrid = ({ projects, onOpenProject }) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const { t } = useTranslation();

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="space-y-4">
            {/* Filter */}
            <CategoryFilter
                categories={projectCategories}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
            />

            {/* Project Grid - Simple 2-column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                <div
                    className="text-center py-12 text-sm"
                    style={{ color: theme.textMuted }}
                >
                    {t('projects.noProjects', 'No projects in this category')}
                </div>
            )}
        </div>
    );
};

export default BentoGrid;
