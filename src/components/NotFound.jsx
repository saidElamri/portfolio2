import React from 'react';
import { motion } from 'framer-motion';
import { Home, Terminal, RefreshCw } from 'lucide-react';

const NotFound = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
            style={{ backgroundColor: 'var(--color-background, #0a0a0f)' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-md"
            >
                {/* Glitchy 404 */}
                <motion.div
                    className="relative mb-8"
                    animate={{
                        textShadow: [
                            '0 0 10px #58a6ff, 2px 2px 0 #a371f7',
                            '0 0 20px #58a6ff, -2px -2px 0 #a371f7',
                            '0 0 10px #58a6ff, 2px 2px 0 #a371f7',
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <h1
                        className="text-[120px] md:text-[160px] font-black leading-none tracking-tighter"
                        style={{
                            background: 'linear-gradient(135deg, #58a6ff, #a371f7)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        404
                    </h1>
                </motion.div>

                {/* Terminal-style message */}
                <div
                    className="font-mono text-sm p-4 rounded-xl mb-8 text-left"
                    style={{
                        backgroundColor: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                >
                    <div className="flex items-center gap-2 mb-2 text-white/40">
                        <Terminal className="w-4 h-4" />
                        <span>said@portfolio:~$</span>
                    </div>
                    <p className="text-white/60">
                        <span className="text-red-400">Error:</span> Page not found in filesystem
                    </p>
                    <p className="text-white/40 mt-1">
                        The requested resource does not exist.
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.a
                        href="/portfolio2/"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"
                        style={{
                            background: 'linear-gradient(135deg, #58a6ff, #a371f7)',
                            color: '#fff'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Home className="w-4 h-4" />
                        Return Home
                    </motion.a>

                    <motion.button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium text-sm"
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.8)'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <RefreshCw className="w-4 h-4" />
                        Go Back
                    </motion.button>
                </div>

                {/* Fun easter egg */}
                <p className="mt-8 text-xs text-white/30">
                    Lost in the matrix? Press <kbd className="px-1.5 py-0.5 rounded bg-white/10">↑↑↓↓←→←→BA</kbd> for a surprise
                </p>
            </motion.div>
        </div>
    );
};

export default NotFound;
