import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { projectCategories } from '../data/portfolio';
import useThemeStore, { themes } from '../stores/themeStore';

// Category Filter with pill design
const CategoryFilter = ({ categories, activeCategory, onSelect }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const { t } = useTranslation();

    return (
        <div
            className="flex gap-1.5 p-1.5 rounded-xl overflow-x-auto hide-scrollbar"
            style={{ backgroundColor: theme.background, border: `1px solid ${theme.border}` }}
        >
            {categories.map((cat) => (
                <motion.button
                    key={cat.id}
                    onClick={() => onSelect(cat.id)}
                    className="px-3 py-1.5 rounded-lg text-[11px] font-medium flex items-center gap-1.5 whitespace-nowrap transition-all"
                    style={{
                        backgroundColor: activeCategory === cat.id ? theme.accent : 'transparent',
                        color: activeCategory === cat.id ? '#fff' : theme.textMuted,
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>{cat.icon}</span>
                    <span>{t(`projects.categories.${cat.id}`, cat.label)}</span>
                </motion.button>
            ))}
        </div>
    );
};

// Project Card Component
const ProjectCard = ({ project, index, featured = false, onOpenProject }) => {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];
    const accentColor = project.color || theme.accent;

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className={`group relative ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect */}
            <motion.div
                className="absolute -inset-0.5 rounded-2xl opacity-0 blur-md transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${accentColor}40, ${theme.accentSecondary}40)` }}
                animate={{ opacity: isHovered ? 0.6 : 0 }}
            />

            <motion.div
                className="relative overflow-hidden rounded-xl h-full"
                style={{
                    backgroundColor: theme.surface,
                    border: `1px solid ${isHovered ? accentColor + '50' : theme.border}`,
                }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                onClick={() => onOpenProject && onOpenProject(project)}
            >
                {/* Image Preview */}
                <div className="relative h-32 overflow-hidden">
                    {!imageError && project.image ? (
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            style={{ filter: isHovered ? 'brightness(1.05)' : 'brightness(0.85)' }}
                            onError={() => setImageError(true)}
                            animate={{ scale: isHovered ? 1.08 : 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    ) : (
                        <div
                            className="w-full h-full flex items-center justify-center text-5xl"
                            style={{
                                background: `linear-gradient(135deg, ${accentColor}15, ${theme.accentSecondary}15)`
                            }}
                        >
                            {project.icon || '📁'}
                        </div>
                    )}

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
                        <span
                            className="px-2 py-0.5 rounded-md text-[9px] font-medium backdrop-blur-sm"
                            style={{
                                backgroundColor: `${accentColor}25`,
                                color: accentColor,
                                border: `1px solid ${accentColor}30`
                            }}
                        >
                            {project.category}
                        </span>

                        {project.featured && (
                            <span
                                className="px-2 py-0.5 rounded-md text-[9px] font-medium backdrop-blur-sm flex items-center gap-1"
                                style={{
                                    backgroundColor: `${theme.accentSecondary}25`,
                                    color: theme.accentSecondary,
                                }}
                            >
                                <Sparkles className="w-2.5 h-2.5" />
                                {t('projects.featured')}
                            </span>
                        )}
                    </div>

                    {/* Action buttons */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute bottom-2 left-2 right-2 flex gap-1.5"
                            >
                                {project.demo && project.demo !== '#' && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-1.5 rounded-md text-[10px] font-medium flex items-center justify-center gap-1 backdrop-blur-md"
                                        style={{
                                            background: `linear-gradient(135deg, ${accentColor}, ${theme.accentSecondary})`,
                                            color: '#fff',
                                        }}
                                    >
                                        <ExternalLink className="w-3 h-3" />
                                        {t('projects.demo')}
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="py-1.5 px-2.5 rounded-md text-[10px] font-medium flex items-center justify-center backdrop-blur-md"
                                        style={{
                                            backgroundColor: `${theme.surface}cc`,
                                            color: theme.text,
                                            border: `1px solid ${theme.border}`,
                                        }}
                                    >
                                        <Github className="w-3 h-3" />
                                    </a>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-3">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-base">{project.icon || '📁'}</span>
                            <h3 className="font-semibold text-sm" style={{ color: theme.text }}>
                                {project.title}
                            </h3>
                        </div>
                        <motion.div animate={{ rotate: isHovered ? 45 : 0 }}>
                            <ArrowUpRight
                                className="w-3.5 h-3.5"
                                style={{ color: isHovered ? accentColor : theme.textMuted }}
                            />
                        </motion.div>
                    </div>

                    <p
                        className="text-[11px] leading-relaxed mt-1.5 line-clamp-2"
                        style={{ color: theme.textMuted }}
                    >
                        {project.desc}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mt-2.5">
                        {project.tech.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-1.5 py-0.5 rounded text-[9px] font-medium"
                                style={{
                                    backgroundColor: theme.background,
                                    color: theme.textMuted,
                                    border: `1px solid ${theme.border}`
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span
                                className="px-1.5 py-0.5 rounded text-[9px]"
                                style={{ color: theme.textMuted }}
                            >
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
                    animate={{ opacity: isHovered ? 0.8 : 0 }}
                />
            </motion.div>
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
        <div className="space-y-4">
            {/* Filter */}
            <CategoryFilter
                categories={projectCategories}
                activeCategory={activeCategory}
                onSelect={setActiveCategory}
            />

            {/* Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full md:max-h-[50vh] overflow-y-auto pr-1 hide-scrollbar pb-20 md:pb-0"
                layout
            >
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            featured={project.featured && index === 0}
                            onOpenProject={onOpenProject}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
                <div
                    className="text-center py-12 text-sm"
                    style={{ color: theme.textMuted }}
                >
                    {t('projects.noProjects')}
                </div>
            )}
        </div>
    );
};

export default BentoGrid;
