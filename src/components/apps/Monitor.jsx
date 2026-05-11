import React, { useState, useEffect } from 'react';
import { BarChart3, Activity, Cpu, Database, Network, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const MonitorApp = () => {
    const [stats, setStats] = useState({
        cpu: 24,
        ram: 42,
        net: 1.2,
        temp: 52
    });

    // Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                cpu: Math.floor(Math.random() * 40) + 10,
                ram: Math.floor(Math.random() * 5) + 40,
                net: (Math.random() * 2 + 0.5).toFixed(1),
                temp: Math.floor(Math.random() * 10) + 45
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full flex flex-col p-8 text-white">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-black tracking-tight">System Monitor</h1>
                    <p className="text-xs font-bold text-white/30 uppercase tracking-widest mt-1">Status: Operational</p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Activity className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Active</span>
                </div>
            </div>

            {/* Main Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* CPU usage */}
                <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Cpu className="w-12 h-12" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Processor Load</p>
                    <div className="flex items-baseline gap-2 mb-6">
                        <h2 className="text-6xl font-black tracking-tighter">{stats.cpu}%</h2>
                        <span className="text-xs font-bold text-emerald-400">Stable</span>
                    </div>
                    {/* Visualizer bars */}
                    <div className="flex items-end gap-1.5 h-16">
                        {[...Array(20)].map((_, i) => (
                            <motion.div 
                                key={i}
                                animate={{ height: `${Math.random() * 100}%` }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="flex-1 bg-gradient-to-t from-emerald-500/40 to-cyan-400 rounded-t-sm"
                            />
                        ))}
                    </div>
                </div>

                {/* Memory usage */}
                <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                        <Database className="w-12 h-12" />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-2">Memory Usage</p>
                    <div className="flex items-baseline gap-2 mb-6">
                        <h2 className="text-6xl font-black tracking-tighter">{stats.ram}%</h2>
                        <span className="text-xs font-bold text-white/40">16 GB Total</span>
                    </div>
                    {/* Visualizer bars */}
                    <div className="flex items-end gap-1.5 h-16">
                        {[...Array(20)].map((_, i) => (
                            <motion.div 
                                key={i}
                                animate={{ height: `${Math.random() * 100}%` }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="flex-1 bg-gradient-to-t from-indigo-500/40 to-purple-400 rounded-t-sm"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400">
                        <Zap className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-white/30">Thermal</p>
                        <p className="text-2xl font-black">{stats.temp}°C</p>
                    </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <Network className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-white/30">Network</p>
                        <p className="text-2xl font-black">{stats.net} Mb/s</p>
                    </div>
                </div>
                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400">
                        <Activity className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-white/30">Uptime</p>
                        <p className="text-2xl font-black">2.4 days</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonitorApp;
