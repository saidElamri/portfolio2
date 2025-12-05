import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const NeuralBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const container = mountRef.current;

        // Scene Setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x050505, 0.02); // Deep Obsidian Fog

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 20;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // Particles (Nodes)
        const particleCount = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = [];

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

            velocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            });
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0x8b5cf6, // Violet
            size: 0.15,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Connections (Synapses)
        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x06b6d4, // Cyan
            transparent: true,
            opacity: 0.15,
            blending: THREE.AdditiveBlending
        });

        const linesGeometry = new THREE.BufferGeometry();
        const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
        scene.add(lines);

        // Mouse Interaction
        const mouse = new THREE.Vector2();
        const target = new THREE.Vector2();
        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;

        const onMouseMove = (event) => {
            mouse.x = (event.clientX - windowHalfX) * 0.001;
            mouse.y = (event.clientY - windowHalfY) * 0.001;
        };

        window.addEventListener('mousemove', onMouseMove);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            target.x = mouse.x * 0.5;
            target.y = mouse.y * 0.5;

            // Smooth camera movement
            camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
            camera.rotation.y += 0.05 * (target.x - camera.rotation.y);

            // Update Particles
            const positions = particles.geometry.attributes.position.array;

            for (let i = 0; i < particleCount; i++) {
                // Move particles
                positions[i * 3] += velocities[i].x;
                positions[i * 3 + 1] += velocities[i].y;
                positions[i * 3 + 2] += velocities[i].z;

                // Boundary check (bounce)
                if (Math.abs(positions[i * 3]) > 20) velocities[i].x *= -1;
                if (Math.abs(positions[i * 3 + 1]) > 20) velocities[i].y *= -1;
                if (Math.abs(positions[i * 3 + 2]) > 20) velocities[i].z *= -1;
            }
            particles.geometry.attributes.position.needsUpdate = true;

            // Update Connections
            const linePositions = [];
            const connectDistance = 5;

            for (let i = 0; i < particleCount; i++) {
                for (let j = i + 1; j < particleCount; j++) {
                    const dx = positions[i * 3] - positions[j * 3];
                    const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                    const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (dist < connectDistance) {
                        linePositions.push(
                            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                        );
                    }
                }
            }

            lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

            renderer.render(scene, camera);
        };

        animate();

        // Resize Handler
        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default NeuralBackground;
