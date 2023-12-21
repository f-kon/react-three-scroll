import { ThreeElements } from "@react-three/fiber";
import { useColor } from "../utils/getMaterialColor";

export const Cone = (props: ThreeElements["mesh"]) => {
  const color = useColor();
  return (
    <mesh {...props}>
      <coneGeometry args={[0.7, 1.2, 32]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
