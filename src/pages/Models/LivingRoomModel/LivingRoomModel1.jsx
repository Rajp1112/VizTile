import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import floorTexture1 from '/assets/tiles/600x600/6.jpg';
import simpleLivingRoom from '/assets/GLBModel/cozy_living_room_baked.glb';
import GridMaterial from '../../../components/GridMaterial';
import wallTextureauto from '/assets/tiles/600x600/6.jpg';
import WallMaterial from '../../../components/WallMaterial';

export function LivingRoomModel1(props) {
  const { nodes, materials } = useGLTF(simpleLivingRoom);

  const texture = useTexture(props.selectedImage || floorTexture1);
  const texture2 = useTexture(props.selectedImage2 || floorTexture1);
  const wallTexture1 = useTexture(props.selectedWallImage || wallTextureauto);
  const wallTexture2 = useTexture(props.selectedWallImage2 || wallTextureauto);

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[12.912, 6.741, -447.885]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={117.234}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_Bras_0.geometry}
            material={materials.Bras}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_Heater_Paint_0.geometry}
            material={materials.Heater_Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_Heater_Paint_0_1.geometry}
            material={materials.Heater_Paint}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_Plastic_0.geometry}
            material={materials.Plastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_MEtal_0.geometry}
            material={materials.MEtal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_Bras001_0.geometry}
            material={materials['Bras.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_Heater_Paint001_0.geometry}
            material={materials['Heater_Paint.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_Heater_Paint001_0_1.geometry}
            material={materials['Heater_Paint.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_Plastic001_0.geometry}
            material={materials['Plastic.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Radiator002_MEtal001_0.geometry}
            material={materials['MEtal.001']}
          />
        </group>
        <group
          position={[44.576, 305.711, -413.118]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={141.125}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_Matt_paint_white_0.geometry}
            material={materials.Matt_paint_white}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_Matt_paint_black_0.geometry}
            material={materials.Matt_paint_black}
          />
        </group>
        <group
          position={[-109.551, 35.223, -53.759]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={100}
        >
          <group
            position={[0.008, 0.028, 0.022]}
            rotation={[0.023, -0.01, -0.076]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017_book_cover003_0.geometry}
              material={materials['book_cover.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017_stacked_paper004_0.geometry}
              material={materials['stacked_paper.004']}
            />
          </group>
          <group position={[-0.011, 0, 0.045]} rotation={[0.03, -0.018, 0.094]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube020_book_cover002_0.geometry}
              material={materials['book_cover.002']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube020_stacked_paper003_0.geometry}
              material={materials['stacked_paper.003']}
            />
          </group>
          <group position={[0.017, 0.017, 0]} rotation={[0.012, -0.03, 0.144]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube029_book_cover005_0.geometry}
              material={materials['book_cover.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube029_stacked_paper006_0.geometry}
              material={materials['stacked_paper.006']}
            />
          </group>
          <group
            position={[-0.015, -0.002, 0.067]}
            rotation={[0.031, -0.021, 0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_book_cover001_0.geometry}
              material={materials['book_cover.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_stacked_paper002_0.geometry}
              material={materials['stacked_paper.002']}
            />
          </group>
          <group
            position={[0.013, 0.013, 0.009]}
            rotation={[0.009, -0.003, 0.059]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_book_cover004_0.geometry}
              material={materials['book_cover.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_stacked_paper005_0.geometry}
              material={materials['stacked_paper.005']}
            />
          </group>
          <group
            position={[-0.021, -0.007, 0.088]}
            rotation={[0.03, -0.02, 0.004]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube033_book_cover_0.geometry}
              material={materials.book_cover}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube033_stacked_paper001_0.geometry}
              material={materials['stacked_paper.001']}
            />
          </group>
        </group>
        <group
          position={[-52.694, 8.657, -217.254]}
          rotation={[-Math.PI / 2, 0, -0.768]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Chair_Material010_0.geometry}
            material={materials['Material.010']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Material012_0.geometry}
            material={materials['Material.012']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube034_Fabric001_0.geometry}
            material={materials['Fabric.001']}
            rotation={[1.484, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube035_Fabric001_0.geometry}
            material={materials['Fabric.001']}
            rotation={[-0.166, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube036_Material002_0.geometry}
            material={materials['Material.002']}
            rotation={[-0.166, 0, 0]}
          />
        </group>
        <group
          position={[-43.775, 69.675, -204.95]}
          rotation={[-0.567, -0.506, -3.005]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah_Tecido_0.geometry}
            material={materials.Tecido}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah_Tecido_0_1.geometry}
            material={materials.Tecido}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah_Tecido_0_2.geometry}
            material={materials.Tecido}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah_Tecido_0_3.geometry}
            material={materials.Tecido}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah_Tecido_0_4.geometry}
            material={materials.Tecido}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah_Tecido_0_5.geometry}
            material={materials.Tecido}
          >
            <meshStandardMaterial color='white' />
          </mesh>
        </group>
        <group
          position={[-84.744, 29.016, 60.759]}
          rotation={[-1.307, 1.163, -1.22]}
          scale={[60.373, 75.366, 75.366]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah001_Tecido003_0.geometry}
            material={materials['Tecido.003']}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah001_Tecido003_0_1.geometry}
            material={materials['Tecido.003']}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah001_Tecido003_0_2.geometry}
            material={materials['Tecido.003']}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah001_Tecido003_0_3.geometry}
            material={materials['Tecido.003']}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pillow_migramah001_Tecido004_0.geometry}
            material={materials['Tecido.004']}
          >
            <meshStandardMaterial color='white' />
          </mesh>
        </group>
        <group
          position={[-84.373, 34.351, -77.036]}
          rotation={[-Math.PI / 2, 0, 0.721]}
          scale={146.482}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Metal_Support_Coffee_Cup_-_Metal_0'].geometry}
            material={materials['Coffee_Cup_-_Metal']}
            position={[0, 0, 0.007]}
            rotation={[0, 0, 0.11]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Glass_Coffee_Cup_-_Glass_0'].geometry}
            material={materials['Coffee_Cup_-_Glass']}
            position={[0, 0, 0.035]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Foam_Coffee_Cup_-_Foam_0'].geometry}
            material={materials['Coffee_Cup_-_Foam']}
            position={[0, 0, 0.023]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Coffee_Coffee_Cup_-_Coffee_0'].geometry}
            material={materials['Coffee_Cup_-_Coffee']}
            position={[0, 0, 0.023]}
          />
        </group>
        <group
          position={[-82.283, 8.715, 61.976]}
          rotation={[-Math.PI / 2, 0, 0.608]}
          scale={157.572}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Straw_basket-02_rattan_0'].geometry}
            material={materials.rattan}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Straw_basket-02_rattan_0_1'].geometry}
            material={materials.rattan}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Straw_basket-02_rattan_0_2'].geometry}
            material={materials.rattan}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Straw_basket-02_rattan_0_3'].geometry}
            material={materials.rattan}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Straw_basket-02_rattan_0_4'].geometry}
            material={materials.rattan}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Straw_basket-02_rattan_0_5'].geometry}
            material={materials.rattan}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Straw_basket-02_rattan_0_6'].geometry}
            material={materials.rattan}
          />
        </group>
        <group
          position={[-72.457, 31.866, 73.936]}
          rotation={[-0.084, 0.677, 0.056]}
          scale={124.075}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.Round_Towel_Hanger_2_Round_Towel_Hanger_Fabric_0.geometry
            }
            material={materials.Round_Towel_Hanger_Fabric}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes.Round_Towel_Hanger_2_Round_Towel_Hanger_Fabric_0_1.geometry
            }
            material={materials.Round_Towel_Hanger_Fabric}
          />
        </group>
        <group
          position={[-108.561, 61.608, -92.209]}
          rotation={[-1.547, 0.42, -3.139]}
          scale={[157.558, 126.292, 246.205]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Jug_of_flowers_A001_Material007_0.geometry}
            material={materials['Material.007']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SM_Jug_of_flowers_A001_Material007_0_1.geometry}
            material={materials['Material.007']}
          />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Material011_0.geometry}
            material={materials['Material.011']}
          >
            <meshStandardMaterial color='white' />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Material013_0.geometry}
            material={materials['Material.013']}
          >
            <meshStandardMaterial color='white' />
          </mesh>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Leather_Sofa_Fabric002_0.geometry}
          material={materials['Fabric.002']}
          position={[-249.085, 9.573, -90.576]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={[119.566, 100, 100]}
        />

        {/* Wall ================================================================================================= */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material_0.geometry}
          material={materials.Material}
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
          geometry={nodes.Cube007_Material023_0.geometry}
          material={materials['Material.023']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008__0.geometry}
          material={materials['Cube.008__0']}
          position={[-98.518, 245.201, -51.755]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[21.84, 56.351, 4.891]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_Birch_Wood_Flooring__English_0.geometry}
          material={materials.Birch_Wood_Flooring__English}
          position={[-32.126, 156.005, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[227.307, 455.433, 150]}
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
          geometry={nodes.Cube014_Material023_0.geometry}
          material={materials['Material.023']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube038_Material023_0.geometry}
          material={materials['Material.023']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CURTAIN_2008_Material001_0.geometry}
          material={materials['Material.001']}
          position={[41.58, 153.713, -412.759]}
          scale={[88.718, 141.125, 141.125]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Grapes_of_Wrath_Grapes_of_Wrath_0.geometry}
          material={materials.Grapes_of_Wrath}
          position={[-91.07, 36.512, -11.797]}
          rotation={[Math.PI, 0.824, -Math.PI]}
          scale={112.835}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Verre_Fabric_Upholstery_001a001_0.geometry}
          material={materials['Fabric_Upholstery_001a.001']}
          position={[-81.806, 38.757, -19.75]}
          rotation={[-Math.PI / 2, 0, -0.063]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['M��che_Lampion_-_m��che_0'].geometry}
          material={materials['Lampion_-_mche']}
          position={[-81.833, 40.017, -19.792]}
          rotation={[-Math.PI / 2, -0.303, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Flamme_Lampion_-_Flamme_0'].geometry}
          material={materials['Lampion_-_Flamme']}
          position={[-81.764, 40.667, -19.792]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Cire_Lampion_-_Cire_0'].geometry}
          material={materials['Lampion_-_Cire']}
          position={[-81.833, 39.603, -19.792]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Alu_Lampion_-_Alu_0'].geometry}
          material={materials['Lampion_-_Alu']}
          position={[-81.833, 39.603, -19.792]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath012_Metal08_PBR_0.geometry}
          material={materials.Metal08_PBR}
          position={[-256.267, 109.195, -293.482]}
          rotation={[-2.945, -0.472, -1.481]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_Metal_scratched001_0.geometry}
          material={materials['Metal_scratched.001']}
          position={[-257.136, 132.103, -290.729]}
          rotation={[-Math.PI / 2, 0, -0.306]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_Metal_scratched002_0.geometry}
          material={materials['Metal_scratched.002']}
          position={[-256.405, 109.157, -293.288]}
          rotation={[-1.572, 0, 1.279]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle006_Metal_scratched_0.geometry}
          material={materials.Metal_scratched}
          position={[-256.316, 136.343, -293.325]}
          rotation={[-Math.PI / 2, 0, -0.829]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_Leather_Fabric_01_0.geometry}
          material={materials.Leather_Fabric_01}
          position={[-256.316, 136.313, -293.325]}
          rotation={[-Math.PI / 2, 0, -0.829]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002__0.geometry}
          material={materials['Cube.008__0']}
          position={[-259.437, 131.756, -283.514]}
          rotation={[-0.496, -0.31, 1.407]}
          scale={0.492}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_Old_Wood_procedural_2_0.geometry}
          material={materials.Old_Wood_procedural_2}
          position={[-255.956, 102.318, -294.281]}
          rotation={[-2.61, -0.462, -1.315]}
          scale={0.492}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_Material009_0.geometry}
          material={materials['Material.009']}
          position={[-99.936, 33.325, -53.904]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material003_0.geometry}
          material={materials['Material.003']}
          position={[-108.696, 41.619, -90.874]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[143.124, 143.124, 121.188]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Leather_Fabric_01002_0.geometry}
          material={materials['Leather_Fabric_01.002']}
          position={[-39.218, 239.823, -90.104]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[31.619, 31.619, 16.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_Tecido005_0.geometry}
          material={materials['Tecido.005']}
          position={[-174.881, 118.704, -18.316]}
          rotation={[-2.746, -0.034, 2.073]}
          scale={[43.356, 78.797, 78.797]}
        >
          <meshStandardMaterial color='white' />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_Material021_0.geometry}
          material={materials['Material.021']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath_Material008_0.geometry}
          material={materials['Material.008']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_Material004_0.geometry}
          material={materials['Material.004']}
          position={[-14.557, 160.375, -690.782]}
          scale={[393.607, 262.139, 163.935]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(simpleLivingRoom);
