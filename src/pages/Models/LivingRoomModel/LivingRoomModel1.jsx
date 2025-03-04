import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import floorTexture1 from '/assets/tiles/600x600/6.jpg';
import GridMaterial from '../../../components/GridMaterial';
import wallTextureauto from '/assets/tiles/600x600/6.jpg';
import WallMaterial from '../../../components/WallMaterial';

export function LivingRoomModel1(props) {
  const { nodes, materials } = useGLTF('/assets/GLBModel/LivingRoom1.glb');
  const texture = useTexture(props.selectedImage || floorTexture1);
  const texture2 = useTexture(props.selectedImage2 || floorTexture1);
  const wallTexture1 = useTexture(props.selectedWallImage || wallTextureauto);
  const wallTexture2 = useTexture(props.selectedWallImage2 || wallTextureauto);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chair_Material010_0.geometry}
        material={materials['Material.010']}
        position={[-0.527, 0.087, -2.173]}
        rotation={[-Math.PI / 2, 0, -0.768]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube034_Fabric001_0.geometry}
        material={materials['Fabric.001']}
        position={[-0.527, 0.087, -2.173]}
        rotation={[-0.121, -0.765, 3.058]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube036_Material002_0.geometry}
        material={materials['Material.003']}
        position={[-0.527, 0.087, -2.173]}
        rotation={[-1.691, 0.115, -0.761]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Material012_0.geometry}
        material={materials['Material.012']}
        position={[-0.527, 0.087, -2.173]}
        rotation={[-Math.PI / 2, 0, -0.768]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_Old_Wood_procedural_2_0.geometry}
        material={materials.Old_Wood_procedural_2}
        position={[-2.56, 1.023, -2.943]}
        rotation={[-2.61, -0.462, -1.315]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002__0.geometry}
        material={materials['Cube.008__0']}
        position={[-2.594, 1.318, -2.835]}
        rotation={[-0.496, -0.31, 1.407]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005_Leather_Fabric_01_0.geometry}
        material={materials.Leather_Fabric_01}
        position={[-2.563, 1.363, -2.933]}
        rotation={[-Math.PI / 2, 0, -0.829]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006_Metal_scratched_0.geometry}
        material={materials.Metal_scratched}
        position={[-2.563, 1.363, -2.933]}
        rotation={[-Math.PI / 2, 0, -0.829]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Material_0.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
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
        geometry={nodes.Cube007_Material023_0.geometry}
        material={materials['Material.023']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019_Birch_Wood_Flooring__English_0.geometry}
        material={materials.Birch_Wood_Flooring__English}
        position={[-0.321, 1.56, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[2.273, 4.554, 1.5]}
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
        geometry={nodes.Cube021_Material009_0.geometry}
        material={materials['Material.009']}
        position={[-0.999, 0.333, -0.539]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CURTAIN_2008_Material001_0.geometry}
        material={materials['Material.002']}
        position={[0.416, 1.537, -4.128]}
        scale={[0.887, 1.411, 1.411]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_Matt_paint_black_0.geometry}
        material={materials.Matt_paint_black}
        position={[0.446, 3.057, -4.131]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008_Matt_paint_white_0.geometry}
        material={materials.Matt_paint_white}
        position={[0.446, 3.057, -4.131]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.411}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_book_cover003_0.geometry}
        material={materials['book_cover.003']}
        position={[-1.103, 0.374, -0.51]}
        rotation={[-1.593, 0.01, 3.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017_stacked_paper004_0.geometry}
        material={materials['stacked_paper.004']}
        position={[-1.103, 0.374, -0.51]}
        rotation={[-1.593, 0.01, 3.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Flamme_Lampion_-_Flamme_0'].geometry}
        material={materials.Matt_paint_white}
        position={[-0.818, 0.407, -0.198]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Leather_Sofa_Fabric002_0.geometry}
        material={materials['Fabric.002']}
        position={[-2.491, 0.096, -0.906]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={[1.196, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['M��che_Lampion_-_m��che_0'].geometry}
        material={materials['Lampion_-_mche']}
        position={[-0.818, 0.4, -0.198]}
        rotation={[-Math.PI / 2, -0.303, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath_Material008_0.geometry}
        material={materials['Material.008']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath012_Metal08_PBR_0.geometry}
        material={materials.Metal_scratched}
        position={[-2.563, 1.092, -2.935]}
        rotation={[-2.945, -0.472, -1.481]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pillow_migramah_Tecido_0.geometry}
        material={materials.Tecido}
        position={[-0.438, 0.697, -2.05]}
        rotation={[-0.567, -0.506, -3.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Material021_0.geometry}
        material={materials['Material.021']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Radiator002_Bras001_0.geometry}
        material={materials['Bras.001']}
        position={[0.129, 0.067, -4.479]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.172}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Radiator002_Heater_Paint001_0.geometry}
        material={materials['Heater_Paint.001']}
        position={[0.129, 0.067, -4.479]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.172}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Radiator002_MEtal001_0.geometry}
        material={materials['MEtal.001']}
        position={[0.129, 0.067, -4.479]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.172}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Radiator002_Plastic001_0.geometry}
        material={materials['Plastic.001']}
        position={[0.129, 0.067, -4.479]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.172}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Round_Towel_Hanger_2_Round_Towel_Hanger_Fabric_0.geometry
        }
        material={materials.Round_Towel_Hanger_Fabric}
        position={[-0.725, 0.319, 0.739]}
        rotation={[-0.084, 0.677, 0.056]}
        scale={1.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SM_Jug_of_flowers_A001_Material007_0.geometry}
        material={materials['Material.007']}
        position={[-1.086, 0.616, -0.922]}
        rotation={[-1.547, 0.42, -3.139]}
        scale={[1.576, 1.263, 2.462]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_Material003_0.geometry}
        material={materials['Material.004']}
        position={[-1.087, 0.416, -0.909]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.431, 1.431, 1.212]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001_Leather_Fabric_01002_0.geometry}
        material={materials['Leather_Fabric_01.002']}
        position={[-0.392, 2.398, -0.901]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.316, 0.316, 0.161]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Straw_basket-02_rattan_0'].geometry}
        material={materials.rattan}
        position={[-0.823, 0.087, 0.62]}
        rotation={[-Math.PI / 2, 0, 0.608]}
        scale={1.576}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.defaultMaterial.geometry}
        material={materials['02___Default']}
        position={[2.454, 1.113, -0.843]}
        rotation={[-0.325, -1.542, -0.329]}
        scale={0.995}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.COU0001_Couch}
        position={[1.771, 0.059, 1.99]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </group>
  );
}

useGLTF.preload('/assets/GLBModel/LivingRoom1.glb');
