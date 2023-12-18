import { ThreeElements } from "@react-three/fiber";

export const Cylinder = (props: ThreeElements["mesh"]) => {
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
      <meshStandardMaterial color={"brown"} roughness={1} metalness={1} />
    </mesh>
  );
};
