import React from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const WeatherApp = () => {
    return (
        <div className="h-full flex flex-col p-8 text-white">
            {/* Main Weather Card */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative p-10 rounded-[3rem] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl overflow-hidden mb-8"
            >
                {/* Sun Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/30 blur-[80px] rounded-full animate-pulse" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-white/80 font-bold uppercase tracking-widest text-[10px]">
                            <Navigation className="w-3 h-3" />
                            San Francisco, CA
                        </div>
                        <h1 className="text-8xl font-black tracking-tighter mb-2">72°</h1>
                        <p className="text-xl font-bold text-white/90">Partly Cloudy</p>
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-white/60 font-medium">
                            <span className="flex items-center gap-1"><Sun className="w-4 h-4" /> H: 78°</span>
                            <span className="flex items-center gap-1"><CloudRain className="w-4 h-4" /> L: 64°</span>
                        </div>
                    </div>
                    <motion.div 
                        animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 2, 0]
                        }}
                        transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-40 h-40 flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl"
                    >
                        <Cloud className="w-24 h-24 text-white drop-shadow-2xl" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { icon: Wind, label: 'Wind', value: '12 mph', color: 'bg-emerald-500/20 text-emerald-400' },
                    { icon: Droplets, label: 'Humidity', value: '45%', color: 'bg-cyan-500/20 text-cyan-400' },
                    { icon: Thermometer, label: 'UV Index', value: 'Low 2', color: 'bg-orange-500/20 text-orange-400' },
                    { icon: Sun, label: 'Visibility', value: '10 mi', color: 'bg-purple-500/20 text-purple-400' },
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                    >
                        <stat.icon className={`w-6 h-6 mb-3 ${stat.color.split(' ')[1]}`} />
                        <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-1">{stat.label}</p>
                        <p className="text-xl font-black">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

            {/* Hourly Forecast */}
            <div className="flex-1 min-h-[200px]">
                <h3 className="text-xs font-black uppercase tracking-widest text-white/30 mb-4 ml-2">Hourly Forecast</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((h) => (
                        <div key={h} className="min-w-[100px] p-6 rounded-3xl bg-white/5 border border-white/5 flex flex-col items-center gap-3">
                            <span className="text-[10px] font-bold text-white/60">{h + 12}:00 PM</span>
                            <Sun className="w-6 h-6 text-yellow-400" />
                            <span className="text-lg font-black">{72 - h}°</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeatherApp;
