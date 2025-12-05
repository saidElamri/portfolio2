import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';
import { motion } from 'framer-motion-3d';

const ImagePlane = ({ src, isActive }) => {
    const mesh = useRef();
    const texture = useLoader(TextureLoader, src);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        // Subtle wave movement
        if (mesh.current) {
            mesh.current.material.uniforms.uTime.value = time;
            mesh.current.material.uniforms.uHover.value = THREE.MathUtils.lerp(
                mesh.current.material.uniforms.uHover.value,
                hovered ? 1 : 0,
                0.1
            );
        }
    });

    const uniforms = useRef({
        uTime: { value: 0 },
        uHover: { value: 0 },
        uTexture: { value: texture }
    });

    const vertexShader = `
    varying vec2 vUv;
    uniform float uTime;
    uniform float uHover;

    void main() {
      vUv = uv;
      vec3 pos = position;
      
      // Hover distortion
      float noise = sin(pos.x * 10.0 + uTime) * cos(pos.y * 10.0 + uTime);
      pos.z += noise * 0.1 * uHover;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `;

    const fragmentShader = `
    uniform sampler2D uTexture;
    uniform float uHover;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // RGB Shift on hover
      float shift = uHover * 0.02;
      float r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
      float g = texture2D(uTexture, uv).g;
      float b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;
      
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `;

    return (
        <mesh
            ref={mesh}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={[4, 3, 1]}
        >
            <planeGeometry args={[1, 1, 32, 32]} />
            <shaderMaterial
                uniforms={uniforms.current}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />
        </mesh>
    );
};

const DistortedImage = ({ src }) => {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ImagePlane src={src} />
            </Canvas>
        </div>
    );
};

export default DistortedImage;
