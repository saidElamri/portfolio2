import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import Spotlight from './Spotlight';

const Projects = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Selected Work</h2>
                        <p className="text-zinc-400 max-w-md">
                            A collection of applications focusing on AI integration,
                            performance, and user experience.
                        </p>
                    </div>
                    <a href="https://github.com/saidElamri" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white flex items-center gap-1 transition-colors">
                        View all on GitHub <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <Spotlight key={project.id} className="group h-full">
                            <div className="flex flex-col h-full">
                                {/* Image Area */}
                                <div className="relative h-64 overflow-hidden bg-zinc-900 border-b border-white/5">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                                            <Github className="w-4 h-4" />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">
                                            {project.category}
                                        </span>
                                    </div>

                                    <p className="text-zinc-400 mb-6 leading-relaxed flex-1">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t, j) => (
                                            <span key={j} className="text-xs text-zinc-500 bg-zinc-900/50 border border-zinc-800 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Spotlight>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
