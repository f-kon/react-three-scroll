import { ThreeElements } from "@react-three/fiber";

export const Sphere = (props: ThreeElements["mesh"]) => {
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.8, 32, 16]} />
      <meshStandardMaterial color={"orange"} roughness={1} metalness={1} />
    </mesh>
  );
};
