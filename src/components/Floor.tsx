import { useRef } from "react";
import * as THREE from "three";
import { ThreeElements } from "@react-three/fiber";

export const Floor = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  return (
    <mesh {...props} ref={meshRef} scale={100}>
      <planeGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={[0.6, 0.6, 0.6]} />
    </mesh>
  );
};
