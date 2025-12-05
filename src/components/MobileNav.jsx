import React from 'react';
import { motion } from 'framer-motion';

const MobileNav = ({ items }) => {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1c1c1e]/80 backdrop-blur-2xl border-t border-white/10 pb-6 pt-4 px-4 z-50">
            <div className="grid grid-cols-4 gap-4">
                {items.map((item) => (
                    <motion.button
                        key={item.id}
                        onClick={item.onClick}
                        whileTap={{ scale: 0.9 }}
                        className="flex flex-col items-center gap-1.5"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-sm shadow-lg border border-white/5">
                            <item.icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] text-white/80 font-medium">{item.label}</span>
                    </motion.button>
                ))}
            </div>
        </div>
    );
};

export default MobileNav;
