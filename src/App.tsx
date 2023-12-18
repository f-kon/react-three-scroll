import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Floor } from "./components/Floor";
import { Obj } from "./components/Obj";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}>
      <color attach="background" args={["#141622"]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[-1, 1, 3]} castShadow intensity={8} />
      <spotLight
        position={[0, 1, 5]}
        angle={-Math.PI / 4}
        intensity={10}
        penumbra={0.2}
        castShadow
      />
      <group>
        <Obj position={[-5, -5, 0]} />
        <Obj position={[0, 0, 0]} />
        <Obj position={[5, 5, 0]} />
        <Obj position={[10, 10, 0]} />
      </group>
      <Floor position={[0, 0, -2]} receiveShadow />
    </Canvas>
  );
}

export default App;
