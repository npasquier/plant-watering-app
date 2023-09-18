"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { PerformanceMonitor } from '@react-three/drei'

import CanvasLoader from "../../Loader";

const Plant = () => {
  const heroPlant = useGLTF("./ficus_bonsai/scene.gltf");
  const myMesh : any = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime()*0.3;
    myMesh.current.rotation.y = a;
  });

  return (
    <mesh ref={myMesh}>
      <ambientLight intensity={2.8} />
      <directionalLight
        position={[40, 10, 5]}
        intensity={0.2}
      />
      <directionalLight
      castShadow
        position={[10, 420, 100]}
        intensity={1.1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={10}
        shadow-camera-left={-30}
        shadow-camera-right={10}
        shadow-camera-top={40}
        shadow-camera-bottom={-10}
              />
      <spotLight intensity={0.5} position={[90,100,50]}  castShadow/>
      <primitive object={heroPlant.scene} 
      scale={4} 
      position={[0, 1, 0]} />
    </mesh>
  );
};

const PlantCanva = () => {
  const [dpr, setDpr] = useState(2)

  return (
    <Canvas
      // frameloop="demand"
      shadows
      camera={{ position: [0, 0, 15], fov: 11 }}
      dpr={dpr}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <PerformanceMonitor 
        onDecline={() => setDpr(1.5)}
        onIncline={() => setDpr(2)}
      >
        <Plant />
      </PerformanceMonitor>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PlantCanva;