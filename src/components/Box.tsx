import { ThreeElements } from "@react-three/fiber";

export const Box = (props: ThreeElements["mesh"]) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} roughness={1} metalness={1} />
    </mesh>
  );
};
