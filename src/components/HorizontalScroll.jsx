import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { projects } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';
import Magnetic from './Magnetic';

const HorizontalScroll = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-24">

                    {/* Title Card */}
                    <div className="h-[500px] w-[400px] flex flex-col justify-center shrink-0">
                        <h2 className="text-7xl font-bold text-white mb-6">
                            Selected <br />
                            <span className="text-neutral-500">Works</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-xs">
                            A curation of experiments, products, and intelligent systems.
                            <br />
                            <span className="text-sm mt-4 block text-neutral-600">SCROLL TO EXPLORE &rarr;</span>
                        </p>
                    </div>

                    {/* Project Cards */}
                    {projects.map((project) => (
                        <div key={project.id} className="group relative h-[500px] w-[600px] overflow-hidden bg-neutral-800 shrink-0 rounded-2xl border border-neutral-700">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${project.image})` }}
                            >
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/20">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                        <Magnetic>
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors block">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        </Magnetic>
                                        <Magnetic>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors block">
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        </Magnetic>
                                    </div>
                                </div>

                                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-neutral-300 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.desc}
                                    </p>
                                    <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-wider text-neutral-400 border border-neutral-600 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* End Card */}
                    <div className="h-[500px] w-[400px] flex flex-col justify-center items-center shrink-0 text-center">
                        <h3 className="text-4xl font-bold text-white mb-4">More on GitHub</h3>
                        <Magnetic>
                            <a
                                href="https://github.com/saidElamri"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors inline-block"
                            >
                                @saidElamri
                            </a>
                        </Magnetic>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;
