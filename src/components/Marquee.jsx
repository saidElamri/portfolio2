import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
    return (
        <div className="relative w-full py-12 bg-white text-black overflow-hidden border-y border-neutral-200">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1035] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex gap-8 text-8xl font-bold tracking-tighter"
                >
                    {Array(4).fill("OPEN FOR WORK — LET'S BUILD — ").map((text, i) => (
                        <span key={i}>{text}</span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;
