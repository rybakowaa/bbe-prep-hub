import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;

        float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          vec4 color = vec4(0.0);
          
          // Only 5 comets, moving slowly to bottom-right with scattered positions
          for (float i = 0.0; i < 5.0; i++) {
            // Use different prime numbers for better distribution
            float seed1 = rand(vec2(i * 13.37, i * 7.89));
            float seed2 = rand(vec2(i * 23.45, i * 11.23));
            float seed3 = rand(vec2(i * 31.17, i * 17.53));

            // Scattered starting positions across the screen
            vec2 start = vec2(
              seed1 * 1.2 - 0.1,
              seed2 * 1.2 - 0.1
            );

            // Different speeds and time offsets for each comet
            float speed = 0.02 + seed3 * 0.03;
            float timeOffset = seed1 * 100.0; // Each comet starts at different "time"
            vec2 pos = start + vec2(1.0, -1.0) * (iTime + timeOffset) * speed;
            
            // Wrap around
            pos = fract(pos + 1.0);
            
            // Distance from comet head
            vec2 diff = uv - pos;
            float dist = length(diff);
            
            // Tail direction (opposite to movement - towards top-left)
            vec2 tailDir = normalize(vec2(-1.0, 1.0));
            float tailDot = max(0.0, dot(normalize(diff), tailDir));
            
            // Comet shape: small head with tail
            float head = smoothstep(0.012, 0.0, dist);
            float tail = smoothstep(0.10, 0.0, dist) * pow(tailDot, 3.0) * 0.5;
            float comet = head + tail;
            
            // Colors: blue and purple gradient (no pink/white)
            vec3 cometColor;
            if (mod(i, 3.0) < 1.0) {
              cometColor = vec3(0.4, 0.7, 0.95); // Light blue
            } else if (mod(i, 3.0) < 2.0) {
              cometColor = vec3(0.6, 0.5, 0.9);  // Purple
            } else {
              cometColor = vec3(0.5, 0.6, 0.95); // Blue-purple
            }
            
            color.rgb += cometColor * comet * 0.7;
            color.a += comet * 0.5;
          }
          
          gl_FragColor = color;
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let frameId: number;
    const animate = () => {
      material.uniforms.iTime.value += 0.008; // Slower animation
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default AnimatedBackground;
