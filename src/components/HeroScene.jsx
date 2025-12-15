import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import useThemeStore, { themes } from '../stores/themeStore';

// Subtle floating orbs - use theme accent color
const FloatingOrb = ({ position, size = 1, speed = 1 }) => {
    const meshRef = useRef();
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.05 * speed;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.08 * speed;
        }
    });

    return (
        <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
                <MeshDistortMaterial
                    color={theme.accent}
                    transparent
                    opacity={0.15}
                    distort={0.2}
                    speed={1}
                    roughness={0.5}
                />
            </Sphere>
        </Float>
    );
};

const FloatingOrbSecondary = ({ position, size = 1, speed = 1 }) => {
    const meshRef = useRef();
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.05 * speed;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.08 * speed;
        }
    });

    return (
        <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.5}>
            <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
                <MeshDistortMaterial
                    color={theme.accentSecondary}
                    transparent
                    opacity={0.12}
                    distort={0.2}
                    speed={1}
                    roughness={0.5}
                />
            </Sphere>
        </Float>
    );
};

// Subtle particle field
const Particles = ({ count = 200 }) => {
    const points = useRef();

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.elapsedTime * 0.01;
        }
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.015}
                color="#ffffff"
                transparent
                opacity={0.3}
                sizeAttenuation
            />
        </points>
    );
};

// Main Scene - uses theme colors
const Scene = () => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <>
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} intensity={0.3} color={theme.accent} />
            <pointLight position={[-10, -10, -10]} intensity={0.2} color={theme.accentSecondary} />

            {/* Subtle orbs in background */}
            <FloatingOrb position={[-4, 2, -8]} size={2} speed={0.6} />
            <FloatingOrbSecondary position={[5, -1, -10]} size={1.5} speed={0.8} />
            <FloatingOrb position={[0, 3, -12]} size={1.8} speed={0.5} />

            {/* Subtle particles */}
            <Particles count={150} />
        </>
    );
};

const HeroScene = React.memo(() => {
    const { currentTheme } = useThemeStore();
    const theme = themes[currentTheme];

    return (
        <div className="absolute inset-0 z-0 transition-colors duration-500">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 1]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                {/* Removed solid background color to allow gradient to show through */}
                <fog attach="fog" args={[theme.background, 8, 25]} />
                <Scene />
            </Canvas>

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 pointer-events-none transition-colors duration-500"
                style={{
                    background: `linear-gradient(to bottom, transparent, transparent 50%, ${theme.background}80)`
                }}
            />
        </div>
    );
});

export default HeroScene;
