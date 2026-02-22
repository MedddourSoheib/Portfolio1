import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const ParticleSwarm = ({ count = 500, color, size = 0.04, speed = 1 }) => {
    const pointsRef = useRef();

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 30;
        }
        return pos;
    }, [count]);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.x += (delta * speed) / 20;
            pointsRef.current.rotation.y += (delta * speed) / 25;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={size}
                color={color}
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
};

export default function Background3D() {
    return (
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }} dpr={[1, 2]}>
                <fog attach="fog" args={['#050508', 5, 20]} />
                <ParticleSwarm count={800} color="#6c63ff" size={0.03} speed={0.5} />
                <ParticleSwarm count={500} color="#00d4ff" size={0.05} speed={0.8} />
                <ParticleSwarm count={300} color="#8b5cf6" size={0.02} speed={1.2} />
            </Canvas>
        </div>
    );
}
