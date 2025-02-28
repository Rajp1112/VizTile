import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import floorTexture1 from '/assets/tiles/600x600/6.jpg';
import wallTextureauto from '/assets/tiles/600x600/6.jpg';

import GridMaterial from '../../../components/GridMaterial';
import WallMaterial from '../../../components/WallMaterial';
export function LivingRoomModel2(props) {
  const { nodes, materials } = useGLTF(
    '/assets/GLBModel/vintage_living_room.glb'
  );
  const texture = useTexture(props.selectedImage || floorTexture1);
  const texture2 = useTexture(props.selectedImage2 || floorTexture1);

  const wallTexture1 = useTexture(props.selectedWallImage || wallTextureauto);
  const wallTexture2 = useTexture(props.selectedWallImage2 || wallTextureauto);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sofa_sofa1001_0.geometry}
            material={materials['sofa1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sofa_sofa2001_0.geometry}
            material={materials['sofa2.001']}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.table_table1001_0.geometry}
            material={materials['table1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.table_table2001_0.geometry}
            material={materials['table2.001']}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light_light1001_0.geometry}
            material={materials['light1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light_light3001_0.geometry}
            material={materials['light3.001']}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_lamp1001_0.geometry}
            material={materials['lamp1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_lamp2001_0.geometry}
            material={materials['lamp2.001']}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pillow_pillow1001_0.geometry}
            material={materials['pillow1.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pillow_pillow2001_0.geometry}
            material={materials['pillow2.001']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.carpet_Carpet001_0.geometry}
          material={materials['Carpet.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.floor_Floor001_0.geometry}
          material={materials['Floor.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <GridMaterial
            texture={texture}
            texture2={texture2}
            gapSize={props.gapSize}
            mode={props.layout}
            // repeatCount={props.repeat}
            tileWidth={props.tileWidth}
            tileHeight={props.tileHeight}
            gapColor={props.gapColor}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wall_wall001_0.geometry}
          material={materials['wall.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <WallMaterial
            texture={wallTexture1}
            texture2={wallTexture2}
            gapSize={props.wallGapSize}
            gapColor={props.wallGapColor}
            tileHeight={props.wallTileHeight}
            tileWidth={props.wallTileWidth}
            mode={props.wallLayout}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.curtain_curtain001_0.geometry}
          material={materials['curtain.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.house_house001_0.geometry}
          material={materials['house.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dec_dec001_0.geometry}
          material={materials['dec.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <GridMaterial />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.vase_vase001_0.geometry}
          material={materials['vase.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plastic_pot_Plastic_pot001_0.geometry}
          material={materials['Plastic_pot.001']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plants_plants001_0.geometry}
          material={materials['plants.001']}
          position={[-179.12, 72.278, 424.239]}
          rotation={[-Math.PI / 2, 0, -0.396]}
          scale={[327.864, 327.864, 485.805]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/GLBModel/vintage_living_room.glb');
