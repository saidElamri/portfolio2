import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';



import { usePreloader } from '../context/PreloaderContext';

const BootScreen = ({ onComplete }) => {
    const { t } = useTranslation();
    const { progress, isLoaded } = usePreloader();
    const [messageIndex, setMessageIndex] = useState(0);
    const [dots, setDots] = useState('');

    const bootMessages = [
        { text: t('boot.messages.0'), progress: 15 },
        { text: t('boot.messages.1'), progress: 35 },
        { text: t('boot.messages.2'), progress: 55 },
        { text: t('boot.messages.3'), progress: 75 },
        { text: t('boot.messages.4'), progress: 90 },
        { text: t('boot.ready'), progress: 100 },
    ];

    // Update message based on progress
    useEffect(() => {
        const newIndex = bootMessages.findIndex(msg => progress <= msg.progress);
        if (newIndex !== -1 && newIndex !== messageIndex) {
            setMessageIndex(newIndex);
        }
    }, [progress, messageIndex]);

    // Animate dots
    useEffect(() => {
        if (progress < 100) {
            const timer = setInterval(() => {
                setDots(prev => prev.length >= 3 ? '' : prev + '.');
            }, 400);
            return () => clearInterval(timer);
        }
    }, [progress]);

    // Complete boot
    useEffect(() => {
        if (isLoaded) {
            onComplete();
        }
    }, [isLoaded, onComplete]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 bg-[#0a0a0f] z-[9999] flex flex-col items-center justify-center overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Animated background grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(88, 166, 255, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(88, 166, 255, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                    }}
                />

                {/* Radial glow */}
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(88, 166, 255, 0.08) 0%, transparent 70%)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />

                {/* Logo and branding */}
                <motion.div
                    className="relative z-10 flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Logo mark */}
                    <motion.div
                        className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #58a6ff 0%, #a371f7 100%)',
                        }}
                        animate={{
                            boxShadow: [
                                '0 0 30px rgba(88, 166, 255, 0.3)',
                                '0 0 60px rgba(163, 113, 247, 0.4)',
                                '0 0 30px rgba(88, 166, 255, 0.3)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {/* Zellige pattern overlay */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0l10 10-10 10L0 10z' fill='white' fill-opacity='0.5'/%3E%3C/svg%3E")`,
                                backgroundSize: '10px 10px',
                            }}
                        />
                        <span className="text-2xl font-bold text-white relative z-10">SE</span>
                    </motion.div>

                    {/* Brand name */}
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Said<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#a371f7]">OS</span>
                        </h1>
                        <p className="text-neutral-500 text-sm mt-1">v2.0 • AI Architect Edition</p>
                    </motion.div>

                    {/* Progress bar container */}
                    <div className="w-72 relative">
                        {/* Background track */}
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            {/* Progress fill */}
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, #58a6ff, #a371f7)',
                                    width: `${progress}%`,
                                }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>

                        {/* Progress percentage */}
                        <div className="flex justify-between mt-2 text-[10px] text-neutral-600">
                            <span>BOOT</span>
                            <span className="tabular-nums">{Math.round(progress)}%</span>
                        </div>
                    </div>

                    {/* Boot message */}
                    <motion.div
                        className="mt-4 h-6 flex items-center"
                        key={messageIndex}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className="text-xs text-neutral-400 font-mono">
                            {progress < 100 ? (
                                <>
                                    <span className="text-[#58a6ff]">→</span> {bootMessages[messageIndex]?.text || bootMessages[0].text}
                                    <span className="text-[#a371f7]">{dots}</span>
                                </>
                            ) : (
                                <span className="text-[#7ee787]">✓ {t('boot.ready')}</span>
                            )}
                        </p>
                    </motion.div>

                    {/* Decorative elements */}
                    <div className="flex gap-2 mt-8">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-white/20"
                                animate={{
                                    backgroundColor: progress > (i + 1) * 33
                                        ? ['rgba(88, 166, 255, 0.8)', 'rgba(163, 113, 247, 0.8)', 'rgba(88, 166, 255, 0.8)']
                                        : 'rgba(255, 255, 255, 0.2)',
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Bottom branding */}
                <motion.p
                    className="absolute bottom-8 text-[10px] text-neutral-600 tracking-widest"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    POWERED BY REACT × VITE × THREE.JS
                </motion.p>
            </motion.div>
        </AnimatePresence>
    );
};

export default BootScreen;
