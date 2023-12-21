import { ThreeElements } from "@react-three/fiber";
import { useColor } from "../utils/getMaterialColor";

export const Sphere = (props: ThreeElements["mesh"]) => {
  const color = useColor();
  return (
    <mesh {...props}>
      <sphereGeometry args={[0.8, 32, 16]} />
      <meshLambertMaterial color={color} />
    </mesh>
  );
};
