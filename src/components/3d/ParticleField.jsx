import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function ParticleField({ count = 2000 }) {
    const mesh = useRef();
    const light = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);
        const colors = new Float32Array(count * 3);
        const speeds = new Float32Array(count);

        const color1 = new THREE.Color('#6c63ff');
        const color2 = new THREE.Color('#00d4ff');
        const color3 = new THREE.Color('#8b5cf6');

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 20;
            positions[i3 + 2] = (Math.random() - 0.5) * 20;

            sizes[i] = Math.random() * 3 + 0.5;
            speeds[i] = Math.random() * 0.5 + 0.1;

            const colorChoice = Math.random();
            const c = colorChoice < 0.33 ? color1 : colorChoice < 0.66 ? color2 : color3;
            colors[i3] = c.r;
            colors[i3 + 1] = c.g;
            colors[i3 + 2] = c.b;
        }

        return { positions, sizes, colors, speeds };
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const positions = mesh.current.geometry.attributes.position.array;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const speed = particles.speeds[i];
            positions[i3 + 1] += Math.sin(time * speed + i) * 0.002;
            positions[i3] += Math.cos(time * speed * 0.5 + i) * 0.001;
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;
        mesh.current.rotation.y = time * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}
