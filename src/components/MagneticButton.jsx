import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ 
    children, 
    className = '', 
    strength = 0.5, 
    onClick, 
    style = {},
    ...props 
}) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
        
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        
        setPosition({ 
            x: deltaX * strength, 
            y: deltaY * strength 
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={buttonRef}
            className={`relative flex items-center justify-center ${className}`}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={style}
            {...props}
        >
            {/* Magnetic background/content wrapper */}
            <motion.span
                className="relative z-10 block w-full h-full"
                animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            >
                {children}
            </motion.span>
            
            {/* Inner glow effect that follows mouse */}
            <motion.div
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[inherit]"
                style={{
                    background: `radial-gradient(circle at ${50 + (position.x / 10)}% ${50 + (position.y / 10)}%, rgba(255,255,255,0.15) 0%, transparent 70%)`,
                }}
            />
        </motion.button>
    );
};

export default MagneticButton;
