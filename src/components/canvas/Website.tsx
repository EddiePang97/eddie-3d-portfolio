import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, useAnimations } from "@react-three/drei";
import CanvasLoader from "../layout/Loader";
import * as THREE from "three";

const WebSite: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  const movingLightRef = useRef<THREE.SpotLight>(null);
  const { scene, animations } = useGLTF("./artstation_website/scene.gltf");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const firstAnim = Object.keys(actions)[0];
    const action = actions[firstAnim];
    if (action) {
      action.play();
    }
  }, [actions]);

  useFrame(({ clock }) => {
    if (movingLightRef.current) {
      const t = clock.getElapsedTime();
      movingLightRef.current.position.x = Math.sin(t) * 5;
      movingLightRef.current.position.y = 5;
      movingLightRef.current.position.z = Math.cos(t) * 5;
    }
  });

  return (
    <group ref={group}>
      {/* Lighting */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        ref={movingLightRef}
        intensity={1.5}
        angle={0.3}
        penumbra={0.5}
        castShadow
        color="white"
        position={[-5, 5, 2]}
      />
      {/* Model */}
      <primitive
        object={scene}
        scale={0.01}
        position={[0, -1, 0]}
        rotation={[0, 0.5, 0]}
      />
    </group>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 3], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* 禁用 OrbitControls 在 mobile 裝置 */}
        {!isMobile && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
        <WebSite  />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;