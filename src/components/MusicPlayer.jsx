import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, VolumeX, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const playlist = [
    {
        title: "Chill Lofi Beats",
        artist: "SaidOS Radio",
        src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"
    },
    {
        title: "Coding in the Rain",
        artist: "Lofi Geek",
        src: "https://cdn.pixabay.com/download/audio/2022/03/24/audio_34f190eec2.mp3?filename=emotional-mess-101036.mp3"
    },
    {
        title: "Midnight Jazz",
        artist: "Smooth Vibes",
        src: "https://cdn.pixabay.com/download/audio/2022/02/07/audio_11654b1c83.mp3?filename=relaxing-mountains-rivers-streams-running-water-18178.mp3"
    }
];

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [showPlaylist, setShowPlaylist] = useState(false);

    const audioRef = useRef(new Audio(playlist[0].src));

    // Handle track changes
    useEffect(() => {
        const audio = audioRef.current;
        audio.src = playlist[currentTrackIndex].src;
        audio.load();
        if (isPlaying) {
            audio.play().catch(e => console.error("Playback failed:", e));
        }
    }, [currentTrackIndex]);

    // Handle audio events
    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = false; // We handle loop via 'ended' event for playlist
        audio.volume = volume;

        const updateProgress = () => {
            if (audio.duration) {
                setProgress((audio.currentTime / audio.duration) * 100);
            }
        };

        const handleEnded = () => {
            nextTrack();
        };

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.pause();
            audio.removeEventListener('timeupdate', updateProgress);
            audio.removeEventListener('ended', handleEnded);
        };
    }, []);

    // Play/Pause toggle
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.error("Audio autoplay blocked", e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Volume & Mute
    useEffect(() => {
        audioRef.current.volume = isMuted ? 0 : volume;
        audioRef.current.muted = isMuted;
    }, [volume, isMuted]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    };

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    };

    const handleSeek = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const clickPercent = x / width;
        const newTime = clickPercent * audioRef.current.duration;
        audioRef.current.currentTime = newTime;
        setProgress(clickPercent * 100);
    };

    return (
        <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl w-full max-w-xs shadow-2xl relative overflow-hidden group font-sans">
            {/* Visualizer Background (Fake) */}
            <div className="absolute inset-0 flex items-end justify-center gap-1 opacity-20 pointer-events-none p-4 z-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-1 bg-white transition-all duration-100 ease-in-out ${isPlaying ? 'animate-pulse' : 'h-1'}`}
                        style={{
                            height: isPlaying ? `${Math.random() * 80 + 10}%` : '5%',
                            animationDuration: `${Math.random() * 0.5 + 0.2}s`
                        }}
                    />
                ))}
            </div>

            {/* Album Art & Info */}
            <div className="relative z-10 flex gap-4 items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center shrink-0 shadow-lg ${isPlaying ? 'animate-spin-slow' : ''}`}>
                    <Music className="w-6 h-6 text-white" />
                </div>
                <div className="overflow-hidden flex-1">
                    <h3 className="font-bold text-sm truncate text-white">{playlist[currentTrackIndex].title}</h3>
                    <p className="text-xs text-neutral-400 truncate">{playlist[currentTrackIndex].artist}</p>
                </div>
                <button
                    onClick={() => setShowPlaylist(!showPlaylist)}
                    className={`p-1.5 rounded-lg transition-colors ${showPlaylist ? 'bg-white/20 text-white' : 'text-neutral-400 hover:text-white'}`}
                >
                    <List className="w-4 h-4" />
                </button>
            </div>

            {/* Progress Bar */}
            <div
                className="relative z-10 w-full h-1.5 bg-white/10 rounded-full mb-4 overflow-hidden cursor-pointer group/seek"
                onClick={handleSeek}
            >
                <div
                    className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full transition-all duration-100 relative"
                    style={{ width: `${progress}%` }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full opacity-0 group-hover/seek:opacity-100 transition-opacity" />
                </div>
            </div>

            {/* Controls */}
            <div className="relative z-10 flex justify-between items-center px-1">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-neutral-400 hover:text-white transition-colors p-1"
                >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <div className="flex items-center gap-3">
                    <button onClick={prevTrack} className="text-neutral-400 hover:text-white transition-colors p-1 active:scale-95">
                        <SkipBack className="w-5 h-5" />
                    </button>
                    <button
                        onClick={togglePlay}
                        className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform active:scale-95 shadow-lg shadow-white/10"
                    >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>
                    <button onClick={nextTrack} className="text-neutral-400 hover:text-white transition-colors p-1 active:scale-95">
                        <SkipForward className="w-5 h-5" />
                    </button>
                </div>

                <div className="w-6" /> {/* Spacer for balance */}
            </div>

            {/* Playlist Overlay */}
            <AnimatePresence>
                {showPlaylist && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute inset-0 bg-[#0a0a0f]/95 backdrop-blur-xl z-20 p-4 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-3 shrink-0">
                            <span className="text-xs font-bold text-white uppercase tracking-wider">Queue</span>
                            <button onClick={() => setShowPlaylist(false)} className="text-neutral-400 hover:text-white">
                                <VolumeX className="w-4 h-4 rotate-45" /> {/* Close icon */}
                            </button>
                        </div>
                        <div className="overflow-y-auto space-y-1 pr-1 custom-scrollbar flex-1">
                            {playlist.map((track, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setCurrentTrackIndex(i);
                                        setIsPlaying(true);
                                    }}
                                    className={`w-full text-left p-2 rounded-lg text-xs flex items-center gap-3 transition-colors ${currentTrackIndex === i
                                            ? 'bg-white/10 text-white'
                                            : 'text-neutral-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className="w-4 text-center opacity-50">{i + 1}</span>
                                    <div className="flex-1 truncate">
                                        <div className="font-medium truncate">{track.title}</div>
                                        <div className="opacity-50 text-[10px] truncate">{track.artist}</div>
                                    </div>
                                    {currentTrackIndex === i && isPlaying && (
                                        <div className="flex gap-0.5 items-end h-3">
                                            {[...Array(3)].map((_, j) => (
                                                <div key={j} className="w-0.5 bg-green-400 animate-pulse" style={{ height: '100%', animationDelay: `${j * 0.1}s` }} />
                                            ))}
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MusicPlayer;
