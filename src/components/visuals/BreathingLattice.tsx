"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function Lattice({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
    const pointsRef = useRef<THREE.Points>(null!);
    const linesRef = useRef<THREE.LineSegments>(null!);
    const { theme } = useTheme();

    // Create geometry once
    const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5, 2), []); // Radius 1.5, Detail 2

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const slowTime = time * 0.1;

        // Breathing effect (scale)
        const scale = 1 + Math.sin(time * 0.5) * 0.05;

        // Rotation logic
        // Auto-rotate
        const autoRotX = slowTime * 0.5;
        const autoRotY = slowTime * 0.3;

        // Mouse influence (interpolated for smoothness)
        // Here we can just add the mouse pos directly or lerp. Simple addition is fine.
        const mouseX = mouse.current[0] * 0.5;
        const mouseY = mouse.current[1] * 0.5;

        if (pointsRef.current) {
            pointsRef.current.rotation.x = autoRotX + mouseY;
            pointsRef.current.rotation.y = autoRotY + mouseX;
            pointsRef.current.scale.set(scale, scale, scale);
        }
        if (linesRef.current) {
            linesRef.current.rotation.x = autoRotX + mouseY;
            linesRef.current.rotation.y = autoRotY + mouseX;
            linesRef.current.scale.set(scale, scale, scale);
        }
    });

    // Colors based on theme
    const nodeColor = theme === "light" ? "#4f46e5" : "#22d3ee"; // Indigo vs Cyan
    const lineColor = theme === "light" ? "#94a3b8" : "#22d3ee";

    return (
        <group>
            <points ref={pointsRef} geometry={geometry}>
                <pointsMaterial
                    size={0.05}
                    color={nodeColor}
                    transparent
                    opacity={0.8}
                    sizeAttenuation
                />
            </points>
            <lineSegments ref={linesRef} geometry={geometry}>
                <lineBasicMaterial
                    color={lineColor}
                    transparent
                    opacity={0.15}
                />
            </lineSegments>
        </group>
    );
}

export function BreathingLattice() {
    const mouse = useRef<[number, number]>([0, 0]);

    function handleMouseMove(event: React.MouseEvent) {
        // Normalize mouse to -1 to 1
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        mouse.current = [x, y];
    }

    return (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void-gray to-slate-900" onMouseMove={handleMouseMove}>
            <Canvas
                camera={{ position: [0, 0, 4], fov: 60 }}
                dpr={[1, 2]} // Handle high DPI screens
                gl={{ antialias: true, alpha: true }}
            >
                <Lattice mouse={mouse} />
            </Canvas>
            {/* Overlay gradient to fade bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void-gray to-transparent pointer-events-none" />
        </div>
    );
}
