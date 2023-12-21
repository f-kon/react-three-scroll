import { ThreeElements } from "@react-three/fiber";
import { useColor } from "../utils/getMaterialColor";

export const Box = (props: ThreeElements["mesh"]) => {
  const color = useColor();
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
