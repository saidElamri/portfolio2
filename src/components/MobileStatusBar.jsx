import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MobileStatusBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 60000); // 1 min update is enough
        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-[100] md:hidden"
        >
            {/* Premium App Header */}
            <div className="relative h-14 flex items-center justify-between px-6 bg-[#121212]/80 backdrop-blur-xl border-b border-white/5">
                {/* Brand / Context */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                        SE
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-sm font-semibold leading-tight">Said Elamri</span>
                        <span className="text-white/40 text-[10px] uppercase tracking-wider font-medium leading-tight">Portfolio OS</span>
                    </div>
                </div>

                {/* Simple Time Indicator */}
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
                    <span className="text-white/80 text-xs font-medium tabular-nums">
                        {formatTime()}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default MobileStatusBar;
