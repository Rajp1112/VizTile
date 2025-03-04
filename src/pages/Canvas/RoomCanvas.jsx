import React, { useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Kitchen1Model } from '../Models/KitchenModel/Kitchen1Model';
import { LivingRoomModel1 } from '../Models/LivingRoomModel/LivingRoomModel1';
import { LivingRoomModel2 } from '../Models/LivingRoomModel/LivingRoomModel2';
import { MeetingRoomModel1 } from '../Models/MeetingRoomModel/MeetingRoomModel1';
import { ClassRoomModel1 } from '../Models/ClaasRoomModel/ClassRoomModel1';
import { BathRoomModel1 } from '../Models/BathRoomModel/BathRoomModel1';
import { BathRoomModel2 } from '../Models/BathRoomModel/BathRoomModel2';

const RoomCanvas = ({
  pathname,
  selectedImage,
  selectedImage2,
  gapSize,
  layout,
  tileWidth,
  tileHeight,
  gapColor,
  selectedWallImage,
  selectedWallImage2,
  wallTileWidth,
  wallTileHeight,
  wallLayout,
  wallGapSize,
  wallGapColor,
  canvasRef,
}) => {
  const roomSettings = useMemo(
    () => ({
      '/kitchen/1': {
        position: [0, 2, 4],
        minPolarAngle: 1.0,
        maxPolarAngle: 1.3,
        minAzimuthAngle: -2,
        maxAzimuthAngle: 0.5,
        model: Kitchen1Model,
      },
      '/livingroom/1': {
        position: [0, 2, 4],
        minPolarAngle: 1.0,
        maxPolarAngle: 1.3,
        minAzimuthAngle: -0.8,
        maxAzimuthAngle: 0.5,
        model: LivingRoomModel1,
      },
      '/livingroom/2': {
        position: [8, 2, 1],
        minPolarAngle: 1.2,
        maxPolarAngle: 1.4,
        minAzimuthAngle: 1,
        maxAzimuthAngle: 2,
        model: LivingRoomModel2,
      },
      '/meetingroom/1': {
        position: [1, 2, -4],
        minPolarAngle: 1,
        maxPolarAngle: 1.4,
        minAzimuthAngle: 2.5,
        maxAzimuthAngle: 3.5,
        model: MeetingRoomModel1,
      },
      '/classroom/1': {
        position: [2, 2, 1],
        minPolarAngle: 1,
        maxPolarAngle: 1.2,
        minAzimuthAngle: 10,
        maxAzimuthAngle: 3,
        model: ClassRoomModel1,
      },
      '/bathroom/1': {
        position: [5, 2, -1.5],
        minPolarAngle: 1,
        maxPolarAngle: 1.4,
        minAzimuthAngle: 2.7,
        maxAzimuthAngle: 3.5,
        model: BathRoomModel1,
        enableZoom: true,
        minDistance: 1.5,
        maxDistance: 2.5,
      },
      '/bathroom/2': {
        position: [5, 4, 1.5],
        minPolarAngle: 0.9,
        maxPolarAngle: 1.2,
        minAzimuthAngle: -0.7,
        maxAzimuthAngle: 0.5,
        model: BathRoomModel2,
      },
    }),
    []
  );

  const currentRoom = roomSettings[pathname];

  if (!currentRoom) return null;
  const {
    position,
    minPolarAngle,
    maxPolarAngle,
    minAzimuthAngle,
    maxAzimuthAngle,
    model: Model,
    enableZoom = false,
    minDistance,
    maxDistance,
  } = currentRoom;

  return (
    <Canvas
      ref={canvasRef}
      shadows
      camera={{ position }}
      gl={{ alpha: true, preserveDrawingBuffer: true, antialias: true }}
    >
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 1.5, 5]} castShadow />
      <OrbitControls
        enablePan={false}
        minPolarAngle={minPolarAngle}
        maxPolarAngle={maxPolarAngle}
        minAzimuthAngle={minAzimuthAngle}
        maxAzimuthAngle={maxAzimuthAngle}
        enableRotate
        enableZoom={enableZoom}
        minDistance={minDistance}
        maxDistance={maxDistance}
      />

      <Model
        selectedImage={selectedImage}
        selectedImage2={selectedImage2}
        gapSize={gapSize}
        layout={layout}
        tileWidth={tileWidth}
        tileHeight={tileHeight}
        gapColor={gapColor}
        selectedWallImage={selectedWallImage}
        selectedWallImage2={selectedWallImage2}
        wallTileWidth={wallTileWidth}
        wallTileHeight={wallTileHeight}
        wallLayout={wallLayout}
        wallGapSize={wallGapSize}
        wallGapColor={wallGapColor}
      />
    </Canvas>
  );
};

export default RoomCanvas;
