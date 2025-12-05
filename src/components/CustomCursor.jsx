import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const trailRefs = useRef([]);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorText, setCursorText] = useState('');

    // Smooth cursor position
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Spring physics for smooth following
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Trail positions
        const trailPositions = Array(5).fill({ x: 0, y: 0 });
        let animationFrame;

        const updateCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Update trail positions with delay
            trailPositions.unshift({ x: e.clientX, y: e.clientY });
            trailPositions.pop();

            trailRefs.current.forEach((trail, i) => {
                if (trail && trailPositions[i]) {
                    const delay = (i + 1) * 2;
                    setTimeout(() => {
                        trail.style.transform = `translate(${trailPositions[i].x - 4}px, ${trailPositions[i].y - 4}px)`;
                    }, delay);
                }
            });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Magnetic effect for interactive elements
        const handleMouseOver = (e) => {
            const target = e.target;

            if (target.matches('button, a, [data-cursor]')) {
                setIsHovering(true);

                // Get custom cursor text if available
                const text = target.getAttribute('data-cursor-text');
                if (text) setCursorText(text);

                // Magnetic pull effect
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const pullX = (centerX - e.clientX) * 0.2;
                const pullY = (centerY - e.clientY) * 0.2;

                cursorX.set(e.clientX + pullX);
                cursorY.set(e.clientY + pullY);
            }
        };

        const handleMouseOut = (e) => {
            if (e.target.matches('button, a, [data-cursor]')) {
                setIsHovering(false);
                setCursorText('');
            }
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrame);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Hide default cursor */}
            <style>{`
        * { cursor: none !important; }
        a, button { cursor: none !important; }
      `}</style>

            {/* Trail dots */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (trailRefs.current[i] = el)}
                    className="fixed top-0 left-0 pointer-events-none z-[10000]"
                    style={{
                        width: 8 - i,
                        height: 8 - i,
                        borderRadius: '50%',
                        backgroundColor: `rgba(88, 166, 255, ${0.4 - i * 0.08})`,
                        transition: `transform ${0.1 + i * 0.02}s ease-out`,
                    }}
                />
            ))}

            {/* Main cursor dot */}
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[10001] flex items-center justify-center"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                {/* Inner dot */}
                <motion.div
                    animate={{
                        scale: isClicking ? 0.5 : isHovering ? 0.5 : 1,
                        opacity: isHovering ? 0 : 1,
                    }}
                    transition={{ duration: 0.15 }}
                    className="w-3 h-3 rounded-full bg-white mix-blend-difference"
                />
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[10000] flex items-center justify-center"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    animate={{
                        scale: isClicking ? 0.8 : isHovering ? 2 : 1,
                        borderColor: isHovering ? 'rgba(88, 166, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
                        backgroundColor: isHovering ? 'rgba(88, 166, 255, 0.1)' : 'transparent',
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="w-10 h-10 rounded-full border-2"
                />

                {/* Cursor text label */}
                {cursorText && (
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-12 text-xs text-white bg-black/80 px-2 py-1 rounded whitespace-nowrap"
                    >
                        {cursorText}
                    </motion.span>
                )}
            </motion.div>

            {/* Click ripple effect */}
            {isClicking && (
                <motion.div
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 2, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed pointer-events-none z-[9999] w-20 h-20 rounded-full border border-[#58a6ff]"
                    style={{
                        left: cursorX.get() - 40,
                        top: cursorY.get() - 40,
                    }}
                />
            )}
        </>
    );
};

export default CustomCursor;
