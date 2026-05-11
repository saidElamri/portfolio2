import React, { useState } from 'react';
import { Moon, Play, Pause, RotateCcw, Volume2, Wind, Droplets, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ZenSpaceApp = () => {
    const [isActive, setIsActive] = useState(false);
    const [timeLeft, setTimeLeft] = useState(1500); // 25 mins
    const [selectedSound, setSelectedSound] = useState('rain');

    const toggleTimer = () => setIsActive(!isActive);
    const resetTimer = () => {
        setIsActive(false);
        setTimeLeft(1500);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    const sounds = [
        { id: 'rain', icon: Droplets, label: 'Rainfall', color: 'text-blue-400' },
        { id: 'wind', icon: Wind, label: 'Forest Wind', color: 'text-emerald-400' },
        { id: 'fire', icon: Flame, label: 'Campfire', color: 'text-orange-400' },
    ];

    return (
        <div className="h-full flex flex-col items-center justify-center p-12 text-white overflow-hidden relative">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-[#0a0a0f]" />
            <AnimatePresence>
                {isActive && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent blur-[120px]" 
                    />
                )}
            </AnimatePresence>

            <div className="relative z-10 flex flex-col items-center max-w-xl w-full">
                {/* Visualizer Circle */}
                <div className="relative w-72 h-72 mb-12 flex items-center justify-center">
                    <motion.div 
                        animate={isActive ? { scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] } : {}}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-indigo-500/10 blur-[40px]"
                    />
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="144"
                            cy="144"
                            r="130"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="transparent"
                            className="text-white/5"
                        />
                        <motion.circle
                            cx="144"
                            cy="144"
                            r="130"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="transparent"
                            strokeDasharray={816.8}
                            animate={{ strokeDashoffset: 816.8 * (1 - timeLeft / 1500) }}
                            className="text-indigo-400"
                        />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <h2 className="text-7xl font-black tracking-tighter tabular-nums">{formatTime(timeLeft)}</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 mt-2">Deep Focus</p>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-8 mb-16">
                    <button onClick={resetTimer} className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <RotateCcw className="w-6 h-6 text-white/60" />
                    </button>
                    <button 
                        onClick={toggleTimer}
                        className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all"
                    >
                        {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                    </button>
                    <button className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                        <Volume2 className="w-6 h-6 text-white/60" />
                    </button>
                </div>

                {/* Sound Selection */}
                <div className="flex gap-4">
                    {sounds.map((sound) => (
                        <button 
                            key={sound.id}
                            onClick={() => setSelectedSound(sound.id)}
                            className={`px-6 py-3 rounded-2xl flex items-center gap-3 transition-all ${
                                selectedSound === sound.id 
                                ? 'bg-white/15 border-white/20' 
                                : 'bg-white/5 border-transparent opacity-40 hover:opacity-100'
                            } border`}
                        >
                            <sound.icon className={`w-5 h-5 ${sound.color}`} />
                            <span className="text-xs font-black uppercase tracking-widest">{sound.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ZenSpaceApp;
