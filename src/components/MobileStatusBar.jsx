import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Signal, Battery } from 'lucide-react';

const MobileStatusBar = () => {
    const [time, setTime] = useState(new Date());
    const [batteryLevel, setBatteryLevel] = useState(100);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Try to get actual battery level
    useEffect(() => {
        if ('getBattery' in navigator) {
            navigator.getBattery().then(battery => {
                setBatteryLevel(Math.round(battery.level * 100));
                battery.addEventListener('levelchange', () => {
                    setBatteryLevel(Math.round(battery.level * 100));
                });
            });
        }
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
            {/* Dynamic Island / Notch area */}
            <div className="relative h-12 flex items-center justify-between px-6 bg-black/20 backdrop-blur-xl">
                {/* Left side - Time */}
                <div className="flex items-center gap-1">
                    <span className="text-white text-[15px] font-semibold tabular-nums">
                        {formatTime()}
                    </span>
                </div>

                {/* Center - Dynamic Island */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2">
                    <div className="w-28 h-7 bg-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-[#1a1a1a] border border-[#333]" />
                    </div>
                </div>

                {/* Right side - Status icons */}
                <div className="flex items-center gap-1.5">
                    {/* Signal */}
                    <div className="flex items-center gap-0.5">
                        <Signal className="w-4 h-4 text-white" />
                    </div>

                    {/* WiFi */}
                    <Wifi className="w-4 h-4 text-white" />

                    {/* Battery */}
                    <div className="flex items-center gap-1">
                        <div className="relative w-6 h-3 border border-white/80 rounded-[3px] flex items-center p-[2px]">
                            <div
                                className={`h-full rounded-[1px] transition-all ${batteryLevel > 20 ? 'bg-white' : 'bg-red-500'
                                    }`}
                                style={{ width: `${batteryLevel}%` }}
                            />
                            {/* Battery cap */}
                            <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1.5 bg-white/80 rounded-r-sm" />
                        </div>
                        <span className="text-white text-[12px] font-medium tabular-nums">
                            {batteryLevel}%
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MobileStatusBar;
