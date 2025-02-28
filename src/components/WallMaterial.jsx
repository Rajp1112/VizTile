import React, { useMemo } from 'react';
import * as THREE from 'three';

const WallMaterial = ({
  texture,
  texture2 = null,
  mode = 'simple',
  gapSize = 0.1,
  gapColor = '#000000', // This is dynamically set from the parent component
  wallColor = '#E0E0E0',
  tileWidth, // Added prop for the tile width
  tileHeight, // Added prop for the tile height
}) => {
  const shaderMaterial = useMemo(() => {
    const hasTexture2 = texture2 !== null;

    const modeEnum = {
      simple: 0,
      chess: 1,
      line: 2,
      herringbone: 3,
      brickrow2: 4,
      brickcolumn2: 5,
      lineV: 6,
      // bookmatch: 7,
      diagonalherringbone: 8,
      brickcolumn: 9,
      brickrow: 10,
      // customPattern: ,
    };

    // Calculate repeat count based on the tile size
    const repeatX = Math.ceil(1 / tileWidth);
    const repeatY = Math.ceil(1 / tileHeight);

    return new THREE.ShaderMaterial({
      uniforms: {
        map1: { value: texture },
        map2: { value: hasTexture2 ? texture2 : texture },

        gapSize: { value: gapSize },
        repeatX: { value: repeatX },
        repeatY: { value: repeatY },
        gapColor: { value: new THREE.Color(gapColor) }, // Dynamically set
        wallColor: { value: new THREE.Color(wallColor) }, // Dynamically
        hasTexture2: { value: hasTexture2 ? 1.0 : 0.0 },
        mode: { value: modeEnum[mode] || 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map1;
        uniform sampler2D map2;
        uniform float gapSize;
        uniform float repeatX;
        uniform float repeatY;
        uniform vec3 gapColor;
        uniform vec3 wallColor;
        
              
        

        uniform float hasTexture2;
        uniform int mode;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv * vec2(repeatX, repeatY); // Repeat the texture based on the calculated repeat count
          vec2 repeatedUV = fract(uv); // Keep UVs within [0,1]

          bool useTexture2 = false;
        
          switch(mode) {
            case 1: // Chessboard pattern
              useTexture2 = mod(floor(uv.x) + floor(uv.y), 2.0) < 1.0 && hasTexture2 == 1.0;
              break;
            case 2: // Line-by-line pattern
              useTexture2 = mod(floor(uv.y), 2.0) < 1.0 && hasTexture2 == 1.0;
              break;
           case 3: // Herringbone pattern
              // Rotate the UVs by 45 degrees
              float angle = 3.14159 / 4.0; // 45 degrees in radians
              mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              vec2 rotatedUV = (uv - 0.5) * rotation + 0.5;
              // Stagger alternate rows
              float shiftY = mod(floor(rotatedUV.y * 2.0), 2.0) * 0.5; // Shift every second row
              rotatedUV.x += shiftY;
              // Determine texture usage
              useTexture2 = mod(floor(rotatedUV.x) + floor(rotatedUV.y), 2.0) < 1.0 && hasTexture2 == 1.0;
              uv = rotatedUV;
              break;
            case 4: // Brickcolumn pattern (vertical stacked rows, with offset)
              float colOffset = mod(floor(uv.y), 2.0) * 0.5; // Offset every other column
              uv.x += colOffset;
              useTexture2 = mod(floor(uv.x), 2.0) < 1.0 && hasTexture2 == 1.0;
              break;
            case 5: // Brickrow pattern (horizontal stacked rows, with offset)
              float rowOffset = mod(floor(uv.x), 2.0) * 0.5; // Offset every other row
              uv.y += rowOffset;
              useTexture2 = mod(floor(uv.y), 2.0) < 1.0 && hasTexture2 == 1.0;
              break;
            case 6: // Vertical line pattern
              float colOffset2 = mod(floor(uv.x), 2.0) * 0.5; // Offset every other row
              useTexture2 = mod(floor(uv.x), 2.0) < 1.0 && hasTexture2 == 1.0;
              break;
            case 7: // Diamond pattern
              float xDist = abs(mod(floor(uv.x * 2.0), 2.0) - 0.5);
              float yDist = abs(mod(floor(uv.y * 2.0), 2.0) - 0.5);
              float diamondPattern = max(xDist, yDist);
              useTexture2 = diamondPattern < 0.5 && hasTexture2 == 1.0;
              break;
            case 8: // Diagonal herringbone (different diagonal pattern)
              float diag1D = mod(floor(uv.x + uv.y * 2.0), 2.0);
              float diag2D = mod(floor(uv.x - uv.y * 2.0), 2.0);
              useTexture2 = (diag1D < 1.0 || diag2D < 1.0) && hasTexture2 == 1.0;
              break;

            case 9: // BrickCol pattern (vertical stacked rows, with offset) for single texture
              float rowOffset2 = mod(floor(uv.x), 2.0) * 0.5; 
              uv.y += rowOffset2;
              useTexture2 = false; 
              break;
            case 10:
              float colOffset3 = mod(floor(uv.y), 2.0) * 0.5; 
              uv.x += colOffset3;
              useTexture2 = false;
              break;
            
            default:
              useTexture2 = false;
          }

          // Create gaps and set their color
          if (mod(uv.x, 1.0) < gapSize || mod(uv.y, 1.0) < gapSize) {
            gl_FragColor = vec4(gapColor, 1.0);
          } else {
            vec4 texColor = useTexture2 ? texture2D(map2, repeatedUV) : texture2D(map1, repeatedUV);
            gl_FragColor = mix(vec4(wallColor, 1.0), texColor, texColor.a);
          }
        }
      `,
    });
  }, [
    texture,
    texture2,
    mode,
    gapSize,
    gapColor,
    wallColor,
    tileWidth,
    tileHeight,
  ]);

  return <primitive attach='material' object={shaderMaterial} />;
};

export default WallMaterial;
