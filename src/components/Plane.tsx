import { useRef } from "react";
import * as THREE from "three";
import { ThreeElements, useLoader } from "@react-three/fiber";
import woodtexture from "../assets/wood-texture.jpg";

export const Plane = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, woodtexture);
  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 0.05]} />
      <meshBasicMaterial color={"#494b0b"} map={texture} />
    </mesh>
  );
};
