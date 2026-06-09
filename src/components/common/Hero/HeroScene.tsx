import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Center, Environment } from '@react-three/drei';
import type { Group } from 'three';

useGLTF.preload('/models/ljusstake.glb');

export default function HeroScene() {
  const spinRef = useRef<Group>(null);
  const { scene } = useGLTF('/models/ljusstake.glb');

  useFrame((_, delta) => {
    if (spinRef.current) {
      spinRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 8, 5]} intensity={2.0} />

      {/* outer group sets the tilt; inner group spins around the tilted axis */}
      <group rotation={[0, 0, 0]}>
        <group ref={spinRef}>
          <Center>
            <primitive object={scene} scale={0.95} />
          </Center>
        </group>
      </group>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        enableRotate={false}
      />
    </>
  );
}
