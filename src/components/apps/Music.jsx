import React, { useState } from 'react';
import { Music as MusicIcon, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Volume2, ListMusic, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicApp = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const tracks = [
        { title: "Midnight City", artist: "Synthwave Pro", duration: "3:45", color: "from-purple-500 to-indigo-600" },
        { title: "Cyber Echo", artist: "Neon Dreams", duration: "4:12", color: "from-blue-500 to-cyan-400" },
        { title: "Silicon Soul", artist: "Digital Nomad", duration: "2:58", color: "from-pink-500 to-rose-400" },
    ];

    const track = tracks[currentTrack];

    return (
        <div className="h-full flex flex-col bg-[#050508] text-white overflow-hidden">
            {/* Main Player Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
                {/* Background Aura */}
                <motion.div 
                    key={currentTrack}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    className={`absolute inset-0 bg-gradient-to-b ${track.color} blur-[120px]`}
                />

                <div className="relative z-10 w-full max-w-md">
                    {/* Album Art */}
                    <motion.div 
                        key={currentTrack}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`aspect-square rounded-[3rem] bg-gradient-to-br ${track.color} shadow-2xl mb-12 flex items-center justify-center border border-white/10 group overflow-hidden`}
                    >
                        <motion.div
                            animate={isPlaying ? { rotate: 360 } : {}}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-32 h-32 rounded-full border-4 border-white/10 flex items-center justify-center relative"
                        >
                            <div className="w-4 h-4 rounded-full bg-white/20" />
                            <MusicIcon className="w-12 h-12 text-white/40 absolute" />
                        </motion.div>
                        
                        {/* Overlay glass */}
                        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <ListMusic className="w-6 h-6" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Track Info */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black tracking-tight mb-2">{track.title}</h2>
                        <p className="text-sm font-bold text-white/40 uppercase tracking-widest">{track.artist}</p>
                    </div>

                    {/* Scrubber */}
                    <div className="mb-8">
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                            <motion.div 
                                initial={{ width: "0%" }}
                                animate={isPlaying ? { width: "100%" } : {}}
                                transition={{ duration: 225, ease: "linear" }}
                                className="h-full bg-white rounded-full relative"
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                            </motion.div>
                        </div>
                        <div className="flex justify-between text-[10px] font-black text-white/20 tabular-nums">
                            <span>1:24</span>
                            <span>{track.duration}</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between mb-8">
                        <button className="text-white/30 hover:text-white transition-colors">
                            <Shuffle className="w-5 h-5" />
                        </button>
                        <div className="flex items-center gap-8">
                            <button 
                                onClick={() => setCurrentTrack((currentTrack - 1 + tracks.length) % tracks.length)}
                                className="text-white/60 hover:text-white transition-colors active:scale-90"
                            >
                                <SkipBack className="w-8 h-8 fill-current" />
                            </button>
                            <button 
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all"
                            >
                                {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                            </button>
                            <button 
                                onClick={() => setCurrentTrack((currentTrack + 1) % tracks.length)}
                                className="text-white/60 hover:text-white transition-colors active:scale-90"
                            >
                                <SkipForward className="w-8 h-8 fill-current" />
                            </button>
                        </div>
                        <button className="text-white/30 hover:text-white transition-colors">
                            <Repeat className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Extra Actions */}
                    <div className="flex items-center justify-center gap-12 pt-8 border-t border-white/5">
                        <button 
                            onClick={() => setIsLiked(!isLiked)}
                            className={`flex flex-col items-center gap-2 transition-colors ${isLiked ? 'text-rose-500' : 'text-white/30 hover:text-white/50'}`}
                        >
                            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                            <span className="text-[9px] font-black uppercase tracking-widest">Favorite</span>
                        </button>
                        <div className="flex flex-col items-center gap-2 text-white/30">
                            <Volume2 className="w-5 h-5" />
                            <span className="text-[9px] font-black uppercase tracking-widest">85%</span>
                        </div>
                        <button className="flex flex-col items-center gap-2 text-white/30 hover:text-white/50 transition-colors">
                            <ListMusic className="w-5 h-5" />
                            <span className="text-[9px] font-black uppercase tracking-widest">Queue</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicApp;
