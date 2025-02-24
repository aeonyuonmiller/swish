'use client';

import { useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useSliderBlade, useTweakpane } from 'react-tweakpane';

// Custom shader material for cursor trail effect
const DisplacementMaterial = shaderMaterial(
    {
        resolution: new THREE.Vector2(),
        mouseTrail: null,
        gridSize: 40
    },
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      float trail = texture2D(mouseTrail, uv).r;
      vec2 displacement = vec2(trail * 0.02, trail * 0.02);
      
      gl_FragColor = texture2D(mouseTrail, uv + displacement);
    }
  `
);

function DisplacementEffect() {
    const size = useThree((s) => s.size);
    const viewport = useThree((s) => s.viewport);
    const pane = useTweakpane();

    const [gridSize] = useSliderBlade(pane, {
        label: 'Cells',
        min: 50,
        max: 500,
        value: 80
    });

    const displacementMaterial = useMemo(() => new DisplacementMaterial(), []);

    const [trail, onMove] = useTrailTexture({
        size: 912,
        radius: 0.1,
        maxAge: 1000,
        interpolate: 1,
        ease: (x) =>
            x < 0.5
                ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
                : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2
    });

    const scale = Math.max(viewport.width, viewport.height) / 2;

    return (
        <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
            <planeGeometry args={[2, 2]} />
            <primitive
                object={displacementMaterial}
                gridSize={gridSize}
                resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
                mouseTrail={trail}
            />
        </mesh>
    );
}

export default function CursorTrailEffect() {
    return (
        <Canvas
            style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
            gl={{
                antialias: true,
                powerPreference: 'high-performance'
            }}
        >
            <DisplacementEffect />
        </Canvas>
    );
}
