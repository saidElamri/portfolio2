import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { projects } from '../data/portfolio';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import DistortedImage from './DistortedImage';

const ProjectGallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={containerRef} className="relative py-32 px-6 bg-neutral-950 z-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-32"
                >
                    <h2 className="text-[10vw] leading-[0.8] font-bold text-white tracking-tighter mb-8">
                        SELECTED <span className="text-neutral-800">WORKS</span>
                    </h2>
                    <div className="w-full h-px bg-neutral-800" />
                </motion.div>

                <div className="flex flex-col gap-32">
                    {projects.map((project, i) => (
                        <div key={project.id} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Image Side */}
                            <div className="w-full md:w-3/5 h-[60vh] relative group">
                                <div className="absolute inset-0 bg-neutral-900 rounded-lg overflow-hidden">
                                    {/* Fallback image if WebGL fails or for simplicity in this specific view */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                                    />
                                </div>

                                {/* Floating Tech Stack */}
                                <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 max-w-xs z-10 hidden md:block">
                                    <p className="font-mono text-xs mb-2 uppercase tracking-widest text-neutral-500">Technologies</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, j) => (
                                            <span key={j} className="text-sm font-bold border-b border-black/20 pb-1">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Text Side */}
                            <div className="w-full md:w-2/5 relative">
                                <span className="text-9xl font-bold text-neutral-900 absolute -top-20 -left-10 -z-10 select-none">
                                    0{i + 1}
                                </span>

                                <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-500 transition-all">
                                    {project.title}
                                </h3>

                                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                                    {project.desc}
                                </p>

                                <div className="flex gap-6">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all">
                                        View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </a>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors">
                                        <Github className="w-4 h-4" /> Source Code
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGallery;
