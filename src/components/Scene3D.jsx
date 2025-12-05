import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

const AbstractShape = () => {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        mesh.current.rotation.x = time * 0.2;
        mesh.current.rotation.y = time * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={mesh} scale={2.5}>
                <torusKnotGeometry args={[1, 0.3, 128, 32]} />
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={5}
                    thickness={2}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={1}
                    anisotropy={20}
                    distortion={0.5}
                    distortionScale={0.5}
                    temporalDistortion={0.5}
                    color="#ffffff"
                    background={new THREE.Color('#0a0a0a')}
                />
            </mesh>
        </Float>
    );
};

const Scene3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }} gl={{ alpha: true }}>
                <Environment preset="city" />
                <AbstractShape />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            </Canvas>
        </div>
    );
};

export default Scene3D;
