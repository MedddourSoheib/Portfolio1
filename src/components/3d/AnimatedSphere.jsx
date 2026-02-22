import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere() {
    const sphere = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        sphere.current.rotation.x = time * 0.15;
        sphere.current.rotation.y = time * 0.2;
        sphere.current.position.y = Math.sin(time * 0.5) * 0.3;
    });

    return (
        <group ref={sphere}>
            {/* Main sphere */}
            <Sphere args={[1.5, 64, 64]} position={[2.5, 0, -2]}>
                <MeshDistortMaterial
                    color="#6c63ff"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    transparent
                    opacity={0.35}
                    wireframe
                />
            </Sphere>

            {/* Inner glow sphere */}
            <Sphere args={[1.2, 32, 32]} position={[2.5, 0, -2]}>
                <meshStandardMaterial
                    color="#00d4ff"
                    transparent
                    opacity={0.08}
                    emissive="#00d4ff"
                    emissiveIntensity={0.3}
                />
            </Sphere>

            {/* Smaller orbiting sphere */}
            <Sphere args={[0.3, 16, 16]} position={[-3, 1, -1]}>
                <MeshDistortMaterial
                    color="#8b5cf6"
                    distort={0.3}
                    speed={3}
                    roughness={0.4}
                    metalness={0.6}
                    transparent
                    opacity={0.5}
                    wireframe
                />
            </Sphere>
        </group>
    );
}
