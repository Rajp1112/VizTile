import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import floorTexture1 from '/assets/tiles/600x600/6.jpg';
import GridMaterial from '../../../components/GridMaterial';
import wallTextureauto from '/assets/tiles/600x600/6.jpg';
import WallMaterial from '../../../components/WallMaterial';
export function BathRoomModel2(props) {
  const { nodes, materials } = useGLTF('/assets/GLBModel/B2.glb');
  const texture = useTexture(props.selectedImage || floorTexture1);
  const texture2 = useTexture(props.selectedImage2 || floorTexture1);
  const wallTexture1 = useTexture(props.selectedWallImage || wallTextureauto);
  const wallTexture2 = useTexture(props.selectedWallImage2 || wallTextureauto);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.PlantSucculentEcheveria001_PlantSucculentEcheveria001_2K_0
            .geometry
        }
        material={materials.PlantSucculentEcheveria001_2K}
        position={[-2.617, 2.171, -5.919]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005_Plant_Leaf_0.geometry}
        material={materials.Plant_Leaf}
        position={[-4.134, 2.185, -5.904]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.345}
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
        geometry={nodes.IVY_Curve004_Plant_Stem_0.geometry}
        material={materials.Plant_Stem}
        position={[-4.134, 2.185, -5.904]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.345}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012_Plant_Pot_0.geometry}
        material={materials.Plant_Pot}
        position={[-4.127, 2.185, -5.904]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.345}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle012_Plant_Soil_0.geometry}
        material={materials.Plant_Soil}
        position={[-4.127, 2.185, -5.904]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.345}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_Plant_Stem001_0.geometry}
        material={materials['Plant_Stem.001']}
        position={[-3.45, 2.326, -6.252]}
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
        geometry={nodes.Circle014_Plant_Leaf001_0.geometry}
        material={materials['Plant_Leaf.001']}
        position={[-4.568, 2.249, -5.904]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Round_Towel_Hanger_2_Round_Towel_Hanger_Metal_0.geometry
        }
        material={materials.Round_Towel_Hanger_Metal}
        position={[-5.569, 3.258, -3.24]}
        rotation={[0, Math.PI / 2, 0]}
        scale={2.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Round_Towel_Hanger_2_Round_Towel_Hanger_Fabric_0.geometry
        }
        material={materials.Round_Towel_Hanger_Fabric}
        position={[-5.569, 3.258, -3.24]}
        rotation={[0, Math.PI / 2, 0]}
        scale={2.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022_Material003_0.geometry}
        material={materials['Material.003']}
        position={[-2.816, 2.119, -4.332]}
        rotation={[1.567, 0.013, -2.836]}
        scale={0.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sansevieriapot_Material006_0.geometry}
        material={materials['Material.006']}
        position={[-4.867, 0.107, -3.496]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.829}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sansevieriaplant_Material013_0.geometry}
        material={materials['Material.013']}
        position={[-4.867, 1.789, -3.496]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.829}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sansevieriagravel_Material005_0.geometry}
        material={materials['Material.005']}
        position={[-4.867, 1.296, -3.496]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.829}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cube_wall-dec_0'].geometry}
        material={materials['wall-dec']}
        position={[0, 0.078, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[5.569, 5.569, 2.6]}
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
        geometry={nodes.Cube_Ceramic_Holes_Dents_0.geometry}
        material={materials.Ceramic_Holes_Dents}
        position={[0, 0.078, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[5.569, 5.569, 2.6]}
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
        geometry={nodes['Cube_window-glass_0'].geometry}
        material={materials['window-glass']}
        position={[0, 0.078, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[5.569, 5.569, 2.6]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cube001_���������4_0'].geometry}
        material={materials.material}
        position={[-5.073, 1.747, -5.817]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.422}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Marble_0.geometry}
        material={materials.Marble}
        position={[-3.981, 0.747, -4.708]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[2.114, 1.208, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003__0.geometry}
        material={materials['Cube.003__0']}
        position={[-5.283, 0.286, -5.188]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.412}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cube005_shower-glass_0'].geometry}
        material={materials['shower-glass']}
        position={[-11.207, 0.233, -2.556]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.412}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet1_Ash_Wood_0.geometry}
        material={materials.Ash_Wood}
        position={[-5.551, 0.357, 3.357]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008_Walnut_0.geometry}
        material={materials.Walnut}
        position={[-2.521, 0.903, -4.004]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_mirror_0.geometry}
        material={materials.mirror}
        position={[-4.247, 3.746, -1.257]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.883}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010_mirror1_0.geometry}
        material={materials.mirror1}
        position={[-4.247, 3.746, 2.493]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.883}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013_Material010_0.geometry}
        material={materials['Material.010']}
        position={[-5.21, 1.927, -0.839]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013_Material009_0.geometry}
        material={materials['Material.009']}
        position={[-5.21, 1.927, -0.839]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015_Material011_0.geometry}
        material={materials['Material.011']}
        position={[-5.21, 1.927, -0.606]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015_Material007_0.geometry}
        material={materials['Material.007']}
        position={[-5.21, 1.927, -0.606]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle008_Marble_0.geometry}
        material={materials.Marble}
        position={[-5.17, 1.921, 0.502]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_carpet_0.geometry}
        material={materials.carpet}
        position={[-2.645, 0.069, 0.221]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.822}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Plane001_���������1_0'].geometry}
        material={materials.material_39}
        position={[-2.645, 0.085, -0.296]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-6.18}
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
        geometry={nodes.IVY_Curve_Ivy_stem_0.geometry}
        material={materials.Ivy_stem}
        position={[0, 0.078, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IvyLeaf_ivy_leaf_0.geometry}
        material={materials.ivy_leaf}
        position={[0, 0.078, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle010_������12_0'].geometry}
        material={materials.material_29}
        position={[-3.589, 1.572, -5.65]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube024_Material002_0.geometry}
        material={materials['Material.002']}
        position={[-0.918, 2.714, -3.116]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.172, 0.172, 0.204]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.PlantSucculentEcheveria001_pot_PlantSucculentEcheveria001_2
            .geometry
        }
        material={materials.PlantSucculentEcheveria001_2K}
        position={[-4.562, 2.171, -5.919]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.PlantSucculentEcheveria001_pot_PlantSucculentEcheveria001_2K_0
            .geometry
        }
        material={materials.PlantSucculentEcheveria001_2K}
        position={[-2.617, 2.171, -5.919]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.PlantSucculentEcheveria001_pot_PlantSucculentEcheveria001_2001
            .geometry
        }
        material={materials.PlantSucculentEcheveria001_2K}
        position={[-2.617, 2.171, -5.919]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.PlantSucculentEcheveria001_pot_PlantSucculentEcheveria001_2002
            .geometry
        }
        material={materials.PlantSucculentEcheveria001_2K}
        position={[-4.562, 2.171, -5.919]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2.313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_light_bulb_40Watts_LED_Bulb_0.geometry}
        material={materials.Plant_Soil}
        position={[-5.183, 4.433, -3.226]}
        rotation={[Math.PI / 2, 1.334, Math.PI]}
        scale={2.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_light_bulb_40Watts_LED_Bulb_0001.geometry}
        material={materials.Plant_Soil}
        position={[-5.183, 4.433, 3.685]}
        rotation={[Math.PI / 2, 1.334, Math.PI]}
        scale={2.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_light_bulb_40Watts_matte_plastic__0.geometry}
        material={materials.matte_plastic}
        position={[-5.183, 4.433, -3.226]}
        rotation={[Math.PI / 2, 1.334, Math.PI]}
        scale={2.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_light_bulb_40Watts_matte_plastic__0001.geometry}
        material={materials.matte_plastic}
        position={[-5.183, 4.433, 3.685]}
        rotation={[Math.PI / 2, 1.334, Math.PI]}
        scale={2.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_light_bulb_40Watts_Base_0.geometry}
        material={materials.Round_Towel_Hanger_Metal}
        position={[-5.183, 4.433, -3.226]}
        rotation={[Math.PI / 2, 1.334, Math.PI]}
        scale={2.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_light_bulb_40Watts_Base_0001.geometry}
        material={materials.Round_Towel_Hanger_Metal}
        position={[-5.183, 4.433, 3.685]}
        rotation={[Math.PI / 2, 1.334, Math.PI]}
        scale={2.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_light_bulb_40Watts_Steel001_0.geometry}
        material={materials['Steel.001']}
        position={[-5.183, 4.433, -3.226]}
        rotation={[Math.PI / 2, 1.334, Math.PI]}
        scale={2.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Led_light_bulb_40Watts_Steel001_0001.geometry}
        material={materials['Steel.001']}
        position={[-5.183, 4.433, 3.685]}
        rotation={[Math.PI / 2, 1.334, Math.PI]}
        scale={2.064}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet2_Ash_Wood_0.geometry}
        material={materials.Ash_Wood}
        position={[-5.551, 0.357, 2.107]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet2_Ash_Wood_0001.geometry}
        material={materials.Ash_Wood}
        position={[-5.551, 0.357, 0.857]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet2_Ash_Wood_0002.geometry}
        material={materials.Ash_Wood}
        position={[-5.551, 0.357, -0.393]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={2.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet5_Door_Ash_Wood_0.geometry}
        material={materials.Ash_Wood}
        position={[-4.332, 0.402, -2.847]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet5_Door_Ash_Wood_0001.geometry}
        material={materials.Ash_Wood}
        position={[-4.332, 0.402, -1.596]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet5_Door_Ash_Wood_0002.geometry}
        material={materials.Ash_Wood}
        position={[-4.332, 0.402, 0.906]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cabinet5_Door_Ash_Wood_0003.geometry}
        material={materials.Ash_Wood}
        position={[-4.332, 0.402, 2.156]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_Ash_Wood_0.geometry}
        material={materials.Ash_Wood}
        position={[-4.247, 3.746, -1.257]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.883}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_Ash_Wood_0001.geometry}
        material={materials.Ash_Wood}
        position={[-4.247, 3.746, 2.493]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.883}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_Ceramic_Dots_0.geometry}
        material={materials.Ceramic_Dots}
        position={[-5.131, 2.172, -1.774]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 1.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011_Ceramic_Dots_0001.geometry}
        material={materials.Ceramic_Dots}
        position={[-5.131, 2.172, 1.982]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1, 1, 1.135]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle_������12_0'].geometry}
        material={materials.material_29}
        position={[-5.333, 2.076, -1.321]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle_������12_0001'].geometry}
        material={materials.material_29}
        position={[-5.333, 2.076, -1.985]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle_������12_0002'].geometry}
        material={materials.material_29}
        position={[-5.333, 2.076, 2.428]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle_������12_0003'].geometry}
        material={materials.material_29}
        position={[-5.333, 2.076, 1.764]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle002_������12_0'].geometry}
        material={materials.material_29}
        position={[-5.333, 2.076, -1.652]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle002_������12_0001'].geometry}
        material={materials.material_29}
        position={[-5.333, 2.076, 2.097]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle006_������31_0'].geometry}
        material={materials.material_30}
        position={[-4.96, 4.504, -3.226]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle006_������31_0001'].geometry}
        material={materials.material_30}
        position={[-4.96, 4.504, 3.684]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Sphere_shower-glass_0'].geometry}
        material={materials['shower-glass']}
        position={[-5.16, 4.25, -3.226]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Sphere_shower-glass_0001'].geometry}
        material={materials['shower-glass']}
        position={[-5.16, 4.25, 3.684]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013_Material014_0.geometry}
        material={materials['Material.014']}
        position={[-5.21, 1.927, -0.839]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013_Material014_0001.geometry}
        material={materials['Material.014']}
        position={[-5.21, 1.927, -0.606]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Material008_0.geometry}
        material={materials['Material.008']}
        position={[-5.326, 2.286, -0.655]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_Material008_0001.geometry}
        material={materials['Material.008']}
        position={[-5.326, 2.286, -0.422]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Material002_0.geometry}
        material={materials['Material.002']}
        position={[-4.297, 1.393, -1.73]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.136, 0.136, 0.162]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Material002_0001.geometry}
        material={materials['Material.002']}
        position={[-4.297, 1.393, -1.536]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.136, 0.136, 0.162]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Material002_0002.geometry}
        material={materials['Material.002']}
        position={[-4.297, 1.393, 2.025]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.136, 0.136, 0.162]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Material002_0003.geometry}
        material={materials['Material.002']}
        position={[-4.297, 1.393, 2.218]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.136, 0.136, 0.162]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Material002_0004.geometry}
        material={materials['Material.002']}
        position={[-4.297, 1.475, 0.273]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.136, 0.136, 0.162]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016_Material002_0005.geometry}
        material={materials['Material.002']}
        position={[-4.297, 0.742, 0.273]}
        rotation={[Math.PI, 0, 0]}
        scale={[0.136, 0.136, 0.162]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.176, 2.007, 0.509]}
        rotation={[2.448, -0.115, -3.022]}
        scale={0.871}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.28, 2.622, 0.282]}
        rotation={[0.355, 0.996, -0.321]}
        scale={2.39}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.124, 2.144, 0.508]}
        rotation={[2.781, -0.159, -3.104]}
        scale={1.051}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.352, 2.558, 0.587]}
        rotation={[2.847, 0.497, 2.775]}
        scale={1.858}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.002, 2.629, 0.432]}
        rotation={[2.14, 1.51, -2.184]}
        scale={2.627}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.342, 2.592, 0.383]}
        rotation={[2.822, 0.527, 2.934]}
        scale={2.32}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.103, 2.63, 0.316]}
        rotation={[2.832, 0.76, -2.966]}
        scale={2.423}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-5.143, 2.479, 0.355]}
        rotation={[3.032, -0.71, 1.823]}
        scale={0.871}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.906, 2.642, 0.519]}
        rotation={[0.425, -1.306, 0.329]}
        scale={0.838}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-4.883, 2.519, 0.576]}
        rotation={[-2.854, -1.346, -2.945]}
        scale={1.236}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.162, 2.646, 0.419]}
        rotation={[2.932, 0.111, 3.021]}
        scale={1.701}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.066, 2.5, 0.336]}
        rotation={[2.387, 0.592, -3.004]}
        scale={0.911}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-5.32, 2.575, 0.605]}
        rotation={[2.823, 0.328, 3.132]}
        scale={0.888}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-4.933, 2.55, 0.723]}
        rotation={[0.896, -0.263, -0.05]}
        scale={2.184}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.105, 2.687, 0.276]}
        rotation={[2.069, 0.971, -2.263]}
        scale={2.445}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-5.28, 2.593, 0.286]}
        rotation={[2.291, 1.055, -2.704]}
        scale={2.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-4.885, 2.64, 0.626]}
        rotation={[2.849, -1.344, 2.743]}
        scale={2.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-5.184, 2.661, 0.667]}
        rotation={[0.132, 0.151, -0.113]}
        scale={2.671}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-4.918, 2.654, 0.613]}
        rotation={[1.462, -1.304, 1.487]}
        scale={1.86}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.393, 2.61, 0.236]}
        rotation={[-0.165, 0.678, 0.041]}
        scale={2.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.19, 2.706, 0.337]}
        rotation={[2.84, -0.39, 3.089]}
        scale={2.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.045, 2.582, 0.686]}
        rotation={[0.395, -0.508, 0.365]}
        scale={2.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.324, 2.504, 0.203]}
        rotation={[1.393, 1.394, -2.101]}
        scale={2.628}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.428, 2.655, 0.444]}
        rotation={[2.674, -0.09, 2.784]}
        scale={2.052}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.238, 2.715, 0.285]}
        rotation={[2.414, 0.616, -2.663]}
        scale={0.892}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-5.004, 2.615, 0.455]}
        rotation={[1.963, -1.027, 2.063]}
        scale={1.972}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.183, 2.676, 0.305]}
        rotation={[2.431, 0.702, -2.581]}
        scale={1.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.271, 2.583, 0.298]}
        rotation={[0.314, 0.944, -0.304]}
        scale={2.407}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.152, 2.687, 0.666]}
        rotation={[0.458, -0.473, 0.373]}
        scale={1.441}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-5.382, 2.497, 0.24]}
        rotation={[2.359, 0.674, -3.113]}
        scale={2.154}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-4.947, 2.659, 0.277]}
        rotation={[0.157, -0.351, 0.07]}
        scale={1.539}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.326, 2.622, 0.59]}
        rotation={[0.411, -0.801, 0.217]}
        scale={1.416}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.186, 2.419, 0.017]}
        rotation={[-0.003, 0.298, -0.123]}
        scale={1.145}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5.211, 2.634, 0.274]}
        rotation={[0.236, 0.462, -0.15]}
        scale={1.454}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.997, 2.679, 0.542]}
        rotation={[1.292, -1.011, 1.378]}
        scale={1.976}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-4.964, 2.58, 0.557]}
        rotation={[0.259, -0.908, -0.214]}
        scale={1.294}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.388, 2.582, 0.317]}
        rotation={[1.469, -0.95, 1.882]}
        scale={1.634}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-5.113, 2.552, 0.314]}
        rotation={[0.576, -0.271, 0.395]}
        scale={2.044}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-4.966, 2.663, 0.638]}
        rotation={[2.855, -0.436, 2.833]}
        scale={2.113}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-4.893, 2.567, 0.547]}
        rotation={[0.319, -0.747, -0.583]}
        scale={1.726}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-5.003, 2.602, 0.61]}
        rotation={[2.762, 0.663, -3.08]}
        scale={1.963}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-5.123, 2.567, 0.219]}
        rotation={[-0.119, -0.285, -0.06]}
        scale={0.787}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-4.97, 2.724, 0.521]}
        rotation={[1.775, -1.13, 1.809]}
        scale={2.603}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-5.108, 2.62, 0.3]}
        rotation={[0.392, 0.734, -0.151]}
        scale={2.65}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-5, 2.611, 0.386]}
        rotation={[0.159, -0.317, 0.119]}
        scale={1.026}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-4.971, 2.688, 0.405]}
        rotation={[1.899, -1.205, 1.698]}
        scale={2.547}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-5.133, 2.661, 0.455]}
        rotation={[-3.117, 1.001, -3.141]}
        scale={1.662}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-4.965, 2.672, 0.492]}
        rotation={[0.532, 0.108, -0.11]}
        scale={2.397}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.307, 2.625, 0.191]}
        rotation={[0.017, 0.882, -0.005]}
        scale={2.203}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-5.301, 2.579, 0.224]}
        rotation={[1.083, 1.308, -1.944]}
        scale={0.963}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.015, 2.474, 0.686]}
        rotation={[-2.819, -0.53, -2.948]}
        scale={1.368}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-5.216, 2.588, 0.734]}
        rotation={[-3.05, 0.454, 3.075]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.019, 2.576, 0.435]}
        rotation={[3.08, 0.618, -3.118]}
        scale={0.903}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.302, 2.49, 0.168]}
        rotation={[-0.325, -0.092, 0.05]}
        scale={0.848}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.334, 2.493, 0.38]}
        rotation={[0.239, 0.396, -0.191]}
        scale={1.875}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-5.003, 2.705, 0.215]}
        rotation={[0.161, -0.435, -0.065]}
        scale={0.89}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-4.85, 2.643, 0.604]}
        rotation={[-0.073, -0.813, -0.247]}
        scale={0.785}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.176, 2.685, 0.252]}
        rotation={[1.777, 1.089, -2.024]}
        scale={2.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-5.026, 2.668, 0.289]}
        rotation={[0.393, -0.895, 0.121]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-5.078, 2.698, 0.301]}
        rotation={[0.613, -0.593, 0.3]}
        scale={1.835}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-5.396, 2.39, 0.23]}
        rotation={[-0.1, 0.836, 0.026]}
        scale={1.72}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.206, 2.589, 0.71]}
        rotation={[2.508, 0.55, -2.865]}
        scale={2.151}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-5.02, 2.613, 0.625]}
        rotation={[1.455, 1.135, -1.208]}
        scale={0.781}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.072, 2.481, 0.761]}
        rotation={[2.219, -1.398, 1.523]}
        scale={1.51}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-5.063, 2.643, 0.347]}
        rotation={[2.797, -0.622, 2.665]}
        scale={0.886}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-5.168, 2.689, 0.399]}
        rotation={[1.861, -1.145, 1.643]}
        scale={1.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-5.042, 2.655, 0.521]}
        rotation={[0.273, 0.502, -0.298]}
        scale={2.396}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.01, 2.655, 0.661]}
        rotation={[0.689, 0.852, -0.443]}
        scale={0.905}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.164, 2.673, 0.425]}
        rotation={[3.096, 0.116, 3.026]}
        scale={1.536}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.341, 2.473, 0.348]}
        rotation={[-0.246, 0.682, 0.178]}
        scale={1.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.152, 2.658, 0.334]}
        rotation={[2.861, 0.179, 3.044]}
        scale={2.461}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.122, 2.555, 0.434]}
        rotation={[3.134, 0.13, 3.085]}
        scale={1.892}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-5.144, 2.507, 0.85]}
        rotation={[-3.09, -0.604, 3.084]}
        scale={1.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-4.987, 2.503, 0.398]}
        rotation={[0.19, -1.126, 0.163]}
        scale={1.428}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-5.04, 2.616, 0.477]}
        rotation={[2.736, 0.286, 3.019]}
        scale={1.065}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.303, 2.679, 0.307]}
        rotation={[1.995, 1.231, -2.362]}
        scale={1.605}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.074, 2.545, 0.237]}
        rotation={[1.561, 0.895, -1.795]}
        scale={1.536}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-5.128, 2.713, 0.34]}
        rotation={[2.63, 0.729, -2.969]}
        scale={2.557}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.031, 2.656, 0.568]}
        rotation={[2.759, 0.819, 3.111]}
        scale={1.491}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.084, 2.558, 0.331]}
        rotation={[1.419, -1.171, 1.288]}
        scale={1.326}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.293, 2.602, 0.225]}
        rotation={[-0.106, 0.887, 0.073]}
        scale={1.693}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.083, 2.605, 0.359]}
        rotation={[1.978, -1.268, 2.33]}
        scale={0.879}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.392, 2.611, 0.456]}
        rotation={[1.972, 1.203, -1.946]}
        scale={2.342}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.444, 2.516, 0.653]}
        rotation={[-2.942, 0.521, 2.746]}
        scale={2.51}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-5.425, 2.699, 0.34]}
        rotation={[0.24, 0.681, -0.29]}
        scale={2.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-4.897, 2.672, 0.404]}
        rotation={[0.476, 0.09, -0.438]}
        scale={2.338}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-4.928, 2.647, 0.504]}
        rotation={[0.551, -1.053, 0.495]}
        scale={0.904}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.334, 2.664, 0.391]}
        rotation={[2.673, -1.04, 2.845]}
        scale={1.143}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.408, 2.646, 0.535]}
        rotation={[2.838, 0.341, -2.917]}
        scale={1.77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-5.521, 2.559, 0.366]}
        rotation={[1.252, -0.491, 1.915]}
        scale={1.355}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-5.052, 2.5, 0.542]}
        rotation={[-1.142, 1.105, 0.975]}
        scale={2.293}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-5.18, 2.475, 0.315]}
        rotation={[-0.759, 0.038, -0.37]}
        scale={0.79}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.012, 2.587, 0.596]}
        rotation={[2.602, -0.021, 2.917]}
        scale={0.887}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.259, 2.571, 0.684]}
        rotation={[0.771, -0.453, 0.201]}
        scale={2.449}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.294, 2.583, 0.293]}
        rotation={[2.486, 0.821, -2.949]}
        scale={1.753}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-4.99, 2.616, 0.682]}
        rotation={[2.339, -1.125, 2.485]}
        scale={1.564}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.276, 2.684, 0.325]}
        rotation={[0.466, 0.608, -0.403]}
        scale={1.921}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.284, 2.664, 0.408]}
        rotation={[1.667, -1.326, 1.676]}
        scale={1.071}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.333, 2.703, 0.313]}
        rotation={[2.532, 0.672, -2.889]}
        scale={1.263}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.364, 2.696, 0.569]}
        rotation={[2.686, -0.758, 2.958]}
        scale={1.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.434, 2.639, 0.661]}
        rotation={[3.126, 0.608, 3.081]}
        scale={2.704}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-5.143, 2.602, 0.361]}
        rotation={[1.254, -0.89, 1.137]}
        scale={1.95}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.045, 2.405, 0.707]}
        rotation={[-0.161, -1.484, -0.156]}
        scale={1.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.122, 2.499, 0.33]}
        rotation={[1.167, 0.351, 0.382]}
        scale={1.352}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.366, 2.635, 0.564]}
        rotation={[2.212, 1.121, -2.517]}
        scale={1.719}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.434, 2.669, 0.42]}
        rotation={[0.311, 0.52, -0.32]}
        scale={1.498}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.268, 2.647, 0.481]}
        rotation={[0.415, -0.931, 0.357]}
        scale={1.762}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.309, 2.683, 0.293]}
        rotation={[2.469, 0.619, -2.892]}
        scale={1.025}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.258, 2.676, 0.309]}
        rotation={[1.899, 1.091, -2.174]}
        scale={1.682}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.086, 2.496, 0.194]}
        rotation={[-0.148, -0.078, -0.056]}
        scale={2.591}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.362, 2.572, 0.566]}
        rotation={[2.835, 0.098, -3.051]}
        scale={2.632}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf008|Dupli|_Ivy_leaf_0111'].geometry}
        material={materials.Plant_Soil}
        position={[-5.241, 2.52, 0.372]}
        rotation={[1.392, -1.296, 1.539]}
        scale={2.553}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.167, 2.064, 0.471]}
        rotation={[1.997, -1.036, 2.208]}
        scale={0.844}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.321, 2.617, 0.246]}
        rotation={[2.382, 0.84, -2.868]}
        scale={0.856}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.122, 2.144, 0.532]}
        rotation={[0.704, -1.075, 0.8]}
        scale={0.824}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.386, 2.524, 0.558]}
        rotation={[2.926, 0.593, -2.976]}
        scale={1.844}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.013, 2.651, 0.451]}
        rotation={[2.793, -0.005, 2.734]}
        scale={2.477}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.403, 2.534, 0.453]}
        rotation={[-0.342, 0.915, 0.346]}
        scale={2.202}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.103, 2.624, 0.293]}
        rotation={[0.293, -0.632, 0.028]}
        scale={1.481}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-5.219, 2.583, 0.323]}
        rotation={[3.122, 0.066, 3.059]}
        scale={1.073}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.918, 2.644, 0.535]}
        rotation={[0.317, -0.535, -0.321]}
        scale={2.555}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-5.012, 2.583, 0.39]}
        rotation={[2.724, -0.252, 2.353]}
        scale={0.915}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.167, 2.576, 0.41]}
        rotation={[0.963, -0.818, 0.464]}
        scale={1.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.182, 2.612, 0.636]}
        rotation={[0.923, 1.192, -1.501]}
        scale={0.839}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-5.311, 2.528, 0.568]}
        rotation={[1.357, 0.551, -2.026]}
        scale={0.903}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-4.919, 2.517, 0.683]}
        rotation={[0.61, -0.907, -0.266]}
        scale={1.484}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.116, 2.66, 0.352]}
        rotation={[2.518, 0.568, -2.976]}
        scale={1.912}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-5.292, 2.575, 0.301]}
        rotation={[2.459, 0.905, -3.134]}
        scale={2.416}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-4.87, 2.635, 0.651]}
        rotation={[0.485, -0.072, -0.334]}
        scale={1.327}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-5.189, 2.654, 0.687]}
        rotation={[0.225, 0.673, -0.105]}
        scale={2.175}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-4.893, 2.641, 0.648]}
        rotation={[0.504, -0.035, -0.206]}
        scale={1.862}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.42, 2.572, 0.193]}
        rotation={[-1.209, 1.514, 0.976]}
        scale={2.616}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.219, 2.713, 0.359]}
        rotation={[0.712, -0.922, 0.701]}
        scale={1.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.091, 2.616, 0.727]}
        rotation={[2.958, -0.811, 3.075]}
        scale={1.472}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.394, 2.418, 0.189]}
        rotation={[2.134, 0.731, -2.92]}
        scale={1.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.416, 2.623, 0.379]}
        rotation={[-0.063, 0.67, -0.014]}
        scale={0.935}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.208, 2.686, 0.26]}
        rotation={[2.483, 0.758, -2.675]}
        scale={2.591}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-4.941, 2.586, 0.481]}
        rotation={[2.583, -0.619, 2.647]}
        scale={0.93}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.27, 2.662, 0.308]}
        rotation={[1.84, 1.099, -1.949]}
        scale={1.868}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.377, 2.532, 0.249]}
        rotation={[-0.111, 0.887, -0.042]}
        scale={2.538}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.18, 2.669, 0.638]}
        rotation={[1.059, 1.019, -1.075]}
        scale={1.113}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-5.382, 2.453, 0.199]}
        rotation={[-0.123, 1.155, -0.071]}
        scale={0.793}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-4.902, 2.63, 0.258]}
        rotation={[0.038, -0.338, 0.017]}
        scale={0.78}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.357, 2.578, 0.567]}
        rotation={[1.262, 1.221, -1.211]}
        scale={1.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.156, 2.377, -0.011]}
        rotation={[-0.202, -0.466, -0.026]}
        scale={0.826}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5.276, 2.615, 0.269]}
        rotation={[0.223, 0.252, -0.071]}
        scale={2.723}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.955, 2.699, 0.551]}
        rotation={[0.48, 0.427, -0.161]}
        scale={2.534}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-4.991, 2.553, 0.542]}
        rotation={[0.364, 0.577, -0.012]}
        scale={1.33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.405, 2.545, 0.336]}
        rotation={[-0.356, 0.477, 0.207]}
        scale={1.123}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-5.141, 2.521, 0.34]}
        rotation={[-2.806, 0.654, 3.088]}
        scale={2.519}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-4.993, 2.668, 0.654]}
        rotation={[2.657, -1.017, 2.719]}
        scale={1.601}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-4.928, 2.533, 0.495]}
        rotation={[-2.722, -1.154, -2.702]}
        scale={2.466}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-4.973, 2.575, 0.618]}
        rotation={[3.055, -1.078, 2.93]}
        scale={2.552}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-5.111, 2.539, 0.258]}
        rotation={[-0.31, -0.345, -0.083]}
        scale={0.847}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-4.986, 2.736, 0.503]}
        rotation={[0.528, -0.371, 0.271]}
        scale={1.814}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-5.166, 2.614, 0.259]}
        rotation={[0.181, -0.236, -0.065]}
        scale={0.978}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-5, 2.617, 0.352]}
        rotation={[1.344, 0.949, -1.239]}
        scale={2.317}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-4.927, 2.674, 0.393]}
        rotation={[1.226, -1.344, 1.143]}
        scale={1.185}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-5.119, 2.678, 0.43]}
        rotation={[2.47, -0.801, 2.266]}
        scale={0.936}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-4.902, 2.647, 0.509]}
        rotation={[2.43, -1.259, 2.343]}
        scale={2.553}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.275, 2.599, 0.182]}
        rotation={[-0.04, 0.865, -0.029]}
        scale={2.59}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-5.287, 2.505, 0.297]}
        rotation={[2.078, -0.54, 2.958]}
        scale={1.705}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.013, 2.459, 0.659]}
        rotation={[-3.108, -0.266, 3.109]}
        scale={0.864}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-5.219, 2.554, 0.66]}
        rotation={[1.957, -0.962, 2.177]}
        scale={2.277}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.071, 2.515, 0.36]}
        rotation={[3.022, -0.363, 2.168]}
        scale={2.224}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.107, 2.604, 0.342]}
        rotation={[2.289, -0.889, 2.065]}
        scale={0.842}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.363, 2.468, 0.383]}
        rotation={[0.22, 0.762, -0.128]}
        scale={1.338}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-5, 2.694, 0.233]}
        rotation={[0.366, -1.133, 0.215]}
        scale={2.471}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-4.827, 2.599, 0.63]}
        rotation={[-0.138, -0.865, -0.386]}
        scale={0.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.203, 2.689, 0.282]}
        rotation={[0.26, 0.821, -0.228]}
        scale={1.749}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-4.983, 2.618, 0.295]}
        rotation={[0.034, -0.143, -0.008]}
        scale={0.816}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-5.047, 2.64, 0.288]}
        rotation={[0.186, -0.339, 0.12]}
        scale={2.354}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-4.994, 2.585, 0.422]}
        rotation={[2.534, 1.285, -2.738]}
        scale={2.469}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.266, 2.627, 0.722]}
        rotation={[3.096, 0.266, 3.136]}
        scale={2.667}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-4.996, 2.633, 0.62]}
        rotation={[2.246, -1.166, 2.421]}
        scale={0.883}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.02, 2.601, 0.593]}
        rotation={[2.665, -0.097, 3.035]}
        scale={1.774}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-5.044, 2.666, 0.336]}
        rotation={[0.396, 0.587, -0.504]}
        scale={0.77}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-5.148, 2.705, 0.416]}
        rotation={[2.96, -0.071, 3.022]}
        scale={1.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-5.05, 2.677, 0.54]}
        rotation={[0.637, 1.073, -0.617]}
        scale={1.194}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.02, 2.662, 0.66]}
        rotation={[2.222, -1.167, 2.351]}
        scale={0.928}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.136, 2.665, 0.458]}
        rotation={[2.703, -0.694, 2.378]}
        scale={0.89}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.316, 2.464, 0.38]}
        rotation={[0.048, 0.739, -0.033]}
        scale={2.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.167, 2.595, 0.306]}
        rotation={[2.554, -0.686, 3.012]}
        scale={0.824}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.148, 2.519, 0.486]}
        rotation={[-2.896, 0.661, 2.856]}
        scale={2.268}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-5.132, 2.467, 0.843]}
        rotation={[0.843, -0.597, 0.493]}
        scale={1.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-5.285, 2.542, 0.363]}
        rotation={[0.803, -1.028, 0.722]}
        scale={0.777}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-5.042, 2.609, 0.443]}
        rotation={[2.791, 0.17, 2.874]}
        scale={1.218}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.306, 2.688, 0.293]}
        rotation={[0.601, 0.916, -0.386]}
        scale={2.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.064, 2.509, 0.266]}
        rotation={[1.768, 0.912, -2.19]}
        scale={0.894}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-5.055, 2.664, 0.363]}
        rotation={[0.812, -1.168, 1.027]}
        scale={2.659}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.038, 2.609, 0.613]}
        rotation={[0.44, 1.11, -0.463]}
        scale={1.105}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.313, 2.567, 0.374]}
        rotation={[-2.948, -0.886, -3.139]}
        scale={0.901}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.325, 2.542, 0.303]}
        rotation={[-0.264, 0.674, 0.103]}
        scale={2.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.106, 2.603, 0.336]}
        rotation={[2.272, 0.916, -2.463]}
        scale={0.944}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.401, 2.583, 0.417]}
        rotation={[2.669, 0.38, 3.056]}
        scale={1.121}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.458, 2.481, 0.665]}
        rotation={[3.038, 0.12, 2.374]}
        scale={1.469}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-5.424, 2.68, 0.368]}
        rotation={[0.107, 0.88, -0.128]}
        scale={2.546}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-4.876, 2.657, 0.365]}
        rotation={[0.782, 0.684, -0.718]}
        scale={1.184}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-4.92, 2.665, 0.504]}
        rotation={[2.234, -1.403, 2.227]}
        scale={1.129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.335, 2.725, 0.381]}
        rotation={[2.627, -0.556, 2.762]}
        scale={0.911}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.404, 2.562, 0.632]}
        rotation={[2.676, -0.329, 2.625]}
        scale={1.512}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-4.975, 2.617, 0.556]}
        rotation={[0.38, 0.156, 0.119]}
        scale={0.858}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-5.002, 2.578, 0.551]}
        rotation={[0.356, 1.121, -0.372]}
        scale={0.864}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-5.032, 2.666, 0.532]}
        rotation={[2.18, -0.49, 2.322]}
        scale={0.854}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.026, 2.555, 0.637]}
        rotation={[0.474, 0.696, -0.43]}
        scale={0.847}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.259, 2.546, 0.651]}
        rotation={[0.403, -0.831, 0.206]}
        scale={2.427}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.322, 2.555, 0.263]}
        rotation={[-0.199, 0.7, 0.095]}
        scale={1.23}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-4.959, 2.585, 0.695]}
        rotation={[-2.665, -1.407, -2.728]}
        scale={1.42}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.282, 2.649, 0.335]}
        rotation={[1.169, 1.054, -0.927]}
        scale={2.455}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.29, 2.667, 0.416]}
        rotation={[2.817, -0.786, 2.824]}
        scale={0.819}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.35, 2.717, 0.286]}
        rotation={[0.368, 0.728, -0.265]}
        scale={1.097}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.363, 2.717, 0.562]}
        rotation={[2.545, -0.787, 2.953]}
        scale={0.792}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.422, 2.574, 0.669]}
        rotation={[2.644, -0.438, 2.235]}
        scale={0.821}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-5.054, 2.528, 0.359]}
        rotation={[-3.105, 0.38, 3.105]}
        scale={0.919}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.245, 2.644, 0.256]}
        rotation={[2.468, 0.744, -2.534]}
        scale={1.635}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.288, 2.682, 0.286]}
        rotation={[2.087, 1.315, -2.763]}
        scale={0.869}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.379, 2.568, 0.611]}
        rotation={[2.726, 0.803, -2.824]}
        scale={1.745}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.42, 2.64, 0.416]}
        rotation={[-0.191, 1.532, 0.15]}
        scale={1.253}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.272, 2.633, 0.493]}
        rotation={[2.878, -1.001, 2.825]}
        scale={1.491}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.312, 2.695, 0.294]}
        rotation={[2.584, -0.375, 2.906]}
        scale={1.436}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.19, 2.636, 0.317]}
        rotation={[0.624, 0.732, -0.287]}
        scale={2.553}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.019, 2.437, 0.19]}
        rotation={[-0.229, -0.02, -0.096]}
        scale={1.183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf007|Dupli|1_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.401, 2.512, 0.582]}
        rotation={[2.92, 0.198, -3.091]}
        scale={1.96}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.147, 2.086, 0.465]}
        rotation={[1.353, -1.186, 1.195]}
        scale={0.843}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.323, 2.582, 0.292]}
        rotation={[2.466, 1.062, 3.118]}
        scale={1.634}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.113, 2.161, 0.544]}
        rotation={[2.481, 0.758, -2.617]}
        scale={0.856}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.405, 2.485, 0.551]}
        rotation={[2.346, -0.29, 2.396]}
        scale={1.163}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.026, 2.657, 0.466]}
        rotation={[2.736, 0.259, 2.966]}
        scale={0.861}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.426, 2.526, 0.495]}
        rotation={[-1.388, 1.165, 1.271]}
        scale={2.296}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.094, 2.606, 0.23]}
        rotation={[0.21, -0.65, 0.069]}
        scale={1.441}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-5.298, 2.553, 0.294]}
        rotation={[-0.06, 0.751, 0.056]}
        scale={1.865}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.919, 2.635, 0.532]}
        rotation={[0.517, -1.22, 0.525]}
        scale={1.341}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-5, 2.683, 0.38]}
        rotation={[0.387, -0.278, 0.318]}
        scale={2.696}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.197, 2.544, 0.386]}
        rotation={[-3.072, 0.335, 3.105]}
        scale={1.02}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.227, 2.646, 0.672]}
        rotation={[0.257, 0.265, -0.115]}
        scale={2.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-5.344, 2.506, 0.57]}
        rotation={[-0.525, -0.733, -0.53]}
        scale={0.854}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-4.968, 2.457, 0.656]}
        rotation={[0.927, 0.135, -0.883]}
        scale={1.226}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.131, 2.629, 0.391]}
        rotation={[1.294, -1.046, 1.24]}
        scale={2.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-5.326, 2.542, 0.375]}
        rotation={[-2.167, 1.346, 1.904]}
        scale={1.173}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-4.846, 2.617, 0.659]}
        rotation={[2.835, -0.214, -2.709]}
        scale={2.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-5.219, 2.638, 0.724]}
        rotation={[2.374, -1.084, 2.117]}
        scale={2.461}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-4.865, 2.649, 0.684]}
        rotation={[0.618, -0.135, -0.362]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.411, 2.554, 0.203]}
        rotation={[2.401, 0.592, 3.061]}
        scale={2.208}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.271, 2.704, 0.38]}
        rotation={[0.494, -0.633, 0.403]}
        scale={0.768}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.162, 2.594, 0.781]}
        rotation={[-3.071, -0.355, -3.114]}
        scale={1.157}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.409, 2.357, 0.18]}
        rotation={[2.016, 0.901, -2.733]}
        scale={1.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.416, 2.567, 0.361]}
        rotation={[2.64, 0.393, 2.936]}
        scale={1.65}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.187, 2.679, 0.247]}
        rotation={[0.24, -0.296, -0.009]}
        scale={1.76}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-4.924, 2.548, 0.555]}
        rotation={[-0.017, -0.933, -0.147]}
        scale={1.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.307, 2.621, 0.317]}
        rotation={[2.582, 0.304, -2.901]}
        scale={1.316}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.42, 2.465, 0.237]}
        rotation={[-0.291, 0.548, 0.092]}
        scale={1.451}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.227, 2.647, 0.636]}
        rotation={[0.193, -0.214, -0.101]}
        scale={2.304}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-5.352, 2.444, 0.174]}
        rotation={[2.737, 1.351, 2.777]}
        scale={1.192}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-4.849, 2.55, 0.194]}
        rotation={[-0.064, -0.072, -0.238]}
        scale={1.268}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.387, 2.544, 0.502]}
        rotation={[0.114, 1.008, -0.224]}
        scale={1.636}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.194, 2.548, 0.316]}
        rotation={[-3.05, -1.225, 3.108]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5.284, 2.587, 0.261]}
        rotation={[-0.045, 0.411, -0.013]}
        scale={1.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.965, 2.704, 0.548]}
        rotation={[1.445, -1.222, 1.476]}
        scale={1.435}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-5.001, 2.513, 0.53]}
        rotation={[2.788, 0.427, 2.564]}
        scale={1.221}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.411, 2.499, 0.344]}
        rotation={[-0.377, 1.315, 0.236]}
        scale={1.212}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-5.164, 2.502, 0.353]}
        rotation={[2.478, -1.241, 1.476]}
        scale={1.968}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-5.001, 2.674, 0.683]}
        rotation={[2.252, -1.243, 2.26]}
        scale={2.448}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-4.987, 2.485, 0.485]}
        rotation={[0.312, -0.371, -0.626]}
        scale={1.284}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-4.935, 2.531, 0.632]}
        rotation={[-2.942, -0.785, -3.093]}
        scale={1.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-5.119, 2.528, 0.29]}
        rotation={[-0.526, -0.64, -0.27]}
        scale={1.092}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-5.004, 2.712, 0.471]}
        rotation={[2.647, 1.094, -2.574]}
        scale={2.47}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-5.268, 2.571, 0.221]}
        rotation={[-0.218, -0.239, -0.052]}
        scale={2.479}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-5.023, 2.623, 0.296]}
        rotation={[0.251, -0.527, 0.12]}
        scale={2.391}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-4.917, 2.663, 0.404]}
        rotation={[0.102, -1.054, 0.042]}
        scale={2.193}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-5.076, 2.696, 0.397]}
        rotation={[2.857, -0.012, -3.109]}
        scale={0.904}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-4.843, 2.617, 0.524]}
        rotation={[2.778, -0.492, -2.932]}
        scale={0.939}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.246, 2.567, 0.16]}
        rotation={[1.679, 1.175, -2.386]}
        scale={2.407}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-5.275, 2.459, 0.332]}
        rotation={[1.915, 0.884, -2.758]}
        scale={1.074}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.199, 2.563, 0.678]}
        rotation={[0.341, 0.739, -0.216]}
        scale={1.735}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-5.229, 2.52, 0.604]}
        rotation={[0.437, 0.782, -0.833]}
        scale={1.94}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.044, 2.582, 0.389]}
        rotation={[-2.716, 1.35, 2.725]}
        scale={0.827}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.111, 2.62, 0.304]}
        rotation={[0.639, -0.208, 0.478]}
        scale={1.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.371, 2.436, 0.43]}
        rotation={[0.048, 0.968, -1.177]}
        scale={0.904}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-4.979, 2.612, 0.316]}
        rotation={[1.081, 0.866, -1.01]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-4.853, 2.579, 0.655]}
        rotation={[-1.049, -1.335, -1.168]}
        scale={0.885}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.3, 2.652, 0.287]}
        rotation={[0.13, 0.266, -0.182]}
        scale={1.418}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-4.906, 2.543, 0.305]}
        rotation={[-0.683, -1.174, -0.68]}
        scale={1.304}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-5, 2.591, 0.307]}
        rotation={[0.274, -1.029, 0.064]}
        scale={2.373}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-4.973, 2.623, 0.468]}
        rotation={[0.345, -0.649, 0.479]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.335, 2.633, 0.751]}
        rotation={[2.962, -0.076, 3.066]}
        scale={2.375}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-4.994, 2.656, 0.594]}
        rotation={[2.327, 1.03, -2.059]}
        scale={0.964}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.072, 2.583, 0.679]}
        rotation={[2.566, 0.657, -2.924]}
        scale={2.544}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-5.021, 2.679, 0.339]}
        rotation={[0.733, 0.741, -0.772]}
        scale={1.343}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-5.137, 2.691, 0.431]}
        rotation={[-3.119, 0.709, 3]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-5.045, 2.694, 0.535]}
        rotation={[2.743, 1.332, -2.739]}
        scale={1.501}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.076, 2.613, 0.67]}
        rotation={[0.769, -0.94, 0.715]}
        scale={1.297}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.134, 2.646, 0.446]}
        rotation={[2.254, -0.984, 1.903]}
        scale={1.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.316, 2.444, 0.38]}
        rotation={[-2.368, -0.103, -2.721]}
        scale={1.381}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.161, 2.591, 0.313]}
        rotation={[1.439, -1.105, 1.25]}
        scale={2.102}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.138, 2.483, 0.513]}
        rotation={[-3.133, -0.091, 2.066]}
        scale={1.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-4.976, 2.71, 0.563]}
        rotation={[0.781, 1.309, -0.805]}
        scale={0.826}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-5.298, 2.565, 0.353]}
        rotation={[1.471, -1.118, 1.81]}
        scale={1.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-5.005, 2.568, 0.405]}
        rotation={[2.368, 1.29, -2.533]}
        scale={1.871}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.275, 2.689, 0.268]}
        rotation={[0.679, 1.061, -0.45]}
        scale={2.413}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.016, 2.474, 0.394]}
        rotation={[-0.427, 0.035, -0.324]}
        scale={1.651}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-4.979, 2.607, 0.391]}
        rotation={[2.314, 0.788, -2.346]}
        scale={1.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.064, 2.522, 0.68]}
        rotation={[0.616, 0.449, -0.203]}
        scale={0.857}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.318, 2.607, 0.359]}
        rotation={[0.795, -1.214, 0.334]}
        scale={0.763}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.334, 2.496, 0.342]}
        rotation={[2.497, 0.451, 2.957]}
        scale={0.858}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.132, 2.571, 0.292]}
        rotation={[2.588, -0.341, 3.128]}
        scale={1.343}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.376, 2.548, 0.352]}
        rotation={[-0.194, 0.754, 0.085]}
        scale={1.921}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.422, 2.457, 0.65]}
        rotation={[-2.948, 0.776, 2.986]}
        scale={1.611}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-5.405, 2.644, 0.407]}
        rotation={[2.639, 0.37, 2.945]}
        scale={2.151}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-4.937, 2.61, 0.419]}
        rotation={[0.063, -0.68, 0.012]}
        scale={2.428}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-4.934, 2.614, 0.541]}
        rotation={[0.642, 0.36, -0.488]}
        scale={2.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.341, 2.737, 0.387]}
        rotation={[0.307, 0.609, -0.385]}
        scale={0.868}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.248, 2.708, 0.292]}
        rotation={[2.814, 0.485, -2.692]}
        scale={0.819}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-4.968, 2.631, 0.551]}
        rotation={[1.937, 1.093, -1.787]}
        scale={0.903}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-4.959, 2.625, 0.489]}
        rotation={[2.256, 1.064, -2.572]}
        scale={1.571}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-5.021, 2.644, 0.539]}
        rotation={[2.796, 0.608, 3.025]}
        scale={1.157}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.058, 2.519, 0.645]}
        rotation={[2.671, 0.684, -2.969]}
        scale={2.333}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.344, 2.52, 0.523]}
        rotation={[-1.619, -1.02, -1.584]}
        scale={0.807}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.311, 2.527, 0.28]}
        rotation={[-0.35, 0.68, 0.134]}
        scale={1.246}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-4.948, 2.516, 0.683]}
        rotation={[0.546, -1.076, -0.173]}
        scale={0.843}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.254, 2.613, 0.365]}
        rotation={[2.74, -0.367, 2.928]}
        scale={2.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.326, 2.671, 0.473]}
        rotation={[1.398, -1.301, 1.548]}
        scale={1.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.342, 2.724, 0.277]}
        rotation={[0.304, 0.554, -0.253]}
        scale={1.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.363, 2.722, 0.536]}
        rotation={[2.898, 0.437, 2.905]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.306, 2.679, 0.312]}
        rotation={[0.233, 0.705, -0.148]}
        scale={1.257}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-4.961, 2.585, 0.424]}
        rotation={[2.69, -0.26, -3.012]}
        scale={1.472}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.242, 2.65, 0.288]}
        rotation={[0.267, 1.192, -0.286]}
        scale={1.745}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.282, 2.687, 0.309]}
        rotation={[0.243, 0.406, -0.221]}
        scale={0.877}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.356, 2.498, 0.692]}
        rotation={[-3.003, 0.693, 2.961]}
        scale={1.791}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.406, 2.592, 0.388]}
        rotation={[-3.074, 1.32, 2.996]}
        scale={0.978}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.225, 2.601, 0.487]}
        rotation={[-0.458, -1.132, -0.546]}
        scale={0.845}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.273, 2.692, 0.312]}
        rotation={[2.525, 0.538, -2.979]}
        scale={1.619}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.073, 2.525, 0.31]}
        rotation={[0.804, 0.873, -1.316]}
        scale={1.269}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.296, 2.714, 0.301]}
        rotation={[2.134, -0.515, 2.524]}
        scale={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf006|Dupli|2_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.369, 2.47, 0.59]}
        rotation={[-0.238, 1.395, 0.205]}
        scale={2.06}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.156, 2.115, 0.437]}
        rotation={[1.065, -0.984, 0.967]}
        scale={0.802}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.346, 2.556, 0.345]}
        rotation={[-0.156, 0.217, 0.028]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.118, 2.154, 0.605]}
        rotation={[1.247, 1.201, -1.452]}
        scale={0.903}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.457, 2.415, 0.545]}
        rotation={[1.101, -0.3, 0.986]}
        scale={0.848}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.013, 2.69, 0.51]}
        rotation={[2.809, 0.602, 2.947]}
        scale={1.979}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.409, 2.489, 0.536]}
        rotation={[3.06, 0.672, 2.485]}
        scale={1.87}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.104, 2.568, 0.203]}
        rotation={[-0.099, 0.109, -0.126]}
        scale={2.401}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-5.39, 2.521, 0.324]}
        rotation={[2.87, 1.147, 2.53]}
        scale={2.455}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.907, 2.627, 0.563]}
        rotation={[0.658, 0.298, -0.331]}
        scale={2.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-5.017, 2.693, 0.348]}
        rotation={[0.448, -0.612, 0.234]}
        scale={1.472}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.145, 2.581, 0.293]}
        rotation={[0.287, 0.787, -0.256]}
        scale={2.222}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.262, 2.632, 0.704]}
        rotation={[2.839, 0.258, -2.883]}
        scale={2.245}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-5.145, 2.58, 0.689]}
        rotation={[0.606, 0.97, -0.842]}
        scale={2.153}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-5.137, 2.604, 0.279]}
        rotation={[0.591, 0.531, -0.155]}
        scale={2.377}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.144, 2.592, 0.389]}
        rotation={[2.543, -0.79, 2.073]}
        scale={1.595}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-5.306, 2.496, 0.428]}
        rotation={[-0.373, -0.158, -0.588]}
        scale={1.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-4.866, 2.616, 0.644]}
        rotation={[0.488, -0.193, -0.382]}
        scale={2.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-5.245, 2.603, 0.759]}
        rotation={[2.559, -0.839, 2.211]}
        scale={2.217}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-4.888, 2.635, 0.69]}
        rotation={[-3.048, -0.911, 3.118]}
        scale={1.065}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.397, 2.567, 0.207]}
        rotation={[-3.023, 1.321, 2.157]}
        scale={0.806}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.327, 2.676, 0.405]}
        rotation={[0.474, -0.253, 0.209]}
        scale={0.908}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.249, 2.548, 0.81]}
        rotation={[-2.881, 0.595, 3.038]}
        scale={1.779}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.319, 2.656, 0.418]}
        rotation={[1.056, -1.199, 1.167]}
        scale={2.362}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.407, 2.549, 0.299]}
        rotation={[2.402, -0.115, 2.413]}
        scale={1.304}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.178, 2.654, 0.207]}
        rotation={[0.246, -0.423, -0.046]}
        scale={2.503}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-4.944, 2.522, 0.63]}
        rotation={[-2.526, -0.989, -2.63]}
        scale={1.123}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.375, 2.545, 0.321]}
        rotation={[0.072, 0.491, -0.092]}
        scale={2.62}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.415, 2.455, 0.228]}
        rotation={[0.054, 0.818, -0.11]}
        scale={1.212}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.285, 2.593, 0.668]}
        rotation={[0.689, 1.015, -0.719]}
        scale={1.919}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-5.318, 2.4, 0.184]}
        rotation={[2.442, 1.254, 3.048]}
        scale={0.856}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-4.861, 2.488, 0.13]}
        rotation={[-0.025, -0.087, -0.057]}
        scale={2.429}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.3, 2.506, 0.375]}
        rotation={[-2.084, -1.097, -2.265]}
        scale={0.933}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.203, 2.583, 0.312]}
        rotation={[0.637, -0.48, 0.282]}
        scale={1.237}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5.261, 2.565, 0.296]}
        rotation={[0.071, 0.81, -0.176]}
        scale={0.899}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.949, 2.682, 0.522]}
        rotation={[0.968, -1.279, 1.032]}
        scale={2.234}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-5.089, 2.608, 0.364]}
        rotation={[2.614, -0.55, 2.539]}
        scale={0.874}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.4, 2.48, 0.339]}
        rotation={[-0.138, 0.665, 0.046]}
        scale={0.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-5.205, 2.454, 0.336]}
        rotation={[1.446, 0.16, -0.119]}
        scale={1.46}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-5.025, 2.643, 0.728]}
        rotation={[2.997, -0.462, 2.932]}
        scale={2.255}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-5.014, 2.446, 0.475]}
        rotation={[-1.723, 1.267, 1.809]}
        scale={1.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-4.94, 2.536, 0.63]}
        rotation={[-2.039, -1.214, -2.243]}
        scale={1.225}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-5.128, 2.501, 0.307]}
        rotation={[-0.459, -0.079, 0.07]}
        scale={2.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-5.006, 2.7, 0.414]}
        rotation={[2.712, 0.343, -2.778]}
        scale={2.272}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-5.281, 2.552, 0.245]}
        rotation={[-0.176, -0.089, -0.07]}
        scale={1.889}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-5.087, 2.553, 0.224]}
        rotation={[-0.343, -0.922, -0.223]}
        scale={0.784}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-4.909, 2.647, 0.404]}
        rotation={[0.699, 0.462, -0.564]}
        scale={2.595}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-5.028, 2.636, 0.386]}
        rotation={[0.957, -1.051, 1.063]}
        scale={2.213}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-4.821, 2.606, 0.531]}
        rotation={[-2.691, -1.071, -2.607]}
        scale={1.086}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.18, 2.499, 0.15]}
        rotation={[-0.052, 0.404, -0.053]}
        scale={2.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-5.128, 2.633, 0.548]}
        rotation={[-0.201, 0.498, 0.095]}
        scale={0.919}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.188, 2.589, 0.673]}
        rotation={[2.287, 0.848, -2.369]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-5.264, 2.492, 0.579]}
        rotation={[-0.597, -0.677, -0.341]}
        scale={1.227}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.076, 2.621, 0.358]}
        rotation={[2.928, 0.934, -3.057]}
        scale={2.313}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.127, 2.613, 0.292]}
        rotation={[0.579, 0.978, -0.758]}
        scale={1.812}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.099, 2.614, 0.354]}
        rotation={[2.62, -0.98, 2.27]}
        scale={1.508}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-4.996, 2.581, 0.362]}
        rotation={[1.069, 0.922, -0.964]}
        scale={1.473}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-4.903, 2.541, 0.683]}
        rotation={[-2.493, -1.209, -2.587]}
        scale={2.593}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.327, 2.613, 0.306]}
        rotation={[0.634, 1.248, -0.643]}
        scale={2.478}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-4.916, 2.526, 0.329]}
        rotation={[-0.732, -1.277, -0.612]}
        scale={1.102}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-4.968, 2.566, 0.339]}
        rotation={[0.016, -0.032, -0.024]}
        scale={2.37}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-4.94, 2.64, 0.486]}
        rotation={[2.177, -1.156, 2.052]}
        scale={0.917}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.418, 2.596, 0.712]}
        rotation={[-3.006, 0.439, 3.078]}
        scale={2.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-4.989, 2.656, 0.608]}
        rotation={[0.315, -0.128, 0.2]}
        scale={0.828}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.126, 2.556, 0.718]}
        rotation={[3.011, 0.331, 3.128]}
        scale={1.199}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-4.995, 2.665, 0.384]}
        rotation={[0.644, -0.664, 0.374]}
        scale={1.739}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-5.084, 2.671, 0.436]}
        rotation={[3.115, -0.124, 3.095]}
        scale={2.366}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-5.043, 2.69, 0.549]}
        rotation={[1.111, 1.255, -1.095]}
        scale={1.164}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.165, 2.549, 0.728]}
        rotation={[3.13, -0.036, 3.116]}
        scale={1.693}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.082, 2.621, 0.365]}
        rotation={[3.058, 0.323, -3.116]}
        scale={2.643}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.326, 2.411, 0.375]}
        rotation={[-0.04, -0.865, -1.136]}
        scale={0.874}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.171, 2.554, 0.321]}
        rotation={[1.521, 1.314, -1.803]}
        scale={1.758}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.153, 2.676, 0.685]}
        rotation={[2.644, -0.224, 3.121]}
        scale={0.873}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-4.988, 2.715, 0.552]}
        rotation={[0.524, -0.542, 0.207]}
        scale={0.84}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-5.306, 2.55, 0.355]}
        rotation={[0.396, 0.885, -0.332]}
        scale={2.696}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-5.004, 2.53, 0.391]}
        rotation={[0.544, 0.597, -0.582]}
        scale={2.727}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.258, 2.701, 0.266]}
        rotation={[2.526, 0.83, -2.764]}
        scale={2.484}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.272, 2.593, 0.347]}
        rotation={[0.606, -0.81, 0.111]}
        scale={1.778}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-4.949, 2.545, 0.415]}
        rotation={[2.196, -1.446, 2.121]}
        scale={1.64}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.153, 2.688, 0.427]}
        rotation={[2.968, 0.135, 3.126]}
        scale={1.707}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.322, 2.625, 0.351]}
        rotation={[2.617, 0.289, -2.907]}
        scale={0.782}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.1, 2.636, 0.323]}
        rotation={[2.642, 0.162, -2.958]}
        scale={0.862}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.167, 2.522, 0.288]}
        rotation={[2.164, 0.818, -2.442]}
        scale={1.035}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.354, 2.508, 0.287]}
        rotation={[-0.448, 0.956, 0.181]}
        scale={1.552}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.297, 2.635, 0.364]}
        rotation={[1.696, -1.417, 1.677]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-5.356, 2.59, 0.422]}
        rotation={[2.625, 0.38, 3.116]}
        scale={1.366}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-4.997, 2.571, 0.445]}
        rotation={[0.522, -1.15, 0.296]}
        scale={1.861}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-4.955, 2.553, 0.58]}
        rotation={[0.701, 0.116, -0.208]}
        scale={1.829}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.332, 2.757, 0.387]}
        rotation={[2.287, 0.992, -2.676]}
        scale={1.383}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.284, 2.727, 0.304]}
        rotation={[0.529, 0.672, -0.208]}
        scale={0.805}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-4.965, 2.631, 0.545]}
        rotation={[2.482, 0.664, -2.335]}
        scale={1.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-4.964, 2.617, 0.49]}
        rotation={[1.17, -1.212, 1.099]}
        scale={1.205}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-4.989, 2.651, 0.54]}
        rotation={[2.634, -0.404, 2.945]}
        scale={0.825}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.094, 2.581, 0.679]}
        rotation={[1.813, 1.232, -2.17]}
        scale={2.293}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.385, 2.605, 0.44]}
        rotation={[0.703, 0.81, -0.567]}
        scale={1.652}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.308, 2.507, 0.295]}
        rotation={[-0.325, 0.757, 0.198]}
        scale={1.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-5.314, 2.678, 0.332]}
        rotation={[2.577, 0.848, -3.087]}
        scale={0.928}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.263, 2.568, 0.34]}
        rotation={[2.872, -0.596, 2.882]}
        scale={0.833}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.376, 2.636, 0.483]}
        rotation={[1.062, -0.979, 1.039]}
        scale={0.847}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.332, 2.735, 0.285]}
        rotation={[2.258, -0.79, 2.581]}
        scale={0.848}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.346, 2.749, 0.526]}
        rotation={[2.615, 0.506, -2.662]}
        scale={1.331}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.293, 2.693, 0.308]}
        rotation={[2.653, 0.602, -2.896]}
        scale={0.918}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-4.898, 2.612, 0.467]}
        rotation={[-0.026, -0.82, -0.172]}
        scale={1.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.221, 2.644, 0.296]}
        rotation={[2.487, 0.637, -2.719]}
        scale={1.089}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.268, 2.673, 0.334]}
        rotation={[2.449, 0.671, -2.739]}
        scale={0.812}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.35, 2.463, 0.712]}
        rotation={[0.715, 0.197, 0.473]}
        scale={1.501}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.372, 2.571, 0.383]}
        rotation={[-0.202, 0.878, 0.068]}
        scale={0.833}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.236, 2.578, 0.442]}
        rotation={[-2.75, -0.524, -2.886]}
        scale={0.978}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.246, 2.663, 0.353]}
        rotation={[1.964, -1.223, 1.72]}
        scale={1.049}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.272, 2.603, 0.324]}
        rotation={[0.747, 1.344, -1.175]}
        scale={1.285}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.302, 2.706, 0.29]}
        rotation={[2.745, 0.392, -2.947]}
        scale={0.869}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf005|Dupli|3_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.04, 2.519, 0.374]}
        rotation={[1.822, -0.685, 1.485]}
        scale={0.891}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.134, 2.122, 0.425]}
        rotation={[2.388, -0.979, 2.342]}
        scale={0.95}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.332, 2.524, 0.395]}
        rotation={[-0.048, 1.128, -0.012]}
        scale={1.412}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.234, 2.573, 0.656]}
        rotation={[-0.044, -0.563, -0.008]}
        scale={0.873}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.152, 2.15, 0.409]}
        rotation={[0.733, -0.251, 0.149]}
        scale={0.954}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.006, 2.623, 0.602]}
        rotation={[2.631, -0.844, 2.95]}
        scale={1.356}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.367, 2.46, 0.571]}
        rotation={[3.015, 0.819, 2.28]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.113, 2.58, 0.209]}
        rotation={[-0.062, -0.345, -0.06]}
        scale={1.896}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-5.448, 2.421, 0.389]}
        rotation={[3.116, 1.46, 3.081]}
        scale={2.192}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.882, 2.613, 0.557]}
        rotation={[2.722, -1.356, 2.705]}
        scale={0.864}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-5.011, 2.724, 0.317]}
        rotation={[0.227, -0.369, 0.007]}
        scale={1.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.218, 2.622, 0.215]}
        rotation={[-0.052, -0.413, -0.049]}
        scale={1.827}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.311, 2.639, 0.704]}
        rotation={[2.926, -0.144, -3.05]}
        scale={1.785}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-5.126, 2.606, 0.691]}
        rotation={[0.474, -0.845, 0.24]}
        scale={2.309}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-5.123, 2.647, 0.276]}
        rotation={[0.316, -0.367, 0.08]}
        scale={2.359}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.129, 2.562, 0.372]}
        rotation={[2.662, -0.774, 2.094]}
        scale={1.344}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-5.333, 2.47, 0.442]}
        rotation={[1.006, -0.755, -0.483]}
        scale={1.296}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-4.915, 2.577, 0.613]}
        rotation={[1.151, 0.416, -1.321]}
        scale={1.899}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-5.286, 2.562, 0.769]}
        rotation={[1.078, -0.55, 0.273]}
        scale={0.886}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-4.941, 2.599, 0.685]}
        rotation={[3.011, -1.16, 2.89]}
        scale={1.467}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.41, 2.524, 0.222]}
        rotation={[1.146, -0.77, 1.914]}
        scale={0.912}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.361, 2.661, 0.42]}
        rotation={[2.369, -0.99, 2.617]}
        scale={2.145}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.283, 2.525, 0.792]}
        rotation={[0.946, 0, 0.02]}
        scale={2.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.342, 2.666, 0.424]}
        rotation={[0.925, -1.034, 0.562]}
        scale={2.432}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.416, 2.51, 0.267]}
        rotation={[2.385, 1.092, 3.096]}
        scale={0.844}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.164, 2.627, 0.193]}
        rotation={[0.173, 1.136, -0.815]}
        scale={2.456}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-4.956, 2.463, 0.676]}
        rotation={[0.694, -0.766, -0.117]}
        scale={1.788}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.41, 2.485, 0.347]}
        rotation={[-0.25, 0.809, 0.183]}
        scale={1.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.416, 2.418, 0.259]}
        rotation={[2.503, 0.501, 3.027]}
        scale={1.157}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.293, 2.548, 0.65]}
        rotation={[2.858, 0.402, -3.077]}
        scale={2.605}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-5.294, 2.343, 0.189]}
        rotation={[2.319, 0.797, -3.061]}
        scale={1.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-4.869, 2.423, 0.074]}
        rotation={[-0.019, 0.096, -0.041]}
        scale={1.401}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.221, 2.558, 0.31]}
        rotation={[0.435, -0.023, -0.034]}
        scale={2.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.184, 2.614, 0.298]}
        rotation={[0.369, 0.309, -0.281]}
        scale={0.874}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5.267, 2.499, 0.346]}
        rotation={[1.535, 0.069, -0.826]}
        scale={1.501}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.953, 2.686, 0.534]}
        rotation={[0.961, -1.208, 0.949]}
        scale={2.146}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-5.105, 2.621, 0.331]}
        rotation={[2.687, 1.03, -2.901]}
        scale={2.398}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.076, 2.59, 0.314]}
        rotation={[0.591, -0.091, -0.198]}
        scale={2.188}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-5.225, 2.427, 0.335]}
        rotation={[-2.553, 0.041, -3.059]}
        scale={0.909}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-5.101, 2.572, 0.779]}
        rotation={[-3.002, -0.876, 3.108]}
        scale={1.421}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-5.001, 2.429, 0.469]}
        rotation={[-1.007, 0.784, 1.017]}
        scale={0.925}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-4.948, 2.525, 0.617]}
        rotation={[0.54, -0.49, -0.411]}
        scale={2.198}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-5.124, 2.499, 0.333]}
        rotation={[-2.559, 0.312, 3.022]}
        scale={1.359}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-5.05, 2.678, 0.391]}
        rotation={[1.967, -1.109, 2.206]}
        scale={1.154}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-5.293, 2.542, 0.263]}
        rotation={[-0.267, 0.43, -0.002]}
        scale={2.131}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-5.115, 2.533, 0.241]}
        rotation={[-0.181, -0.482, -0.003]}
        scale={1.244}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-4.935, 2.634, 0.391]}
        rotation={[0.869, -1.277, 0.698]}
        scale={2.777}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-4.997, 2.607, 0.371]}
        rotation={[0.438, -0.886, 0.201]}
        scale={0.894}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-4.869, 2.556, 0.54]}
        rotation={[-1.823, -1.347, -1.971]}
        scale={2.03}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.139, 2.445, 0.171]}
        rotation={[1.961, -0.823, 2.791]}
        scale={1.144}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-5.084, 2.643, 0.547]}
        rotation={[2.512, 0.446, 3.104]}
        scale={0.955}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.19, 2.598, 0.687]}
        rotation={[0.401, -0.237, -0.001]}
        scale={0.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-5.049, 2.555, 0.647]}
        rotation={[0.738, 1.034, -0.494]}
        scale={2.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.115, 2.633, 0.369]}
        rotation={[2.908, 0.515, 3.113]}
        scale={2.444}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.166, 2.632, 0.292]}
        rotation={[0.265, 0.305, 0.025]}
        scale={2.493}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.082, 2.671, 0.323]}
        rotation={[2.829, 0.772, -3.128]}
        scale={1.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-5.015, 2.516, 0.418]}
        rotation={[0.225, 0.031, 0.103]}
        scale={1.07}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-4.955, 2.503, 0.711]}
        rotation={[0.572, -0.347, -0.416]}
        scale={0.854}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.364, 2.535, 0.324]}
        rotation={[0, 0.934, -0.1]}
        scale={1.858}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-4.963, 2.472, 0.325]}
        rotation={[-0.211, -1.102, -0.24]}
        scale={1.329}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-4.932, 2.505, 0.342]}
        rotation={[0.367, 0.188, -0.671]}
        scale={1.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-4.961, 2.638, 0.518]}
        rotation={[0.608, 0.438, -0.416]}
        scale={1.769}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.464, 2.56, 0.686]}
        rotation={[-3.053, 0.213, 2.922]}
        scale={2.039}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-4.995, 2.681, 0.585]}
        rotation={[2.764, -0.591, 2.806]}
        scale={1.374}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.225, 2.536, 0.736]}
        rotation={[-2.774, 0.191, 3.057]}
        scale={2.126}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-4.95, 2.509, 0.575]}
        rotation={[0.898, -1.263, 0.94]}
        scale={2.495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-5.008, 2.593, 0.389]}
        rotation={[0.45, -0.521, 0.274]}
        scale={1.129}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-5.038, 2.677, 0.529]}
        rotation={[0.737, 1.03, -0.856]}
        scale={2.493}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.206, 2.48, 0.769]}
        rotation={[0.989, -0.502, 0.336]}
        scale={1.568}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.071, 2.588, 0.326]}
        rotation={[2.634, -0.592, 2.512]}
        scale={1.167}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.353, 2.575, 0.538]}
        rotation={[2.617, -0.212, 2.783]}
        scale={1.031}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.212, 2.505, 0.295]}
        rotation={[2.132, 0.924, -2.567]}
        scale={0.816}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.179, 2.671, 0.711]}
        rotation={[2.822, 0.052, 3.012]}
        scale={0.904}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-4.982, 2.696, 0.548]}
        rotation={[2.77, 0.378, -2.93]}
        scale={0.973}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-5.305, 2.435, 0.477]}
        rotation={[0.522, -0.469, -0.639]}
        scale={1.967}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-4.982, 2.499, 0.39]}
        rotation={[2.505, 0.041, -2.36]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.205, 2.693, 0.258]}
        rotation={[2.47, 0.515, -2.892]}
        scale={2.494}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.271, 2.618, 0.333]}
        rotation={[0.548, -0.493, 0.273]}
        scale={0.991}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-4.998, 2.689, 0.43]}
        rotation={[0.998, -0.765, 1.213]}
        scale={0.849}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.17, 2.691, 0.466]}
        rotation={[2.925, 0.427, 3.067]}
        scale={1.276}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.303, 2.657, 0.341]}
        rotation={[0.419, 0.773, -0.29]}
        scale={1.194}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.096, 2.629, 0.287]}
        rotation={[2.794, -0.338, -3.084]}
        scale={1.124}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.172, 2.487, 0.28]}
        rotation={[-0.108, 0.139, -0.094]}
        scale={0.982}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.32, 2.461, 0.231]}
        rotation={[1.755, 1.457, -2.487]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.319, 2.658, 0.329]}
        rotation={[0.548, -0.529, 0.159]}
        scale={1.835}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-5.341, 2.572, 0.452]}
        rotation={[0.487, -0.021, -0.323]}
        scale={1.307}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-5.003, 2.51, 0.48]}
        rotation={[1.911, -0.518, 1.542]}
        scale={1.101}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-5.011, 2.517, 0.576]}
        rotation={[0.475, 0.015, 0.096]}
        scale={1.772}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.334, 2.76, 0.403]}
        rotation={[1.768, 1.083, -1.962]}
        scale={1.587}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.286, 2.723, 0.301]}
        rotation={[2.736, 0.568, -2.777]}
        scale={0.821}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-4.975, 2.618, 0.542]}
        rotation={[2.256, -1.221, 2.327]}
        scale={1.19}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-4.941, 2.632, 0.437]}
        rotation={[0.489, -1.161, 0.421]}
        scale={2.018}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-4.977, 2.65, 0.553]}
        rotation={[2.715, 0.002, 2.991]}
        scale={0.826}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.124, 2.626, 0.708]}
        rotation={[2.371, 1.109, -2.39]}
        scale={0.999}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.366, 2.624, 0.438]}
        rotation={[0.652, 1.327, -0.673]}
        scale={2.122}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.289, 2.489, 0.326]}
        rotation={[-0.838, 1.057, 0.493]}
        scale={1.265}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-5.317, 2.678, 0.327]}
        rotation={[0.127, 0.949, -0.185]}
        scale={0.792}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.259, 2.538, 0.309]}
        rotation={[0.115, 0.12, -0.055]}
        scale={1.935}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.421, 2.614, 0.501]}
        rotation={[2.128, 1.235, -2.183]}
        scale={2.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.31, 2.715, 0.291]}
        rotation={[2.568, 0.536, -3.041]}
        scale={2.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.344, 2.75, 0.528]}
        rotation={[0.531, 0.737, -0.165]}
        scale={0.786}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.287, 2.691, 0.33]}
        rotation={[2.409, 0.859, -2.885]}
        scale={0.909}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-4.897, 2.583, 0.517]}
        rotation={[0.525, 0.006, -0.349]}
        scale={0.98}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.212, 2.639, 0.318]}
        rotation={[0.286, 0.209, -0.204]}
        scale={1.507}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.292, 2.645, 0.392]}
        rotation={[0.46, 0.424, 0.018]}
        scale={1.555}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.331, 2.762, 0.44]}
        rotation={[2.996, -0.439, 2.994]}
        scale={0.878}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.323, 2.636, 0.455]}
        rotation={[1.513, 1.032, -1.241]}
        scale={0.924}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.267, 2.536, 0.412]}
        rotation={[-2.868, -1.27, -3.007]}
        scale={1.468}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.194, 2.642, 0.389]}
        rotation={[1.378, -1.042, 0.954]}
        scale={1.697}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.26, 2.549, 0.281]}
        rotation={[2.538, 0.554, -2.88]}
        scale={1.608}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.326, 2.686, 0.309]}
        rotation={[0.201, 1.136, -0.165]}
        scale={1.365}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf003|Dupli|4_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.042, 2.595, 0.33]}
        rotation={[0.225, -0.371, 0.086]}
        scale={0.857}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.141, 2.147, 0.399]}
        rotation={[2.684, 0.051, -3.025]}
        scale={0.903}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.312, 2.515, 0.407]}
        rotation={[2.31, 0.719, 3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.264, 2.582, 0.656]}
        rotation={[1.661, 1.005, -1.75]}
        scale={2.799}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.137, 2.15, 0.406]}
        rotation={[2.678, 0.497, -2.677]}
        scale={0.786}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.027, 2.599, 0.646]}
        rotation={[1.416, -1.135, 1.231]}
        scale={0.867}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.35, 2.444, 0.578]}
        rotation={[1.102, 0.518, -1.974]}
        scale={1.5}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.112, 2.561, 0.221]}
        rotation={[1.774, 0.787, -2.341]}
        scale={1.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-5.433, 2.366, 0.431]}
        rotation={[2.845, 0.688, 2.768]}
        scale={1.495}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.863, 2.571, 0.592]}
        rotation={[-1.371, -1.28, -1.503]}
        scale={2.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-5.056, 2.728, 0.322]}
        rotation={[0.797, -0.863, 0.428]}
        scale={1.214}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.208, 2.618, 0.203]}
        rotation={[0.988, 1.305, -1.563]}
        scale={1.676}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.309, 2.636, 0.698]}
        rotation={[2.853, 1.063, -3.033]}
        scale={1.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-5.093, 2.623, 0.682]}
        rotation={[2.744, -0.419, 2.897]}
        scale={1.747}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-5.109, 2.661, 0.259]}
        rotation={[0.26, -0.851, 0.089]}
        scale={1.651}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.144, 2.504, 0.337]}
        rotation={[1.198, 0.082, 0.237]}
        scale={1.195}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-4.991, 2.61, 0.524]}
        rotation={[1.584, 1.426, -1.696]}
        scale={1.485}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-4.959, 2.547, 0.584]}
        rotation={[-0.434, -1.173, -0.675]}
        scale={1.65}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-5.344, 2.513, 0.78]}
        rotation={[2.699, -0.694, 2.086]}
        scale={1.509}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-5.044, 2.5, 0.636]}
        rotation={[0.368, -0.905, -0.831]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.406, 2.478, 0.265]}
        rotation={[2.769, 0.905, 2.793]}
        scale={0.934}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.391, 2.651, 0.468]}
        rotation={[0.669, -1, 0.717]}
        scale={1.398}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.331, 2.483, 0.785]}
        rotation={[2.941, -0.523, 2.302]}
        scale={0.826}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.371, 2.674, 0.428]}
        rotation={[2.491, 1.028, -2.602]}
        scale={2.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.226, 2.599, 0.314]}
        rotation={[2.756, -1.118, 2.768]}
        scale={2.389}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.142, 2.611, 0.164]}
        rotation={[2.188, 0.496, -2.807]}
        scale={2.743}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-5.121, 2.595, 0.325]}
        rotation={[2.174, -0.873, 1.979]}
        scale={0.887}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.103, 2.597, 0.362]}
        rotation={[3.039, 0.742, 3.128]}
        scale={1.828}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.106, 2.597, 0.693]}
        rotation={[1.943, 1.189, -1.833]}
        scale={0.885}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.299, 2.533, 0.616]}
        rotation={[1.148, -1.203, 1.12]}
        scale={1.708}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-5.029, 2.579, 0.37]}
        rotation={[0.835, -1.058, 0.559]}
        scale={1.807}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-5.234, 2.613, 0.669]}
        rotation={[0.542, 0.834, -0.874]}
        scale={1.224}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.214, 2.561, 0.288]}
        rotation={[0.348, -0.087, -0.06]}
        scale={2.531}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.185, 2.646, 0.299]}
        rotation={[2.799, 0.124, 3.01]}
        scale={1.159}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5.272, 2.496, 0.356]}
        rotation={[-2.553, -0.442, -2.891]}
        scale={1.155}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.959, 2.685, 0.534]}
        rotation={[1.676, -1.239, 1.542]}
        scale={2.655}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-5.136, 2.638, 0.322]}
        rotation={[1.353, -1.189, 1.396]}
        scale={2.655}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.082, 2.594, 0.29]}
        rotation={[0.181, 0.204, 0.096]}
        scale={1.842}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-4.99, 2.597, 0.495]}
        rotation={[2.642, -0.024, 2.984]}
        scale={1.127}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-5.01, 2.585, 0.62]}
        rotation={[2.846, 0.105, -2.884]}
        scale={0.853}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-5.021, 2.634, 0.458]}
        rotation={[2.833, 0.494, -2.904]}
        scale={2.585}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-4.986, 2.429, 0.6]}
        rotation={[0.621, -0.515, 0.099]}
        scale={0.896}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-5.156, 2.443, 0.347]}
        rotation={[-2.347, 0.585, 2.783]}
        scale={1.139}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-5.1, 2.603, 0.347]}
        rotation={[2.748, -0.614, 3.082]}
        scale={1.558}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-5.307, 2.488, 0.36]}
        rotation={[2.305, 0.903, -3.016]}
        scale={0.894}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-5.141, 2.492, 0.306]}
        rotation={[-0.709, 0.06, -0.292]}
        scale={0.794}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-5.002, 2.605, 0.364]}
        rotation={[0.346, 0.296, -0.412]}
        scale={0.88}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-5.005, 2.566, 0.347]}
        rotation={[0.29, -1.214, 0.197]}
        scale={1.621}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-4.904, 2.532, 0.528]}
        rotation={[-0.879, -1.28, -1.075]}
        scale={1.518}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.098, 2.39, 0.208]}
        rotation={[1.655, 0.963, -2.27]}
        scale={0.839}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-5.052, 2.615, 0.604]}
        rotation={[0.718, 1.111, -0.702]}
        scale={2.446}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.194, 2.605, 0.708]}
        rotation={[0.9, 0.981, -1.091]}
        scale={0.797}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-5.008, 2.588, 0.637]}
        rotation={[0.492, -0.068, 0.146]}
        scale={1.307}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.126, 2.642, 0.365]}
        rotation={[2.81, -0.59, 2.664]}
        scale={2.484}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.199, 2.624, 0.28]}
        rotation={[1.972, 1.106, -2.195]}
        scale={2.304}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.084, 2.689, 0.288]}
        rotation={[0.567, 0.791, -0.73]}
        scale={0.923}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-5.003, 2.665, 0.509]}
        rotation={[2.057, -0.71, 2.026]}
        scale={0.853}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-5.136, 2.619, 0.269]}
        rotation={[0.577, 0.848, -0.244]}
        scale={0.939}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.102, 2.659, 0.268]}
        rotation={[1.792, 0.992, -1.763]}
        scale={0.942}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-5.144, 2.693, 0.363]}
        rotation={[1.161, -1.112, 1.162]}
        scale={1.156}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-5.247, 2.591, 0.33]}
        rotation={[3.061, 0.149, 3.016]}
        scale={2.135}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-4.988, 2.62, 0.558]}
        rotation={[0.472, -0.097, -0.083]}
        scale={1.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.523, 2.525, 0.628]}
        rotation={[2.76, -0.373, 2.418]}
        scale={1.641}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-5.001, 2.663, 0.645]}
        rotation={[0.484, -0.579, 0.179]}
        scale={1.544}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.267, 2.485, 0.678]}
        rotation={[1.622, -0.747, 1.423]}
        scale={1.11}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-5.244, 2.677, 0.303]}
        rotation={[2.302, -0.649, 2.705]}
        scale={0.91}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-4.992, 2.539, 0.352]}
        rotation={[0.22, -1.244, 0.14]}
        scale={1.196}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-5.036, 2.651, 0.502]}
        rotation={[0.192, 0.682, -0.213]}
        scale={2.529}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.094, 2.588, 0.366]}
        rotation={[1.934, 1.255, -2.165]}
        scale={1.583}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.071, 2.53, 0.315]}
        rotation={[0.778, 0.746, -0.935]}
        scale={0.947}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.366, 2.562, 0.54]}
        rotation={[2.682, -0.188, 2.703]}
        scale={1.638}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.263, 2.44, 0.305]}
        rotation={[2.197, -0.082, 2.992]}
        scale={0.866}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.196, 2.648, 0.742]}
        rotation={[2.435, -1.003, 2.384]}
        scale={1.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-5.021, 2.691, 0.524]}
        rotation={[2.577, 1.049, -2.541]}
        scale={1.397}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-4.981, 2.663, 0.596]}
        rotation={[0.497, -0.66, 0.285]}
        scale={0.819}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-4.993, 2.468, 0.408]}
        rotation={[0.598, 0.413, -0.617]}
        scale={1.388}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.188, 2.693, 0.252]}
        rotation={[0.286, 0.326, -0.211]}
        scale={1.446}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.251, 2.673, 0.293]}
        rotation={[0.452, 0.659, -0.293]}
        scale={0.872}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-4.996, 2.693, 0.442]}
        rotation={[1.059, 1.098, -0.822]}
        scale={0.931}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.207, 2.692, 0.453]}
        rotation={[3.025, 0.19, 3.121]}
        scale={1.119}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.295, 2.664, 0.289]}
        rotation={[2.777, 0.11, -2.929]}
        scale={0.772}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.07, 2.622, 0.252]}
        rotation={[2.602, 0.008, -3.069]}
        scale={2.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.368, 2.655, 0.579]}
        rotation={[2.541, 0.819, -2.757]}
        scale={1.299}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.307, 2.595, 0.435]}
        rotation={[0.752, -1.364, 0.733]}
        scale={2.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.339, 2.7, 0.312]}
        rotation={[0.302, 0.124, -0.209]}
        scale={2.345}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-5.009, 2.611, 0.47]}
        rotation={[3.107, 1.145, -3.102]}
        scale={0.866}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-5.006, 2.489, 0.499]}
        rotation={[2.569, 0.097, 2.679]}
        scale={1.467}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-5.057, 2.484, 0.564]}
        rotation={[3.028, 0.527, 2.104]}
        scale={1.199}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.362, 2.773, 0.431]}
        rotation={[2.5, 1.038, -2.496]}
        scale={2.034}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.314, 2.732, 0.323]}
        rotation={[2.672, -0.034, 2.822]}
        scale={1.424}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-4.959, 2.612, 0.543]}
        rotation={[0.558, 0.04, -0.122]}
        scale={1.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-4.959, 2.617, 0.404]}
        rotation={[0.422, -1.023, 0.346]}
        scale={2.401}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-4.973, 2.66, 0.569]}
        rotation={[1.85, -1.079, 1.682]}
        scale={1.009}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.155, 2.653, 0.756]}
        rotation={[2.939, -0.094, 3.015]}
        scale={1.702}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.354, 2.616, 0.403]}
        rotation={[2.646, 0.726, -3.008]}
        scale={1.713}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.253, 2.434, 0.322]}
        rotation={[-2.481, -0.033, -3.012]}
        scale={0.821}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-5.337, 2.687, 0.301]}
        rotation={[0.514, 0.912, -0.328]}
        scale={1.182}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.253, 2.497, 0.305]}
        rotation={[-0.249, 0.341, 0.047]}
        scale={1.133}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.461, 2.564, 0.515]}
        rotation={[-2.509, 1.307, 2.473]}
        scale={1.861}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.273, 2.695, 0.326]}
        rotation={[0.442, 0.333, -0.334]}
        scale={1.366}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.375, 2.734, 0.559]}
        rotation={[2.493, 1.163, -2.665]}
        scale={1.938}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.28, 2.699, 0.335]}
        rotation={[2.74, 0.459, -2.715]}
        scale={0.886}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-4.892, 2.568, 0.549]}
        rotation={[0.503, -0.06, -0.405]}
        scale={1.225}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.169, 2.61, 0.325]}
        rotation={[2.677, -0.24, -3.129]}
        scale={2.598}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.305, 2.556, 0.454]}
        rotation={[0.57, -0.254, -0.076]}
        scale={1.432}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.335, 2.772, 0.449]}
        rotation={[0.676, 1.006, -0.654]}
        scale={0.938}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.313, 2.639, 0.463]}
        rotation={[2.444, 0.715, -2.19]}
        scale={1.137}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.304, 2.492, 0.369]}
        rotation={[-0.324, -1.178, -1.2]}
        scale={1.336}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.136, 2.586, 0.388]}
        rotation={[-3.12, 0.093, 3.127]}
        scale={2.368}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.287, 2.666, 0.316]}
        rotation={[0.473, 1.071, -0.311]}
        scale={0.772}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.341, 2.658, 0.354]}
        rotation={[2.403, 0.816, -2.819]}
        scale={2.144}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf002|Dupli|5_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.026, 2.61, 0.305]}
        rotation={[2.058, 0.884, -2.605]}
        scale={2.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.201, 2.631, 0.317]}
        rotation={[2.773, -0.013, -3.029]}
        scale={2.364}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.357, 2.49, 0.454]}
        rotation={[1.987, 0.401, -1.293]}
        scale={0.829}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.289, 2.596, 0.654]}
        rotation={[0.694, 0.81, -0.692]}
        scale={2.007}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.15, 2.158, 0.398]}
        rotation={[1.158, 1.057, -1.248]}
        scale={1.011}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.055, 2.546, 0.682]}
        rotation={[2.875, -0.417, 2.999]}
        scale={1.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.339, 2.427, 0.598]}
        rotation={[-1.627, -1.013, -1.488]}
        scale={0.837}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.103, 2.559, 0.251]}
        rotation={[2.212, -0.323, -2.99]}
        scale={1.947}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-5.424, 2.337, 0.455]}
        rotation={[1.329, -0.532, 1.725]}
        scale={0.778}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.86, 2.567, 0.609]}
        rotation={[0.147, -0.976, -0.518]}
        scale={1.786}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-5.092, 2.728, 0.37]}
        rotation={[2.765, 0.211, -3]}
        scale={1.081}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.188, 2.615, 0.187]}
        rotation={[-0.125, 0.118, 0.017]}
        scale={1.152}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.322, 2.617, 0.706]}
        rotation={[2.74, -0.565, 2.387]}
        scale={1.868}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-5.052, 2.604, 0.685]}
        rotation={[0.72, -0.746, 0.363]}
        scale={1.299}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-5.134, 2.679, 0.27]}
        rotation={[0.189, -0.484, 0.01]}
        scale={2.551}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.111, 2.602, 0.32]}
        rotation={[2.769, 0.079, -2.957]}
        scale={1.645}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-4.955, 2.624, 0.53]}
        rotation={[2.666, -0.723, 2.549]}
        scale={2.479}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-4.994, 2.489, 0.549]}
        rotation={[0.822, -1.303, 0.734]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-5.008, 2.608, 0.481]}
        rotation={[-3.132, 1.154, 3.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-5.175, 2.611, 0.329]}
        rotation={[2.886, -0.365, 3.029]}
        scale={1.3}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.106, 2.609, 0.359]}
        rotation={[-3.087, 0.631, 3.026]}
        scale={0.802}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.401, 2.612, 0.492]}
        rotation={[2.81, 1.185, -2.748]}
        scale={1.564}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.102, 2.586, 0.364]}
        rotation={[2, -0.911, 1.773]}
        scale={0.87}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.383, 2.678, 0.454]}
        rotation={[0.886, 0.966, -0.927]}
        scale={1.185}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.254, 2.633, 0.305]}
        rotation={[0.492, 0.582, -0.291]}
        scale={1.926}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.074, 2.568, 0.165]}
        rotation={[1.162, 0.946, -1.76]}
        scale={1.565}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-5.127, 2.631, 0.313]}
        rotation={[2.526, 0.801, -2.938]}
        scale={1.114}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.163, 2.639, 0.338]}
        rotation={[1.068, -1.024, 1.082]}
        scale={1.219}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.117, 2.635, 0.706]}
        rotation={[0.626, -0.8, 0.584]}
        scale={1.36}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.328, 2.563, 0.498]}
        rotation={[-0.747, -1.006, -0.851]}
        scale={0.832}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-4.998, 2.618, 0.348]}
        rotation={[0.819, 1.011, -0.757]}
        scale={0.868}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-5.255, 2.625, 0.673]}
        rotation={[0.317, -0.189, 0.103]}
        scale={0.911}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.181, 2.534, 0.204]}
        rotation={[-0.156, -0.561, -0.028]}
        scale={1.982}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.176, 2.666, 0.297]}
        rotation={[2.502, -0.542, 2.889]}
        scale={0.962}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5.001, 2.596, 0.486]}
        rotation={[3.092, 1.035, 3.093]}
        scale={0.855}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.968, 2.655, 0.541]}
        rotation={[0.496, 0.022, -0.02]}
        scale={2.516}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-5.177, 2.656, 0.32]}
        rotation={[2.734, 0.023, 3.063]}
        scale={2.292}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.091, 2.602, 0.287]}
        rotation={[0.158, -0.236, -0.018]}
        scale={1.18}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-4.987, 2.628, 0.53]}
        rotation={[2.73, -0.023, 2.988]}
        scale={0.871}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-4.963, 2.608, 0.606]}
        rotation={[1.455, 1.05, -1.558]}
        scale={1.626}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-5.03, 2.646, 0.488]}
        rotation={[2.515, 0.998, -2.555]}
        scale={2.665}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-5.027, 2.608, 0.316]}
        rotation={[0.625, 0.672, -0.826]}
        scale={1.444}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-4.962, 2.624, 0.538]}
        rotation={[2.666, -0.301, 2.999]}
        scale={0.761}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-5.123, 2.561, 0.308]}
        rotation={[0.107, -0.272, 0.017]}
        scale={1.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-4.981, 2.573, 0.447]}
        rotation={[0.743, -0.716, 0.589]}
        scale={1.779}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-5.008, 2.605, 0.452]}
        rotation={[3.083, 0.492, 3.109]}
        scale={1.695}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-5.039, 2.574, 0.354]}
        rotation={[0.406, -1.108, 0.267]}
        scale={1.178}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-5.019, 2.537, 0.327]}
        rotation={[-0.174, -0.816, -0.224]}
        scale={0.853}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-5.328, 2.559, 0.552]}
        rotation={[0.273, -1.22, 0.185]}
        scale={0.894}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.129, 2.629, 0.296]}
        rotation={[0.443, -0.217, -0.034]}
        scale={1.31}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-5.014, 2.609, 0.65]}
        rotation={[0.684, 0.756, -0.604]}
        scale={0.87}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.217, 2.606, 0.724]}
        rotation={[2.867, 0.643, -3.097]}
        scale={1.189}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-4.981, 2.612, 0.603]}
        rotation={[2.312, -1.113, 2.334]}
        scale={1.446}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.153, 2.64, 0.355]}
        rotation={[2.977, 0.15, 3.138]}
        scale={2.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.214, 2.619, 0.298]}
        rotation={[2.002, 1.151, -2.119]}
        scale={1.771}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.08, 2.699, 0.274]}
        rotation={[2.412, 0.22, -2.929]}
        scale={1.551}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-5.005, 2.675, 0.501]}
        rotation={[2.536, -0.538, 2.767]}
        scale={0.853}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-5.141, 2.643, 0.276]}
        rotation={[2.435, 0.258, 3.007]}
        scale={0.91}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.104, 2.673, 0.272]}
        rotation={[1.285, 1.055, -1.403]}
        scale={0.939}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-5.151, 2.709, 0.393]}
        rotation={[2.611, 0.673, -2.985]}
        scale={1.115}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-5.271, 2.57, 0.279]}
        rotation={[2.085, -0.86, 2.684]}
        scale={1.454}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-5.007, 2.614, 0.585]}
        rotation={[0.326, -0.217, 0.139]}
        scale={1.328}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.539, 2.49, 0.618]}
        rotation={[-2.737, 1.078, 2.609]}
        scale={1.22}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-5.007, 2.628, 0.7]}
        rotation={[3.092, -0.094, 3.061]}
        scale={2.247}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.291, 2.459, 0.671]}
        rotation={[0.326, 0.698, -1.541]}
        scale={0.81}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-5.216, 2.72, 0.341]}
        rotation={[2.088, -1.126, 2.15]}
        scale={0.916}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-4.99, 2.59, 0.465]}
        rotation={[2.587, 1.163, -2.598]}
        scale={2.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-4.997, 2.597, 0.486]}
        rotation={[2.651, -0.602, 2.603]}
        scale={0.913}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.085, 2.632, 0.349]}
        rotation={[-3.107, 0.873, 3.046]}
        scale={0.836}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.305, 2.545, 0.395]}
        rotation={[2.869, -0.861, 2.788]}
        scale={1.215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.28, 2.632, 0.423]}
        rotation={[0.367, -1.346, 0.294]}
        scale={0.965}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.044, 2.626, 0.276]}
        rotation={[0.078, 0.037, 0.033]}
        scale={0.901}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.204, 2.623, 0.83]}
        rotation={[-3.124, 0.31, 3.07]}
        scale={1.004}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-5.033, 2.659, 0.485]}
        rotation={[0.783, 1.246, -0.831]}
        scale={2.448}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-5.002, 2.655, 0.586]}
        rotation={[2.376, -0.884, 2.535]}
        scale={0.981}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-5.329, 2.629, 0.39]}
        rotation={[2.836, -1.17, 2.82]}
        scale={0.768}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.14, 2.656, 0.245]}
        rotation={[2.035, 0.892, -2.281]}
        scale={2.538}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.24, 2.692, 0.307]}
        rotation={[2.731, 0.233, -2.812]}
        scale={1.668}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-4.991, 2.684, 0.469]}
        rotation={[2.635, -0.393, 2.907]}
        scale={0.931}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.189, 2.68, 0.456]}
        rotation={[3.092, -0.111, 3.107]}
        scale={0.908}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.272, 2.646, 0.27]}
        rotation={[0.216, 0.858, -0.091]}
        scale={1.579}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.124, 2.552, 0.252]}
        rotation={[-0.393, -0.289, -0.128]}
        scale={0.868}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.348, 2.666, 0.564]}
        rotation={[0.795, -1.027, 0.649]}
        scale={1.545}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.319, 2.599, 0.459]}
        rotation={[0.91, -1.27, 0.902]}
        scale={2.404}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.357, 2.717, 0.31]}
        rotation={[0.339, 0.702, -0.358]}
        scale={1.608}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-4.977, 2.61, 0.446]}
        rotation={[2.776, 0.334, -2.908]}
        scale={0.849}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-4.951, 2.641, 0.462]}
        rotation={[0.252, 0.056, -0.492]}
        scale={0.966}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-5.138, 2.656, 0.445]}
        rotation={[-2.882, 0.218, 2.995]}
        scale={0.873}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.375, 2.764, 0.469]}
        rotation={[0.403, 0.981, -0.497]}
        scale={1.761}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.348, 2.71, 0.296]}
        rotation={[2.049, 1.291, -2.452]}
        scale={1.983}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-4.97, 2.616, 0.562]}
        rotation={[0.482, 0.342, 0.034]}
        scale={1.375}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-4.977, 2.614, 0.363]}
        rotation={[0.433, -1.242, 0.384]}
        scale={1.365}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-4.973, 2.651, 0.57]}
        rotation={[0.588, -0.777, 0.68]}
        scale={0.823}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.193, 2.646, 0.788]}
        rotation={[2.847, 0.092, 3.053]}
        scale={1.63}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.348, 2.61, 0.371]}
        rotation={[2.717, 0.934, 3.112]}
        scale={2.117}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.037, 2.682, 0.545]}
        rotation={[2.628, 0.079, 2.879]}
        scale={0.882}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-5.359, 2.711, 0.315]}
        rotation={[0.477, 1.122, -0.373]}
        scale={1.975}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.304, 2.643, 0.344]}
        rotation={[1.252, 1.304, -1.145]}
        scale={0.839}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.536, 2.481, 0.516]}
        rotation={[-0.805, 1.231, 0.694]}
        scale={1.471}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.216, 2.65, 0.364]}
        rotation={[2.791, -0.745, 3.057]}
        scale={1.667}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.378, 2.747, 0.567]}
        rotation={[2.31, -1.041, 2.685]}
        scale={2.467}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.27, 2.689, 0.332]}
        rotation={[1.136, 1.169, -0.85]}
        scale={0.858}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-4.902, 2.549, 0.586]}
        rotation={[-2.163, -1.16, -2.173]}
        scale={1.826}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.152, 2.578, 0.34]}
        rotation={[2.995, 0.703, -3.097]}
        scale={2.378}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.368, 2.669, 0.498]}
        rotation={[2.814, 0.085, -2.779]}
        scale={0.784}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.361, 2.756, 0.452]}
        rotation={[2.618, 0.371, -3.034]}
        scale={0.812}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.318, 2.661, 0.467]}
        rotation={[0.269, -0.82, 0.235]}
        scale={1.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.295, 2.654, 0.332]}
        rotation={[2.348, 0.855, -2.785]}
        scale={0.862}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.082, 2.532, 0.377]}
        rotation={[2.787, -0.631, 2.218]}
        scale={2.028}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.276, 2.68, 0.308]}
        rotation={[1.328, 1.24, -1.734]}
        scale={0.826}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.363, 2.583, 0.423]}
        rotation={[0.378, 1.093, -0.411]}
        scale={2.596}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf001|Dupli|6_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.059, 2.65, 0.239]}
        rotation={[1.129, 1.032, -1.534]}
        scale={1.586}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.216, 2.66, 0.31]}
        rotation={[2.765, -0.366, 3.073]}
        scale={2.544}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.147, 2.089, 0.47]}
        rotation={[2.489, 0.299, -3.128]}
        scale={0.93}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.299, 2.604, 0.642]}
        rotation={[2.726, 0.805, -3.038]}
        scale={1.717}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.127, 2.137, 0.402]}
        rotation={[2.698, -0.631, 3.066]}
        scale={0.834}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.143, 2.142, 0.407]}
        rotation={[3.021, 0.014, 3.055]}
        scale={0.855}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.342, 2.385, 0.634]}
        rotation={[1.386, 0.145, -2.155]}
        scale={0.879}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.109, 2.55, 0.302]}
        rotation={[-0.269, -0.473, -0.135]}
        scale={1.587}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-5.022, 2.582, 0.5]}
        rotation={[3.082, 0.829, -3.109]}
        scale={1.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.85, 2.556, 0.595]}
        rotation={[0.774, 0.059, -0.639]}
        scale={1.557}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-5.108, 2.709, 0.385]}
        rotation={[0.36, 0.024, 0.136]}
        scale={1.736}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.137, 2.586, 0.245]}
        rotation={[1.574, 0.888, -2.033]}
        scale={2.557}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.323, 2.615, 0.704]}
        rotation={[2.924, -0.253, 2.437]}
        scale={2.173}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-5.029, 2.591, 0.705]}
        rotation={[0.838, -0.932, 0.417]}
        scale={1.767}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-5.125, 2.687, 0.248]}
        rotation={[2.019, 1.126, -2.069]}
        scale={2.703}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.127, 2.624, 0.292]}
        rotation={[0.343, -0.248, 0.06]}
        scale={2.366}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-4.928, 2.633, 0.533]}
        rotation={[0.519, 0.041, -0.092]}
        scale={1.162}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-5.145, 2.636, 0.629]}
        rotation={[0.036, 0.907, -0.021]}
        scale={1.234}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-4.972, 2.638, 0.524]}
        rotation={[2.57, -0.314, 2.9]}
        scale={1.213}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-5.256, 2.651, 0.319]}
        rotation={[2.59, 0.578, -3.108]}
        scale={2.26}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.126, 2.631, 0.367]}
        rotation={[2.94, 0.017, -3.135]}
        scale={2.413}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.402, 2.567, 0.495]}
        rotation={[0.955, -0.535, 1.071]}
        scale={1.254}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.174, 2.586, 0.315]}
        rotation={[2.715, 0.855, -2.958]}
        scale={2.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.392, 2.669, 0.475]}
        rotation={[2.686, -0.038, -3.117]}
        scale={0.971}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.241, 2.658, 0.285]}
        rotation={[0.129, -0.002, -0.098]}
        scale={2.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.042, 2.531, 0.172]}
        rotation={[0.824, 0.945, -1.335]}
        scale={1.351}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-5.129, 2.656, 0.309]}
        rotation={[2.769, 0.738, -3.086]}
        scale={1.693}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.197, 2.645, 0.319]}
        rotation={[0.71, -0.931, 0.836]}
        scale={1.886}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.115, 2.652, 0.702]}
        rotation={[0.519, -0.036, -0.213]}
        scale={0.847}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.358, 2.579, 0.441]}
        rotation={[0.28, -1.03, 0.171]}
        scale={2.41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-5, 2.659, 0.338]}
        rotation={[0.181, 0.214, 0.009]}
        scale={0.974}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-5.277, 2.644, 0.643]}
        rotation={[0.433, -0.566, 0.129]}
        scale={0.814}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.188, 2.503, 0.151]}
        rotation={[-0.062, 1.008, -0.67]}
        scale={2.442}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.19, 2.643, 0.27]}
        rotation={[0.668, 1.16, -0.938]}
        scale={1.667}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5.018, 2.63, 0.529]}
        rotation={[2.792, 0.201, 3.042]}
        scale={2.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.951, 2.614, 0.559]}
        rotation={[1.451, 0.93, -1.297]}
        scale={2.266}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-5.22, 2.666, 0.333]}
        rotation={[0.364, 0.097, -0.289]}
        scale={2.063}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.089, 2.593, 0.32]}
        rotation={[0.193, -0.222, -0.016]}
        scale={1.694}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-4.978, 2.644, 0.581]}
        rotation={[0.714, -0.928, 0.397]}
        scale={1.279}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-4.909, 2.597, 0.631]}
        rotation={[0.691, -1.338, 0.622]}
        scale={1.508}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-5.016, 2.63, 0.52]}
        rotation={[1.41, 1.374, -1.55]}
        scale={2.691}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-5.09, 2.593, 0.209]}
        rotation={[1.996, -0.964, 2.441]}
        scale={0.807}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-4.955, 2.683, 0.544]}
        rotation={[1.509, -1.249, 1.403]}
        scale={2.393}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-5.149, 2.514, 0.293]}
        rotation={[2.441, 0.468, 3.091]}
        scale={1.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-4.979, 2.587, 0.439]}
        rotation={[2.865, 0.079, 2.78]}
        scale={1.088}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-4.994, 2.667, 0.47]}
        rotation={[0.542, -0.305, 0.576]}
        scale={1.686}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-5.07, 2.545, 0.35]}
        rotation={[2.66, -0.603, 2.736]}
        scale={1.225}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-5.02, 2.504, 0.329]}
        rotation={[0.598, 0.631, -0.958]}
        scale={1.103}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-5.348, 2.594, 0.386]}
        rotation={[0.542, 0.529, -0.055]}
        scale={2.091}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.133, 2.608, 0.272]}
        rotation={[0.689, 1.17, -1.144]}
        scale={1.557}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-4.977, 2.551, 0.695]}
        rotation={[0.889, -1.05, 0.428]}
        scale={2.451}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.204, 2.599, 0.722]}
        rotation={[3.01, -0.382, 3.028]}
        scale={1.48}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-4.963, 2.621, 0.555]}
        rotation={[0.479, -0.116, 0.026]}
        scale={0.863}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.216, 2.623, 0.314]}
        rotation={[2.654, 0.01, -2.918]}
        scale={2.586}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.237, 2.598, 0.324]}
        rotation={[0.147, -0.112, -0.129]}
        scale={2.437}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.04, 2.709, 0.234]}
        rotation={[0.275, -0.476, 0.057]}
        scale={2.635}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-4.963, 2.683, 0.527]}
        rotation={[2.646, -0.551, 2.813]}
        scale={1.093}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-5.177, 2.658, 0.257]}
        rotation={[2.441, 0.767, -2.575]}
        scale={1.79}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.095, 2.68, 0.297]}
        rotation={[0.471, 0.825, -0.549]}
        scale={0.859}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-5.151, 2.706, 0.38]}
        rotation={[1.934, -1.159, 1.634]}
        scale={0.894}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-5.373, 2.481, 0.199]}
        rotation={[2.51, 0.46, -3.072]}
        scale={1.439}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-5.048, 2.542, 0.635]}
        rotation={[0.015, 0.836, -0.131]}
        scale={1.343}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.58, 2.418, 0.58]}
        rotation={[1.388, -0.519, 1.153]}
        scale={0.786}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-5.004, 2.606, 0.736]}
        rotation={[2.99, -0.672, 2.945]}
        scale={1.315}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.087, 2.594, 0.365]}
        rotation={[2.726, -0.46, 2.558]}
        scale={1.38}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-5.224, 2.728, 0.346]}
        rotation={[0.585, -0.17, -0.142]}
        scale={1.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-5.01, 2.61, 0.489]}
        rotation={[2.299, -0.81, 2.506]}
        scale={0.844}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-4.975, 2.577, 0.448]}
        rotation={[2.484, 0.48, -3.137]}
        scale={2.278}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.11, 2.661, 0.391]}
        rotation={[2.871, 0.164, -3.076]}
        scale={0.81}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.295, 2.545, 0.37]}
        rotation={[2.922, -1.23, 2.857]}
        scale={2.658}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.233, 2.648, 0.389]}
        rotation={[2.547, -0.985, 2.75]}
        scale={2.732}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.082, 2.626, 0.342]}
        rotation={[2.209, 1.117, -1.975]}
        scale={1.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.179, 2.583, 0.865]}
        rotation={[1.85, -1.014, 1.314]}
        scale={0.786}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-5.033, 2.635, 0.436]}
        rotation={[1.921, 1.276, -2.105]}
        scale={2.274}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-4.994, 2.648, 0.557]}
        rotation={[2.718, -0.469, 2.792]}
        scale={0.918}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-5.309, 2.645, 0.366]}
        rotation={[0.459, 0.123, -0.097]}
        scale={0.908}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.14, 2.626, 0.231]}
        rotation={[0.069, -0.256, -0.077]}
        scale={2.632}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.21, 2.711, 0.306]}
        rotation={[2.616, 0.638, -2.73]}
        scale={2.014}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-4.991, 2.68, 0.492]}
        rotation={[2.638, 0.624, -2.536]}
        scale={0.837}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.176, 2.635, 0.434]}
        rotation={[3.027, 0.298, 3.069]}
        scale={1.649}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.239, 2.646, 0.18]}
        rotation={[-0.041, -0.17, 0.013]}
        scale={1.281}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.131, 2.499, 0.352]}
        rotation={[-0.553, -0.029, 0.107]}
        scale={2.598}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.349, 2.678, 0.511]}
        rotation={[2.01, 1.289, -2.071]}
        scale={2.188}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.36, 2.621, 0.512]}
        rotation={[2.775, -0.885, 2.755]}
        scale={2.438}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.393, 2.717, 0.31]}
        rotation={[2.659, 0.344, -2.973]}
        scale={1.215}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-4.969, 2.63, 0.424]}
        rotation={[0.537, 0.751, -0.369]}
        scale={0.838}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-4.956, 2.647, 0.472]}
        rotation={[1.039, -1.262, 1.072]}
        scale={0.841}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-5.09, 2.594, 0.333]}
        rotation={[1.809, -1.071, 1.871]}
        scale={1.408}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.405, 2.729, 0.493]}
        rotation={[2.046, 1.226, -2.1]}
        scale={2.485}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.426, 2.664, 0.302]}
        rotation={[0.215, 0.812, -0.139]}
        scale={2.176}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-4.988, 2.602, 0.547]}
        rotation={[1.846, -1.193, 1.979]}
        scale={1.788}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-5.056, 2.584, 0.301]}
        rotation={[0.843, 0.838, -1.076]}
        scale={1.856}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-5.004, 2.633, 0.591]}
        rotation={[1.529, -1.205, 1.549]}
        scale={0.783}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.254, 2.636, 0.742]}
        rotation={[1.343, -1.148, 1.186]}
        scale={1.853}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.34, 2.59, 0.343]}
        rotation={[2.528, 0.163, 3.037]}
        scale={1.662}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.018, 2.689, 0.559]}
        rotation={[2.567, -0.58, 2.999]}
        scale={1.132}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-5.338, 2.701, 0.331]}
        rotation={[2.558, 0.047, 2.711]}
        scale={0.941}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.294, 2.646, 0.365]}
        rotation={[0.678, -0.953, 0.276]}
        scale={0.849}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.302, 2.7, 0.311]}
        rotation={[0.722, 0.943, -0.642]}
        scale={0.83}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.162, 2.576, 0.356]}
        rotation={[2.961, -0.67, 2.951]}
        scale={1.192}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.388, 2.726, 0.6]}
        rotation={[1.123, 1.106, -1.329]}
        scale={1.33}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.258, 2.699, 0.317]}
        rotation={[0.606, 0.469, -0.564]}
        scale={0.889}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-4.94, 2.507, 0.663]}
        rotation={[1.383, 0.407, -0.964]}
        scale={2.057}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.13, 2.536, 0.323]}
        rotation={[3.105, 0.61, 3.053]}
        scale={2.209}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.357, 2.667, 0.524]}
        rotation={[1.066, 1.191, -1.182]}
        scale={0.813}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.395, 2.734, 0.441]}
        rotation={[2.739, -0.105, 3.124]}
        scale={1.404}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.302, 2.659, 0.451]}
        rotation={[2.636, -0.824, 2.572]}
        scale={1.241}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.281, 2.672, 0.313]}
        rotation={[1.735, 1.206, -2.051]}
        scale={0.868}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.353, 2.711, 0.315]}
        rotation={[0.314, -0.128, -0.156]}
        scale={1.067}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.261, 2.674, 0.281]}
        rotation={[0.363, 0.368, -0.091]}
        scale={1.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.295, 2.654, 0.471]}
        rotation={[0.103, -1.043, -0.582]}
        scale={1.335}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf000|Dupli|7_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.124, 2.643, 0.252]}
        rotation={[0.563, -1.055, 0.886]}
        scale={1.785}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0'].geometry}
        material={materials.Plant_Soil}
        position={[-5.255, 2.639, 0.282]}
        rotation={[0.73, 1.282, -0.603]}
        scale={1.563}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0001'].geometry}
        material={materials.Plant_Soil}
        position={[-5.154, 2.147, 0.499]}
        rotation={[2.593, -0.148, 3.123]}
        scale={0.949}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0002'].geometry}
        material={materials.Plant_Soil}
        position={[-5.32, 2.583, 0.617]}
        rotation={[2.629, -0.403, 2.922]}
        scale={2.336}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0003'].geometry}
        material={materials.Plant_Soil}
        position={[-5.129, 2.143, 0.384]}
        rotation={[2.405, -0.877, 2.173]}
        scale={0.869}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0004'].geometry}
        material={materials.Plant_Soil}
        position={[-5.235, 2.569, 0.33]}
        rotation={[-2.951, 0.06, 3.131]}
        scale={0.851}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0005'].geometry}
        material={materials.Plant_Soil}
        position={[-5.1, 2.605, 0.344]}
        rotation={[3.012, 0.622, -3.115]}
        scale={1.801}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0006'].geometry}
        material={materials.Plant_Soil}
        position={[-5.126, 2.516, 0.338]}
        rotation={[1.046, 0.868, -1.507]}
        scale={0.788}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0007'].geometry}
        material={materials.Plant_Soil}
        position={[-4.939, 2.624, 0.503]}
        rotation={[2.464, -1.1, 2.36]}
        scale={2.455}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0008'].geometry}
        material={materials.Plant_Soil}
        position={[-4.873, 2.545, 0.571]}
        rotation={[0.908, 0.145, -0.987]}
        scale={0.932}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0009'].geometry}
        material={materials.Plant_Soil}
        position={[-5.15, 2.668, 0.411]}
        rotation={[0.923, -0.569, 0.263]}
        scale={1.659}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0010'].geometry}
        material={materials.Plant_Soil}
        position={[-5.092, 2.548, 0.296]}
        rotation={[-0.06, -0.235, -0.107]}
        scale={0.795}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0011'].geometry}
        material={materials.Plant_Soil}
        position={[-5.33, 2.615, 0.666]}
        rotation={[3.079, 0.124, -3.11]}
        scale={1.817}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0012'].geometry}
        material={materials.Plant_Soil}
        position={[-4.977, 2.587, 0.726]}
        rotation={[2.94, -1.152, 2.917]}
        scale={2.41}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0013'].geometry}
        material={materials.Plant_Soil}
        position={[-5.126, 2.69, 0.256]}
        rotation={[0.221, -0.472, -0.046]}
        scale={1.438}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0014'].geometry}
        material={materials.Plant_Soil}
        position={[-5.175, 2.632, 0.3]}
        rotation={[0.405, -0.321, -0.047]}
        scale={2.55}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0015'].geometry}
        material={materials.Plant_Soil}
        position={[-4.905, 2.634, 0.565]}
        rotation={[0.785, -1.245, 0.751]}
        scale={0.808}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0016'].geometry}
        material={materials.Plant_Soil}
        position={[-5.168, 2.66, 0.637]}
        rotation={[0.113, 0.199, -0.167]}
        scale={2.507}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0017'].geometry}
        material={materials.Plant_Soil}
        position={[-4.938, 2.653, 0.558]}
        rotation={[0.482, -0.303, -0.051]}
        scale={1.404}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0018'].geometry}
        material={materials.Plant_Soil}
        position={[-5.332, 2.632, 0.265]}
        rotation={[2.123, 1.167, -2.602]}
        scale={2.453}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0019'].geometry}
        material={materials.Plant_Soil}
        position={[-5.151, 2.68, 0.341]}
        rotation={[2.97, -0.03, 3.072]}
        scale={1.147}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0020'].geometry}
        material={materials.Plant_Soil}
        position={[-5.056, 2.568, 0.642]}
        rotation={[-0.078, 0.407, -0.046]}
        scale={0.966}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0021'].geometry}
        material={materials.Plant_Soil}
        position={[-5.275, 2.543, 0.242]}
        rotation={[-0.044, 0.216, -0.053]}
        scale={0.989}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0022'].geometry}
        material={materials.Plant_Soil}
        position={[-5.402, 2.685, 0.461]}
        rotation={[2.832, 1.172, -2.811]}
        scale={1.64}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0023'].geometry}
        material={materials.Plant_Soil}
        position={[-5.256, 2.676, 0.274]}
        rotation={[1.962, 1.015, -2.331]}
        scale={0.984}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0024'].geometry}
        material={materials.Plant_Soil}
        position={[-5.018, 2.498, 0.2]}
        rotation={[-0.163, -0.09, -0.072]}
        scale={0.878}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0025'].geometry}
        material={materials.Plant_Soil}
        position={[-5.167, 2.683, 0.309]}
        rotation={[2.572, -0.746, 2.997]}
        scale={2.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0026'].geometry}
        material={materials.Plant_Soil}
        position={[-5.222, 2.622, 0.3]}
        rotation={[1.231, 1.122, -1.385]}
        scale={2.447}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0027'].geometry}
        material={materials.Plant_Soil}
        position={[-5.126, 2.671, 0.693]}
        rotation={[0.729, -0.905, 0.456]}
        scale={1.098}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0028'].geometry}
        material={materials.Plant_Soil}
        position={[-5.376, 2.55, 0.333]}
        rotation={[-0.179, 0.661, 0.105]}
        scale={2.51}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0029'].geometry}
        material={materials.Plant_Soil}
        position={[-4.98, 2.656, 0.302]}
        rotation={[0.75, 0.72, -0.798]}
        scale={1.094}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0030'].geometry}
        material={materials.Plant_Soil}
        position={[-5.28, 2.64, 0.619]}
        rotation={[1.713, 1.104, -1.544]}
        scale={1.541}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0031'].geometry}
        material={materials.Plant_Soil}
        position={[-5.194, 2.471, 0.097]}
        rotation={[1.916, 0.804, -2.464]}
        scale={1.399}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0032'].geometry}
        material={materials.Plant_Soil}
        position={[-5.188, 2.616, 0.274]}
        rotation={[2.085, 1.072, -2.313]}
        scale={1.401}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0033'].geometry}
        material={materials.Plant_Soil}
        position={[-5, 2.668, 0.533]}
        rotation={[0.503, 1.073, -0.527]}
        scale={2.136}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0034'].geometry}
        material={materials.Plant_Soil}
        position={[-4.963, 2.578, 0.565]}
        rotation={[0.506, -0.795, -0.024]}
        scale={1.35}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0035'].geometry}
        material={materials.Plant_Soil}
        position={[-5.34, 2.615, 0.313]}
        rotation={[0.261, 0.34, -0.189]}
        scale={2.339}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0036'].geometry}
        material={materials.Plant_Soil}
        position={[-5.096, 2.566, 0.315]}
        rotation={[0.88, 1.084, -0.915]}
        scale={2.512}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0037'].geometry}
        material={materials.Plant_Soil}
        position={[-4.978, 2.65, 0.608]}
        rotation={[0.492, -0.448, 0.098]}
        scale={0.962}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0038'].geometry}
        material={materials.Plant_Soil}
        position={[-4.86, 2.593, 0.608]}
        rotation={[-0.188, -1.139, -0.328]}
        scale={0.968}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0039'].geometry}
        material={materials.Plant_Soil}
        position={[-5.003, 2.641, 0.578]}
        rotation={[2.673, 0.52, 3.012]}
        scale={2.601}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0040'].geometry}
        material={materials.Plant_Soil}
        position={[-5.11, 2.58, 0.182]}
        rotation={[0.244, 0.997, -0.922]}
        scale={0.767}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0041'].geometry}
        material={materials.Plant_Soil}
        position={[-4.961, 2.708, 0.552]}
        rotation={[1.029, -1.099, 1.033]}
        scale={0.924}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0042'].geometry}
        material={materials.Plant_Soil}
        position={[-5.078, 2.631, 0.297]}
        rotation={[0.565, 0.815, -0.328]}
        scale={1.912}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0043'].geometry}
        material={materials.Plant_Soil}
        position={[-4.993, 2.599, 0.42]}
        rotation={[0.91, -1.282, 0.779]}
        scale={1.341}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0044'].geometry}
        material={materials.Plant_Soil}
        position={[-4.983, 2.693, 0.453]}
        rotation={[2.87, 0.631, -2.854]}
        scale={1.348}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0045'].geometry}
        material={materials.Plant_Soil}
        position={[-5.113, 2.643, 0.427]}
        rotation={[2.64, -0.733, 2.192]}
        scale={0.823}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0046'].geometry}
        material={materials.Plant_Soil}
        position={[-5.002, 2.615, 0.497]}
        rotation={[2.851, 0.325, 2.701]}
        scale={1.203}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0047'].geometry}
        material={materials.Plant_Soil}
        position={[-5.337, 2.624, 0.326]}
        rotation={[0.669, 1.094, -0.474]}
        scale={0.955}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0048'].geometry}
        material={materials.Plant_Soil}
        position={[-5.141, 2.626, 0.237]}
        rotation={[1.846, 0.924, -2.172]}
        scale={1.45}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0049'].geometry}
        material={materials.Plant_Soil}
        position={[-4.986, 2.529, 0.699]}
        rotation={[-2.952, -0.943, -3.079]}
        scale={1.784}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0050'].geometry}
        material={materials.Plant_Soil}
        position={[-5.208, 2.602, 0.754]}
        rotation={[3.129, 0.484, 3.029]}
        scale={0.833}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0051'].geometry}
        material={materials.Plant_Soil}
        position={[-4.97, 2.626, 0.524]}
        rotation={[2.035, -1.213, 1.989]}
        scale={2.405}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0052'].geometry}
        material={materials.Plant_Soil}
        position={[-5.223, 2.603, 0.248]}
        rotation={[1.492, 1.14, -1.742]}
        scale={2.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0053'].geometry}
        material={materials.Plant_Soil}
        position={[-5.27, 2.564, 0.354]}
        rotation={[0.79, 1.062, -0.579]}
        scale={2.272}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0054'].geometry}
        material={materials.Plant_Soil}
        position={[-5.019, 2.71, 0.228]}
        rotation={[1.184, 1.025, -1.325]}
        scale={1.61}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0055'].geometry}
        material={materials.Plant_Soil}
        position={[-4.921, 2.668, 0.561]}
        rotation={[1.311, -1.286, 1.442]}
        scale={1.703}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0056'].geometry}
        material={materials.Plant_Soil}
        position={[-5.171, 2.666, 0.245]}
        rotation={[2.315, 0.805, -2.561]}
        scale={1.476}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0057'].geometry}
        material={materials.Plant_Soil}
        position={[-5.069, 2.666, 0.293]}
        rotation={[0.99, 0.967, -1.081]}
        scale={1.422}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0058'].geometry}
        material={materials.Plant_Soil}
        position={[-5.121, 2.716, 0.348]}
        rotation={[1.486, -1.062, 1.405]}
        scale={1.439}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0059'].geometry}
        material={materials.Plant_Soil}
        position={[-5.402, 2.426, 0.211]}
        rotation={[2.414, 0.145, 2.985]}
        scale={2.183}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0060'].geometry}
        material={materials.Plant_Soil}
        position={[-5.154, 2.555, 0.676]}
        rotation={[-0.206, 0.482, -0.059]}
        scale={0.947}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0061'].geometry}
        material={materials.Plant_Soil}
        position={[-5.021, 2.593, 0.626]}
        rotation={[0.547, 1.02, -0.55]}
        scale={0.836}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0062'].geometry}
        material={materials.Plant_Soil}
        position={[-5.045, 2.538, 0.771]}
        rotation={[0.799, -0.671, 0.001]}
        scale={2.73}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0063'].geometry}
        material={materials.Plant_Soil}
        position={[-5.065, 2.624, 0.347]}
        rotation={[0.676, -0.225, 0.264]}
        scale={0.82}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0064'].geometry}
        material={materials.Plant_Soil}
        position={[-5.196, 2.72, 0.351]}
        rotation={[1.872, -1.139, 1.558]}
        scale={0.836}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0065'].geometry}
        material={materials.Plant_Soil}
        position={[-5.019, 2.637, 0.512]}
        rotation={[2.519, -0.76, 2.835]}
        scale={2.063}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0066'].geometry}
        material={materials.Plant_Soil}
        position={[-4.972, 2.505, 0.406]}
        rotation={[0.125, -0.078, -0.789]}
        scale={1.149}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0067'].geometry}
        material={materials.Plant_Soil}
        position={[-5.129, 2.669, 0.412]}
        rotation={[3.001, 0.336, -3.131]}
        scale={1.592}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0068'].geometry}
        material={materials.Plant_Soil}
        position={[-5.316, 2.524, 0.367]}
        rotation={[1.113, 0.941, -0.807]}
        scale={2.012}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0069'].geometry}
        material={materials.Plant_Soil}
        position={[-5.194, 2.659, 0.349]}
        rotation={[1.313, -1.221, 1.083]}
        scale={2.307}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0070'].geometry}
        material={materials.Plant_Soil}
        position={[-5.09, 2.586, 0.388]}
        rotation={[2.665, 0.477, -2.927]}
        scale={2.268}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0071'].geometry}
        material={materials.Plant_Soil}
        position={[-5.15, 2.528, 0.86]}
        rotation={[-3.003, 0.581, 3.105]}
        scale={1.765}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0072'].geometry}
        material={materials.Plant_Soil}
        position={[-5.016, 2.572, 0.399]}
        rotation={[2.504, 0.458, -2.704]}
        scale={1.709}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0073'].geometry}
        material={materials.Plant_Soil}
        position={[-5.021, 2.643, 0.52]}
        rotation={[2.621, -0.287, 2.883]}
        scale={1.294}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0074'].geometry}
        material={materials.Plant_Soil}
        position={[-5.307, 2.662, 0.321]}
        rotation={[2.257, -0.926, 2.544]}
        scale={1.856}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0075'].geometry}
        material={materials.Plant_Soil}
        position={[-5.091, 2.579, 0.23]}
        rotation={[-0.08, 0.405, -0.073]}
        scale={1.592}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0076'].geometry}
        material={materials.Plant_Soil}
        position={[-5.158, 2.732, 0.341]}
        rotation={[0.896, -0.935, 0.631]}
        scale={1.27}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0077'].geometry}
        material={materials.Plant_Soil}
        position={[-5.007, 2.669, 0.538]}
        rotation={[0.829, -1.142, 0.947]}
        scale={1.766}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0078'].geometry}
        material={materials.Plant_Soil}
        position={[-5.141, 2.61, 0.384]}
        rotation={[3.045, 0.136, 3.126]}
        scale={1.226}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0079'].geometry}
        material={materials.Plant_Soil}
        position={[-5.259, 2.613, 0.184]}
        rotation={[-0.168, 0.66, 0.048]}
        scale={0.796}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0080'].geometry}
        material={materials.Plant_Soil}
        position={[-5.142, 2.453, 0.382]}
        rotation={[2.952, -0.71, 1.626]}
        scale={1.306}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0081'].geometry}
        material={materials.Plant_Soil}
        position={[-5.376, 2.662, 0.495]}
        rotation={[0.343, 1.036, -0.416]}
        scale={2.093}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0082'].geometry}
        material={materials.Plant_Soil}
        position={[-5.412, 2.597, 0.562]}
        rotation={[2.789, 0.987, -2.762]}
        scale={2.261}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0083'].geometry}
        material={materials.Plant_Soil}
        position={[-5.401, 2.701, 0.333]}
        rotation={[0.25, 1.337, -0.304]}
        scale={1.513}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0084'].geometry}
        material={materials.Plant_Soil}
        position={[-4.915, 2.657, 0.405]}
        rotation={[0.428, 0.198, -0.345]}
        scale={1.354}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0085'].geometry}
        material={materials.Plant_Soil}
        position={[-4.938, 2.665, 0.483]}
        rotation={[0.7, 0.675, -0.378]}
        scale={0.834}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0086'].geometry}
        material={materials.Plant_Soil}
        position={[-5.097, 2.522, 0.267]}
        rotation={[0.178, -0.223, -0.091]}
        scale={1.394}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0087'].geometry}
        material={materials.Plant_Soil}
        position={[-5.411, 2.691, 0.522]}
        rotation={[1.078, 1.185, -1.105]}
        scale={1.383}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0088'].geometry}
        material={materials.Plant_Soil}
        position={[-5.51, 2.576, 0.347]}
        rotation={[1.138, -0.61, 1.717]}
        scale={1.854}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0089'].geometry}
        material={materials.Plant_Soil}
        position={[-5.013, 2.596, 0.529]}
        rotation={[0.343, 0.964, -0.449]}
        scale={1.261}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0090'].geometry}
        material={materials.Plant_Soil}
        position={[-5.143, 2.518, 0.294]}
        rotation={[-0.288, -0.465, -0.289]}
        scale={1.883}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0091'].geometry}
        material={materials.Plant_Soil}
        position={[-5.016, 2.607, 0.585]}
        rotation={[0.432, 0.117, 0.006]}
        scale={0.902}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0092'].geometry}
        material={materials.Plant_Soil}
        position={[-5.258, 2.619, 0.712]}
        rotation={[2.969, 0.584, -3.107]}
        scale={1.219}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0093'].geometry}
        material={materials.Plant_Soil}
        position={[-5.32, 2.578, 0.315]}
        rotation={[0.241, 0.683, -0.25]}
        scale={1.753}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0094'].geometry}
        material={materials.Plant_Soil}
        position={[-5.023, 2.673, 0.602]}
        rotation={[2.703, -0.321, 3.069]}
        scale={1.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0095'].geometry}
        material={materials.Plant_Soil}
        position={[-5.317, 2.715, 0.31]}
        rotation={[2.496, 0.674, -2.892]}
        scale={2.173}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0096'].geometry}
        material={materials.Plant_Soil}
        position={[-5.289, 2.639, 0.395]}
        rotation={[0.666, -0.865, 0.23]}
        scale={0.826}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0097'].geometry}
        material={materials.Plant_Soil}
        position={[-5.311, 2.709, 0.317]}
        rotation={[0.448, 0.35, -0.159]}
        scale={0.922}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0098'].geometry}
        material={materials.Plant_Soil}
        position={[-5.355, 2.667, 0.569]}
        rotation={[2.645, -0.329, 3.071]}
        scale={0.843}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0099'].geometry}
        material={materials.Plant_Soil}
        position={[-5.433, 2.688, 0.653]}
        rotation={[2.821, -0.041, 2.831]}
        scale={1.494}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0100'].geometry}
        material={materials.Plant_Soil}
        position={[-5.203, 2.675, 0.347]}
        rotation={[1.012, -0.99, 0.962]}
        scale={0.886}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0101'].geometry}
        material={materials.Plant_Soil}
        position={[-5.004, 2.459, 0.674]}
        rotation={[0.486, -1.041, -0.093]}
        scale={1.571}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0102'].geometry}
        material={materials.Plant_Soil}
        position={[-5.139, 2.518, 0.322]}
        rotation={[2.992, -0.99, 2.26]}
        scale={1.907}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0103'].geometry}
        material={materials.Plant_Soil}
        position={[-5.359, 2.65, 0.538]}
        rotation={[2.682, 0.794, -2.729]}
        scale={1.099}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0104'].geometry}
        material={materials.Plant_Soil}
        position={[-5.431, 2.71, 0.437]}
        rotation={[1.904, 1.403, -1.972]}
        scale={1.628}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0105'].geometry}
        material={materials.Plant_Soil}
        position={[-5.292, 2.648, 0.473]}
        rotation={[0.441, -0.293, -0.334]}
        scale={1.578}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0106'].geometry}
        material={materials.Plant_Soil}
        position={[-5.306, 2.678, 0.305]}
        rotation={[2.072, -0.835, 2.318]}
        scale={0.868}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0107'].geometry}
        material={materials.Plant_Soil}
        position={[-5.315, 2.712, 0.307]}
        rotation={[2.709, 0.308, -3.031]}
        scale={1.225}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0108'].geometry}
        material={materials.Plant_Soil}
        position={[-5.236, 2.637, 0.257]}
        rotation={[2.101, 1.067, -2.55]}
        scale={2.408}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0109'].geometry}
        material={materials.Plant_Soil}
        position={[-5.322, 2.593, 0.518]}
        rotation={[0.45, -0.382, -0.144]}
        scale={2.193}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['IvyLeaf|Ivy_leaf004|Dupli|8_Ivy_leaf_0110'].geometry}
        material={materials.Plant_Soil}
        position={[-5.18, 2.611, 0.306]}
        rotation={[0.282, 0.038, 0.021]}
        scale={1.266}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle009_������12_0'].geometry}
        material={materials.material_29}
        position={[-3.872, 1.464, -5.65]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Circle009_������12_0001'].geometry}
        material={materials.material_29}
        position={[-3.303, 1.464, -5.65]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.082}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder004_������12_0'].geometry}
        material={materials.material_29}
        position={[-3.303, 1.685, -5.696]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={-0.004}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder004_������12_0001'].geometry}
        material={materials.material_29}
        position={[-3.589, 1.685, -5.696]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={-0.004}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['Cylinder004_������12_0002'].geometry}
        material={materials.material_29}
        position={[-3.872, 1.685, -5.696]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={-0.004}
      />
    </group>
  );
}

useGLTF.preload('/assets/GLBModel/B2.glb');
