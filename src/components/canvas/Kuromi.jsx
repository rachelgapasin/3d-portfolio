import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Kuromi = () => {
  const kuromi = useGLTF("./models/kuromi/scene.gltf");

  return <primitive object={kuromi.scene} scale={1} position={[0, -2, 0]} />;
};

const KuromiCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 40,
        near: 0.1,
        far: 200,
        position: [10, 3, 6],
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Kuromi />

        <Preload />
      </Suspense>
    </Canvas>
  );
};

export default KuromiCanvas;
