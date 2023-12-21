import { ThreeElements, useFrame } from "@react-three/fiber";
import { Box } from "./Box";
import { Plane } from "./Plane";
import { useCallback, useEffect, useRef, useState } from "react";
import { Sphere } from "./Sphere";
import { Cylinder } from "./Cylinder";
import { Cone } from "./Cone";
import { Torus } from "./Torus";

const Geo = (props: ThreeElements["mesh"] & { seed: number }) => {
  switch (props.seed) {
    case 0:
      return <Box {...props} />;
    case 1:
      return <Sphere {...props} />;
    case 2:
      return <Cone {...props} rotation-z={Math.PI / 6} />;
    case 3:
      return <Torus {...props} rotation-z={Math.PI / 6} />;
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
  const seed = useRef(Math.floor(Math.random() * 4));
  const deltaRef = useRef(0);
  const move = useCallback(
    (e: WheelEvent) => {
      e.preventDefault();
      deltaRef.current = e.deltaY * 0.002;
    },
    [deltaRef]
  );
  useEffect(() => {
    document.addEventListener("wheel", move);
    return () => window.removeEventListener("wheel", move);
  }, [move]);
  useFrame((state, delta) => {
    const t = delta * 1.2;
    groupRef.current.position.x +=
      t * 1.5 + (1 / 2) * deltaRef.current * (t ^ 2);
    groupRef.current.position.y +=
      t * 1.5 + (1 / 2) * deltaRef.current * (t ^ 2);

    const r = delta * 1.5 + (1 / 2) * deltaRef.current * (delta ^ 2);
    setRotation({ x: rotation.x + r, y: rotation.y + r, z: rotation.z + r });
    deltaRef.current *= 0.9;
    if (groupRef.current.position.x > 10) {
      groupRef.current.position.x -= 20;
      groupRef.current.position.y -= 20;
      seed.current = Math.floor(Math.random() * 5);
    }
    if (groupRef.current.position.x < -10) {
      groupRef.current.position.x += 20;
      groupRef.current.position.y += 20;
    }
  });
  return (
    <group ref={groupRef} {...props}>
      <Geo
        rotation-x={rotation.x}
        rotation-y={rotation.y}
        position={[0, 0, 0]}
        castShadow
        seed={seed.current}
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
