import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import Spotlight from './Spotlight';

const Projects = () => {
    return (
        <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <div className="w-full pb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 p-4">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-1 bg-accent rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Selected Work</h2>
                        <p className="text-zinc-400 max-w-md text-sm font-medium leading-relaxed">
                            A curated selection of architectural solutions focusing on AI systems,
                            high-fidelity performance, and premium user experiences.
                        </p>
                    </div>
                    <a 
                        href="https://github.com/saidElamri" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group text-xs font-bold text-zinc-500 hover:text-white flex items-center gap-2 transition-all px-4 py-2 rounded-xl bg-white/5 border border-white/5"
                    >
                        <span>View all on GitHub</span>
                        <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <Spotlight className="h-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900/20 backdrop-blur-3xl hover:border-accent/20 transition-all duration-500">
                                <div className="flex flex-col h-full">
                                    {/* Image Area */}
                                    <div className="relative h-72 overflow-hidden bg-zinc-950">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                                        
                                        <div className="absolute top-6 right-6 flex gap-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl text-white hover:bg-accent hover:text-white transition-all">
                                                <Github className="w-5 h-5" />
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl text-white hover:bg-accent hover:text-white transition-all">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </div>

                                        <div className="absolute bottom-6 left-6">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-accent/20 text-accent backdrop-blur-md border border-accent/20">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-8 md:p-10 flex-1 flex flex-col">
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 group-hover:text-accent transition-colors tracking-tight">
                                            {project.title}
                                        </h3>

                                        <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed flex-1 font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                            {project.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((t, j) => (
                                                <span key={j} className="text-[10px] font-black uppercase tracking-wider text-zinc-500 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg group-hover:border-accent/10 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Spotlight>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
