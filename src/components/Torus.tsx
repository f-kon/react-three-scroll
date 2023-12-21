import { ThreeElements } from "@react-three/fiber";
import { useColor } from "../utils/getMaterialColor";

export const Torus = (props: ThreeElements["mesh"]) => {
  const color = useColor();
  return (
    <mesh {...props}>
      <torusGeometry args={[0.5, 0.3, 16, 100]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
