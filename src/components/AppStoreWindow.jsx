import React from 'react';
import { Download, Check, Trash2, ShoppingBag, Sparkles, BarChart3, Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useThemeStore, { themes } from '../stores/themeStore';
import { availableApps } from '../data/apps';

const AppStoreWindow = ({ installedApps, onInstall, onOpen }) => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        }
    };

    return (
        <div className="h-full flex flex-col overflow-y-auto custom-scrollbar" style={{ backgroundColor: 'transparent' }}>
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center mb-16"
            >
                <div className="flex items-center gap-3 mb-4 px-4 py-1.5 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                    <ShoppingBag className="w-4 h-4 opacity-50" style={{ color: theme.accent }} />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">System Repository</span>
                </div>
                <h2 className="text-5xl font-black tracking-tighter mb-4" style={{ color: theme.text }}>
                    App <span style={{ color: theme.accent }}>Store</span>
                </h2>
                <p className="text-lg font-medium opacity-40 max-w-md italic" style={{ color: theme.text }}>
                    Extend your OS capabilities with curated artifacts.
                </p>
            </motion.div>

            {/* App Store Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Featured App Hero */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 relative group/featured px-4 md:px-0"
                >
                    <div className="flex items-center justify-between mb-6 px-2">
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <h2 className="text-xl font-bold tracking-tight text-white/90">Featured Selection</h2>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white/60 transition-all">Explore Collections</button>
                    </div>
                    
                    <div className="relative h-[300px] md:h-[340px] rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer active:scale-[0.99] transition-transform duration-500 bg-[#0f0f1a] border border-white/5">
                        {/* Background Visuals */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-500 opacity-80 group-hover:scale-105 transition-transform duration-700" />
                        
                        {/* Abstract glass elements for premium feel */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full -mr-20 -mt-20 animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/30 blur-[80px] rounded-full -ml-10 -mb-10" />

                        {/* Glass Overlay */}
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

                        {/* Content */}
                        <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                            <div className="flex flex-col md:flex-row items-end md:items-center justify-between gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <div className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/20 text-[9px] font-black uppercase tracking-widest text-white">Editor's Choice</div>
                                        <div className="flex items-center gap-1 text-white/60">
                                            <ShieldCheck className="w-3 h-3" />
                                            <span className="text-[9px] font-bold uppercase">Verified</span>
                                        </div>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter">System Monitor Pro</h3>
                                    <p className="text-white/70 text-sm md:text-base max-w-md line-clamp-2 font-medium">Experience real-time performance analytics with advanced neural visualization engines.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="hidden sm:flex w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform duration-500">
                                        <BarChart3 className="w-10 h-10 text-white" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <button 
                                            onClick={() => {
                                                if (!installedApps.includes('monitor')) onInstall('monitor');
                                                onOpen('monitor');
                                            }}
                                            className="px-8 py-3 rounded-2xl bg-white text-black font-black text-xs uppercase tracking-[0.2em] hover:bg-indigo-50 transition-all shadow-[0_15px_30px_-10px_rgba(255,255,255,0.3)] active:scale-95 whitespace-nowrap"
                                        >
                                            {installedApps.includes('monitor') ? 'Launch App' : 'Get for Free'}
                                        </button>
                                        <div className="flex items-center justify-center gap-1 text-[9px] font-bold text-white/40 uppercase tracking-widest">
                                            <span>4.9 MB</span>
                                            <div className="w-1 h-1 rounded-full bg-white/20" />
                                            <span>v2.4.0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Sub-header for Grid */}
                <div className="flex items-center justify-between mb-8 px-2">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-black tracking-tight text-white">Discover</h2>
                        <p className="text-xs font-bold text-white/30 uppercase tracking-widest">Curated Experience</p>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="flex -space-x-2 mr-2">
                            {[1,2,3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#12121e] bg-white/10 overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="user" />
                                </div>
                            ))}
                         </div>
                         <span className="text-[10px] font-bold text-white/40">+1.2k using</span>
                    </div>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                >
                {availableApps.map((app) => {
                    const isInstalled = installedApps.includes(app.id);
                    return (
                        <motion.div
                            key={app.id}
                            variants={cardVariants}
                            className="group relative p-8 rounded-[2.5rem] border backdrop-blur-3xl transition-all duration-500 hover:shadow-premium/10 hover:-translate-y-1 overflow-hidden"
                            style={{
                                backgroundColor: theme.surface + '20',
                                borderColor: theme.border,
                            }}
                        >
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            {/* App Header */}
                            <div className="flex items-start gap-6 mb-8 relative z-10">
                                <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${app.color} flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                    <app.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1 min-w-0 pt-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-black text-xl tracking-tight" style={{ color: theme.text }}>
                                            {app.name}
                                        </h3>
                                        {isInstalled && (
                                            <Sparkles className="w-4 h-4 opacity-30 animate-pulse" style={{ color: theme.accent }} />
                                        )}
                                    </div>
                                    <p className="text-xs font-medium leading-relaxed opacity-40 line-clamp-2" style={{ color: theme.text }}>
                                        {app.description}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 relative z-10">
                                <button
                                    onClick={() => isInstalled ? onOpen(app.id) : onInstall(app.id)}
                                    className="flex-1 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-center transition-all shadow-xl hover:shadow-accent/20 active:scale-95"
                                    style={{
                                        backgroundColor: isInstalled ? theme.surface : theme.accent,
                                        color: isInstalled ? theme.text : '#fff',
                                        border: isInstalled ? `1px solid ${theme.border}` : 'none'
                                    }}
                                >
                                    {isInstalled ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Check className="w-3.5 h-3.5" /> Open
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <Download className="w-3.5 h-3.5" /> Install
                                        </span>
                                    )}
                                </button>

                                {isInstalled && (
                                    <button
                                        onClick={() => onInstall(app.id, true)}
                                        className="p-4 rounded-2xl transition-all hover:bg-red-500/20 active:scale-90"
                                        style={{
                                            backgroundColor: theme.surface,
                                            border: `1px solid ${theme.border}`,
                                            color: '#ef4444'
                                        }}
                                        title="Uninstall"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
            </div>
        </div>
    );
};

export default AppStoreWindow;
