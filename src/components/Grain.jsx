import React from 'react';

const Grain = () => {
    return (
        <>
            {/* Film Grain Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Subtle Vignette */}
            <div
                className="fixed inset-0 pointer-events-none z-[9997]"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%)'
                }}
            />

            {/* Top Light Leak */}
            <div
                className="fixed top-0 left-0 right-0 h-64 pointer-events-none z-[9996] opacity-20"
                style={{
                    background: 'linear-gradient(to bottom, rgba(88,166,255,0.1), transparent)'
                }}
            />
        </>
    );
};

export default Grain;
