import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import floorTexture1 from '/assets/tiles/600x600/6.jpg';
import GridMaterial from '../../../components/GridMaterial';
import wallTextureauto from '/assets/tiles/600x600/6.jpg';
import WallMaterial from '../../../components/WallMaterial';

export function BathRoomModel1(props) {
  const { nodes, materials } = useGLTF(
    '/assets/GLBModel/modern_bathroom (1).glb'
  );
  const texture = useTexture(props.selectedImage || floorTexture1);
  const texture2 = useTexture(props.selectedImage2 || floorTexture1);
  const wallTexture1 = useTexture(props.selectedWallImage || wallTextureauto);
  const wallTexture2 = useTexture(props.selectedWallImage2 || wallTextureauto);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.488}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[2.016, 0, 0]}
            rotation={[-Math.PI / 2, 0, Math.PI]}
            scale={[297, 330, 23.76]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_SideWalls_0.geometry}
              material={materials.SideWalls}
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
              geometry={nodes.Bathroom_WindowTrim_0.geometry}
              material={materials.WindowTrim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_BackWall_0.geometry}
              material={materials.BackWall}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_SkirtingBoard_0.geometry}
              material={materials.SkirtingBoard}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_Light_0.geometry}
              material={materials.Light}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_MirrorTrim_0.geometry}
              material={materials.MirrorTrim}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_MirrorLight_0.geometry}
              material={materials.MirrorLight}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_Mirror_0.geometry}
              material={materials.Mirror}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_Cabinet_0.geometry}
              material={materials.Cabinet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_Toilet_0.geometry}
              material={materials.Toilet}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_Floor_0.geometry}
              material={materials.Floor}
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
              geometry={nodes.Bathroom_ToiletRolls_0.geometry}
              material={materials.ToiletRolls}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_ToiletFlushButton_0.geometry}
              material={materials.ToiletFlushButton}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_ToiletRoll_0.geometry}
              material={materials.ToiletRoll}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_ToiletRug_0.geometry}
              material={materials.ToiletRug}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_Bottles_0.geometry}
              material={materials.Bottles}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_Chrome_0.geometry}
              material={materials.Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_WindowLight_0.geometry}
              material={materials.WindowLight}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_PictureFrame_0.geometry}
              material={materials.PictureFrame}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bathroom_Picture_0.geometry}
              material={materials.Picture}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tree_Tree_0.geometry}
              material={materials.Tree}
              position={[-0.782, 0.769, -0.031]}
              scale={[0.15, 0.177, 3.406]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plants_TopPlants_0.geometry}
              material={materials.TopPlants}
              position={[0.313, 1.117, 12.415]}
              rotation={[0, 0, -3.054]}
              scale={[0.052, 0.047, 0.653]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/GLBModel/modern_bathroom (1).glb');
