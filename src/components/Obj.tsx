import { ThreeElements, useFrame } from "@react-three/fiber";
import { Box } from "./Box";
import { Plane } from "./Plane";
import { useEffect, useMemo, useRef, useState } from "react";
import { Sphere } from "./Sphere";
import { Cylinder } from "./Cylinder";

const Geo = (props: ThreeElements["mesh"]) => {
  const seed = useMemo(() => Math.floor(Math.random() * 3), []);
  switch (seed) {
    case 0:
      return <Box {...props} />;
    case 1:
      return <Sphere {...props} />;
    default:
      return <Cylinder {...props} rotation-z={Math.PI / 6} />;
  }
};

export const Obj = (props: ThreeElements["group"]) => {
  const groupRef = useRef<THREE.Group>(null!);
  const [rotation, setRotation] = useState<{ x: number; y: number; z: number }>(
    {
      x: 0,
      y: 0,
      z: 0,
    }
  );
  const [acc, setAcc] = useState(0);
  useEffect(() => {
    const move = (e: WheelEvent) => {
      setAcc(e.deltaY * 0.002);
    };
    document.addEventListener("wheel", move);
    return () => document.removeEventListener("wheel", move);
  }, []);
  useFrame((state, delta) => {
    const t = delta * 1.2;
    groupRef.current.position.x += t * 1.5 + (1 / 2) * acc * (t ^ 2);
    groupRef.current.position.y += t * 1.5 + (1 / 2) * acc * (t ^ 2);

    const r = delta * 1.5 + (1 / 2) * acc * (delta ^ 2);
    setRotation({ x: rotation.x + r, y: rotation.y + r, z: rotation.z + r });
    setAcc(acc * 0.9);
    if (groupRef.current.position.x > 10) {
      groupRef.current.position.x = -10;
      groupRef.current.position.y = -10;
    }
    if (groupRef.current.position.x < -10) {
      groupRef.current.position.x = 10;
      groupRef.current.position.y = 10;
    }
  });
  return (
    <group ref={groupRef} {...props}>
      <Geo
        rotation-x={rotation.x}
        rotation-y={rotation.y}
        position={[0, 0, 0]}
        castShadow
      />
      <Plane
        position={[0, -1, 0]}
        rotation-x={-Math.PI / 2}
        scale={3}
        receiveShadow
      />
    </group>
  );
};
