import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Octahedron, Dodecahedron, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Crystal = ({
  position,
  scale,
  color,
  speed,
  shape = "icosa",
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  shape?: "icosa" | "octa" | "dodeca";
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.4;
  });

  const Shape = shape === "octa" ? Octahedron : shape === "dodeca" ? Dodecahedron : Icosahedron;

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Shape ref={ref as any} args={[1, 0]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          roughness={0.35}
          metalness={0.6}
          distort={0.25}
          speed={1.5}
          flatShading
        />
      </Shape>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} color="#ffd9a8" />
      <directionalLight position={[-5, -3, -2]} intensity={0.4} color="#7a9cc6" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#c87a3f" />

      <Crystal position={[-3.2, 1.4, -1]} scale={1.1} color="#8b5a2b" speed={0.6} shape="icosa" />
      <Crystal position={[3.0, -0.8, -1.5]} scale={1.4} color="#a0522d" speed={0.5} shape="dodeca" />
      <Crystal position={[1.5, 2.2, -2]} scale={0.7} color="#cd853f" speed={0.8} shape="octa" />
      <Crystal position={[-2.5, -1.8, -0.5]} scale={0.85} color="#6b4423" speed={0.7} shape="octa" />
      <Crystal position={[0, 0, -3]} scale={1.6} color="#4a5d6e" speed={0.3} shape="icosa" />
    </>
  );
};

const GeologicalBackground = () => {
  return (
    <div className="absolute inset-0 -z-0 pointer-events-none opacity-40 dark:opacity-30">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GeologicalBackground;
