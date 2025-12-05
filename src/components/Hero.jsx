import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from './Scene3D';
import Magnetic from './Magnetic';

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-neutral-950">
            {/* 3D Background */}
            <Scene3D />

            <div className="relative z-10 text-center mix-blend-difference pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-white">
                        SAID ELAMRI
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
                >
                    <p className="text-xl md:text-2xl font-light text-neutral-400 tracking-wide">
                        FULL STACK ENGINEER & AI ARCHITECT
                    </p>
                </motion.div>
            </div>

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
                <Magnetic>
                    <div className="flex flex-col items-center gap-2 cursor-pointer group">
                        <span className="text-xs tracking-[0.2em] text-neutral-500 group-hover:text-white transition-colors">SCROLL</span>
                        <div className="w-px h-12 bg-gradient-to-b from-neutral-500 to-transparent group-hover:h-16 transition-all duration-300" />
                    </div>
                </Magnetic>
            </div>
        </section>
    );
};

export default Hero;
