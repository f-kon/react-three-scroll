import { ThreeElements } from "@react-three/fiber";
import { useColor } from "../utils/getMaterialColor";

export const Cylinder = (props: ThreeElements["mesh"]) => {
  const color = useColor();
  return (
    <mesh {...props}>
      <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
