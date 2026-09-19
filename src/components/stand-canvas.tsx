import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import {
  filamentById,
  productBySlug,
  type StandConfig,
} from "@/lib/catalog";

const IN = 0.038;

export default function StandCanvas({ config }: { config: StandConfig }) {
  const height = config.heightIn * IN;
  const lookY = Math.max(height * 0.55, 0.12);

  return (
    <Canvas
      camera={{ position: [0.62, 0.48, 0.78], fov: 28 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="h-full w-full touch-none"
    >
      <color attach="background" args={["#ede4f7"]} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[1.4, 2.2, 1.1]} intensity={1.35} />
      <directionalLight position={[-1.2, 0.6, -0.8]} intensity={0.35} />
      <Rig config={config} />
      <ContactShadows position={[0, 0, 0]} opacity={0.28} scale={2.2} blur={2.4} far={1} />
      <OrbitControls
        enablePan={false}
        minPolarAngle={0.55}
        maxPolarAngle={1.35}
        minDistance={0.5}
        maxDistance={1.4}
        autoRotate
        autoRotateSpeed={0.55}
        target={[0, lookY, 0]}
      />
    </Canvas>
  );
}

function Rig({ config }: { config: StandConfig }) {
  const height = config.heightIn * IN;
  const radius = (config.diameterIn / 2) * IN;
  const color = filamentById(config.colorId).hex;
  const bowl = config.bowlSlug ? productBySlug(config.bowlSlug) : null;
  const bowlColor = bowl?.bowlColor ?? "#d7c4a8";
  const gap = radius * 2 + 0.05;

  return (
    <group>
      {config.nests === 2 ? (
        <>
          <Cradle
            height={height}
            radius={radius}
            color={color}
            layered={config.finish === "layered"}
            position={[-gap / 2, 0, 0]}
          />
          <Cradle
            height={height}
            radius={radius}
            color={color}
            layered={config.finish === "layered"}
            position={[gap / 2, 0, 0]}
          />
          <mesh position={[0, height * 0.72, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.018, 0.018, gap, 20]} />
            <FdmMaterial color={color} layered={config.finish === "layered"} />
          </mesh>
          {bowl ? (
            <>
              <Bowl radius={radius} color={bowlColor} position={[-gap / 2, height, 0]} />
              <Bowl radius={radius} color="#cfc6b6" position={[gap / 2, height, 0]} water />
            </>
          ) : null}
        </>
      ) : (
        <>
          <Cradle
            height={height}
            radius={radius}
            color={color}
            layered={config.finish === "layered"}
            position={[0, 0, 0]}
          />
          {bowl ? <Bowl radius={radius} color={bowlColor} position={[0, height, 0]} /> : null}
        </>
      )}
    </group>
  );
}

function Cradle({
  height,
  radius,
  color,
  layered,
  position,
}: {
  height: number;
  radius: number;
  color: string;
  layered: boolean;
  position: [number, number, number];
}) {
  const legLen = Math.max(height - 0.02, 0.06);
  return (
    <group position={position}>
      <mesh position={[0, height, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius * 0.92, 0.018, 14, 48]} />
        <FdmMaterial color={color} layered={layered} />
      </mesh>
      <mesh position={[0, height - 0.012, 0]}>
        <cylinderGeometry args={[radius * 0.78, radius * 0.78, 0.014, 40]} />
        <FdmMaterial color={color} layered={layered} />
      </mesh>
      {[0, 1, 2].map((i) => {
        const a = (i / 3) * Math.PI * 2 + Math.PI / 6;
        const x = Math.cos(a) * radius * 0.7;
        const z = Math.sin(a) * radius * 0.7;
        const flare = 0.2;
        return (
          <group key={i}>
            <mesh
              position={[x * (1 + flare / 2), legLen / 2, z * (1 + flare / 2)]}
              rotation={[0.22 * Math.cos(a + Math.PI), 0, -0.22 * Math.sin(a + Math.PI)]}
            >
              <cylinderGeometry args={[0.014, 0.022, legLen, 10]} />
              <FdmMaterial color={color} layered={layered} />
            </mesh>
            <mesh position={[x * (1 + flare), 0.012, z * (1 + flare)]}>
              <sphereGeometry args={[0.018, 16, 12]} />
              <meshStandardMaterial color="#2a2824" roughness={0.9} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

function Bowl({
  radius,
  color,
  position,
  water = false,
}: {
  radius: number;
  color: string;
  position: [number, number, number];
  water?: boolean;
}) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[radius * 0.82, radius * 0.74, 0.055, 40]} />
        <meshStandardMaterial color={color} roughness={0.45} />
      </mesh>
      <mesh position={[0, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius * 0.8, 0.012, 10, 40]} />
        <meshStandardMaterial color={color} roughness={0.4} />
      </mesh>
      {!water
        ? [0.22, 0.4, 0.58].map((t) => (
            <mesh key={t} position={[0, 0.01, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[radius * t * 0.82, 0.007, 8, 28]} />
              <meshStandardMaterial color={color} roughness={0.55} />
            </mesh>
          ))
        : (
          <mesh position={[0, 0.014, 0]}>
            <cylinderGeometry args={[radius * 0.7, radius * 0.7, 0.01, 32]} />
            <meshStandardMaterial color="#9eb7c4" roughness={0.15} metalness={0.1} />
          </mesh>
        )}
    </group>
  );
}

function FdmMaterial({ color, layered }: { color: string; layered: boolean }) {
  const map = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 8;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 8, 128);
    if (layered) {
      ctx.fillStyle = "rgba(0,0,0,0.18)";
      for (let y = 0; y < 128; y += 3) ctx.fillRect(0, y, 8, 1);
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      for (let y = 1; y < 128; y += 3) ctx.fillRect(0, y, 8, 1);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(2, 7);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [color, layered]);

  const mapRef = useRef(map);
  mapRef.current = map;
  useEffect(() => () => mapRef.current?.dispose(), [map]);

  return (
    <meshStandardMaterial
      color={layered ? "#ffffff" : color}
      map={layered ? map : undefined}
      roughness={layered ? 0.74 : 0.38}
      metalness={0.03}
    />
  );
}
