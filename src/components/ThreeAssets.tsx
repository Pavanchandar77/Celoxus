import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Points, PointMaterial, Edges } from '@react-three/drei';
import * as THREE from 'three';

// 3D Abstract Logistics Node / Data Rack
export const HeroNode3D = () => {
  const group = useRef<THREE.Group>(null);
  const lights = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.1;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (lights.current) {
      lights.current.children.forEach((light, i) => {
        if (light instanceof THREE.Mesh) {
          (light.material as THREE.MeshStandardMaterial).emissiveIntensity = Math.sin(state.clock.elapsedTime * 2 + i) * 0.5 + 0.8;
        }
      });
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Core Rack Architecture */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2, 3, 1.5]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.1} metalness={0.8} /> {/* Cisco White polished chrome */}
        </mesh>

        {/* Server Blades / Modules */}
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[0, -1 + i * 0.5, 0.2]}>
            <boxGeometry args={[1.8, 0.4, 1.6]} />
            <meshStandardMaterial color="#ffffff" roughness={0.8} metalness={0.1} /> {/* Matte White */}
          </mesh>
        ))}

        {/* Emissive Status Lights */}
        <group ref={lights} position={[0.8, 0, 1.01]}>
          {[...Array(5)].map((_, i) => (
            <mesh key={i} position={[0, -1 + i * 0.5, 0]}>
              <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
              <meshStandardMaterial 
                color="#049fd9" 
                emissive="#049fd9" 
                emissiveIntensity={2} 
                toneMapped={false} 
              />
            </mesh>
          ))}
        </group>
        
        {/* Accent Panel */}
        <mesh position={[-0.8, -1, 1]}>
          <boxGeometry args={[0.1, 1.5, 0.1]} />
          <meshStandardMaterial color="#049fd9" roughness={0.2} metalness={0.5} />
        </mesh>
      </Float>
    </group>
  );
};

// Minimalist Point-Cloud Globe with Arcs
export const Globe3D = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const arcsRef = useRef<THREE.Group>(null);

  // Generate spherical points
  const points = useMemo(() => {
    const pts = [];
    const radius = 2;
    for (let i = 0; i < 800; i++) {
        const phi = Math.acos(-1 + (2 * i) / 800);
        const theta = Math.sqrt(800 * Math.PI) * phi;
        pts.push(
            radius * Math.cos(theta) * Math.sin(phi),
            radius * Math.sin(theta) * Math.sin(phi),
            radius * Math.cos(phi)
        );
    }
    return new Float32Array(pts);
  }, []);

  const arcs = useMemo(() => {
    return [...Array(5)].map((_, i) => {
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(Math.cos(i) * 2, Math.sin(i) * 2, Math.cos(i) * 1),
        new THREE.Vector3(Math.cos(i)*1.5, Math.sin(i)*1.5, 2.5),
        new THREE.Vector3(Math.cos(i+2) * 2, Math.sin(i+2) * 2, Math.cos(i+2) * 1)
      );
      return curve;
    });
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
    if (arcsRef.current) {
        arcsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group>
        <Points ref={pointsRef} positions={points}>
            <PointMaterial color="#94a3b8" size={0.03} sizeAttenuation={true} transparent opacity={0.6} />
        </Points>
        
        {/* Fake Arcs - a few curved tubes connecting random points */}
        <group ref={arcsRef}>
           {arcs.map((curve, i) => (
             <mesh key={i}>
                 <tubeGeometry args={[curve, 20, 0.015, 8, false]} />
                 <meshBasicMaterial color="#049fd9" transparent opacity={0.8} />
             </mesh>
           ))}
        </group>
    </group>
  );
};

export const LogisticsContainers3D = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const mesh1 = useRef<THREE.Mesh>(null);
  const mesh2 = useRef<THREE.Mesh>(null);

  useFrame(() => {
    // Only apply animation if scrollYProgress exists
    if (scrollYProgress && scrollYProgress.get) {
      const progress = scrollYProgress.get() || 0;
      if (mesh1.current) {
        mesh1.current.position.y = progress;
        mesh1.current.rotation.y = progress;
      }
      if (mesh2.current) {
        mesh2.current.rotation.x = progress;
      }
    }
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={mesh1} scale={0.8}>
           <boxGeometry args={[2, 2, 2]} />
           <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.2} />
           <Edges linewidth={2} color="#049fd9" />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh ref={mesh2} position={[-1.5, -1, 1]} scale={0.5}>
           <boxGeometry args={[2, 2, 2]} />
           <meshStandardMaterial color="#f1f5f9" roughness={0.5} metalness={0.1} />
        </mesh>
      </Float>
    </group>
  );
};
