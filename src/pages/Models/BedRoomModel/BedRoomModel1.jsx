import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function BedRoomModel1(props) {
  const { nodes, materials } = useGLTF('/assets/meeting_room.glb');
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[0, 0, 0.954]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.walls_walls_0.geometry}
            material={materials.walls}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.walls_laminate_0.geometry}
            material={materials.laminate}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.walls_wood_0.geometry}
            material={materials.wood}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.walls_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.walls_gold_0.geometry}
            material={materials.gold}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.walls_glass_0.geometry}
            material={materials.glass}
          />
        </group>
        <group
          position={[0, 0.729, 0.954]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ceiling_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ceiling_glow_0.geometry}
            material={materials.glow}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ceiling_walls_0.geometry}
            material={materials.walls}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ceiling_wood_0.geometry}
            material={materials.wood}
          />
        </group>
        <group
          position={[-3.121, 186.32, 551.216]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tv_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tv_screen_0.geometry}
            material={materials.screen}
          />
        </group>
        <group
          position={[321.906, 242.977, 157.309]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp001_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp001_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[321.906, 242.977, -169.352]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp002_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp002_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[321.906, 242.977, 492.836]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp003_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp003_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[321.906, 242.977, -489.097]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp004_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp004_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-322.445, 242.977, 157.309]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp005_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp005_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-322.445, 242.977, -169.352]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp006_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp006_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-322.445, 242.977, 492.459]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp007_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp007_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-322.445, 242.977, -495.74]}
          rotation={[-Math.PI / 2, 0, Math.PI]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.lamp_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[234.091, 1.643, -529.693]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cupboard001_laminate_grey_0.geometry}
            material={materials.laminate_grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cupboard001_gold_0.geometry}
            material={materials.gold}
          />
        </group>
        <group
          position={[-228.917, 1.643, -529.693]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cupboard_laminate_grey_0.geometry}
            material={materials.laminate_grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cupboard_gold_0.geometry}
            material={materials.gold}
          />
        </group>
        <group
          position={[272.598, 325.299, 263.623]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light001_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light001_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[272.598, 325.299, -81.522]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light002_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light002_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[272.598, 325.299, -278.341]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light003_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light003_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[272.598, 325.299, 88.198]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light004_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light004_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-275.072, 325.299, 263.623]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light005_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light005_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-275.072, 325.299, -81.522]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light006_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light006_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-275.072, 325.299, -278.341]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light007_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light007_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-275.072, 325.299, 88.198]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-19.08, 88.207, -223.861]}
          rotation={[-Math.PI / 2, 0, 2.539]}
          scale={141.747}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MacBook_air_macBook_air_0.geometry}
            material={materials.macBook_air}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MacBook_air_screen_0.geometry}
            material={materials.screen}
          />
        </group>
        <group
          position={[-0.984, 337.507, -9.155]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light008_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light008_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-0.984, 337.507, 165.603]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light009_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light009_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-0.984, 337.507, 340.36]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light010_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light010_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-0.984, 337.507, -360.794]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light011_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light011_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[-0.984, 337.507, -186.037]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light012_black_0.geometry}
            material={materials.black}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.light012_glow_0.geometry}
            material={materials.glow}
          />
        </group>
        <group
          position={[234.091, 1.643, 524.061]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[100, 79.934, 100]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cupboard002_laminate_grey_0.geometry}
            material={materials.laminate_grey}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cupboard002_gold_0.geometry}
            material={materials.gold}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.table_wood_0.geometry}
          material={materials.wood}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair001_details_0.geometry}
          material={materials.details}
          position={[2.318, 10.152, -346.049]}
          rotation={[-Math.PI / 2, 0, 0.023]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair002_details_0.geometry}
          material={materials.details}
          position={[153.681, 10.152, -218.199]}
          rotation={[-Math.PI / 2, 0, -1.481]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair003_details_0.geometry}
          material={materials.details}
          position={[155.15, 10.152, -112.392]}
          rotation={[-Math.PI / 2, 0, -1.535]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair004_details_0.geometry}
          material={materials.details}
          position={[153.681, 10.152, -5.115]}
          rotation={[-Math.PI / 2, 0, -1.614]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair005_details_0.geometry}
          material={materials.details}
          position={[153.681, 10.152, 106.57]}
          rotation={[-Math.PI / 2, 0, -1.53]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair006_details_0.geometry}
          material={materials.details}
          position={[153.681, 10.152, 218.255]}
          rotation={[-Math.PI / 2, 0, -1.53]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair007_details_0.geometry}
          material={materials.details}
          position={[-157.372, 10.152, -210.851]}
          rotation={[-Math.PI / 2, 0, 1.66]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair008_details_0.geometry}
          material={materials.details}
          position={[-155.903, 10.152, -105.044]}
          rotation={[-Math.PI / 2, 0, 1.607]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair009_details_0.geometry}
          material={materials.details}
          position={[-157.372, 10.152, 2.232]}
          rotation={[-Math.PI / 2, 0, 1.528]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair010_details_0.geometry}
          material={materials.details}
          position={[-157.372, 10.152, 113.918]}
          rotation={[-Math.PI / 2, 0, 1.611]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair011_details_0.geometry}
          material={materials.details}
          position={[-157.372, 10.152, 225.603]}
          rotation={[-Math.PI / 2, 0, 1.611]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.chair_details_0.geometry}
          material={materials.details}
          position={[39.473, 10.152, 336.034]}
          rotation={[-Math.PI / 2, 0, -2.439]}
          scale={111.333}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plant_details_0.geometry}
          material={materials.details}
          position={[232.633, 113.897, -529.446]}
          rotation={[0, 1.05, 0]}
          scale={[0.524, 0.788, 0.524]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder001_details_0.geometry}
          material={materials.details}
          position={[23.686, 87.297, -258.728]}
          rotation={[-Math.PI / 2, 0, 0.168]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder002_details_0.geometry}
          material={materials.details}
          position={[-74.867, 87.297, -2.197]}
          rotation={[-Math.PI / 2, 0, 1.083]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder003_details_0.geometry}
          material={materials.details}
          position={[9.753, 87.55, 263.758]}
          rotation={[-Math.PI / 2, 0, 2.693]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder004_details_0.geometry}
          material={materials.details}
          position={[79.977, 87.297, -91.757]}
          rotation={[-Math.PI / 2, 0, -1.169]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.fbi_seal_details_0.geometry}
          material={materials.details}
          position={[0, 198.502, -543.683]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={148.079}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_black_0.geometry}
          material={materials.black}
          position={[0, 0, 0.954]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_laminate_grey_0.geometry}
          material={materials.laminate_grey}
          position={[0, 0, 0.954]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[115.803, 115.803, 100]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coffe_cup001_details_0.geometry}
          material={materials.details}
          position={[64.151, 87.893, 75.284]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={122.364}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coffe_cup002_details_0.geometry}
          material={materials.details}
          position={[-56.719, 87.893, -49.602]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={122.364}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coffe_cup003_details_0.geometry}
          material={materials.details}
          position={[52.597, 87.893, -233.582]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={122.364}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.coffe_cup_details_0.geometry}
          material={materials.details}
          position={[-54.258, 87.893, 135.818]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={122.364}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder005_details_0.geometry}
          material={materials.details}
          position={[-81.309, 87.297, -185.963]}
          rotation={[-Math.PI / 2, 0, 1.91]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder006_details_0.geometry}
          material={materials.details}
          position={[85.605, 87.297, 114.582]}
          rotation={[-Math.PI / 2, 0, -1.064]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder007_details_0.geometry}
          material={materials.details}
          position={[83.862, 87.55, 228.246]}
          rotation={[-Math.PI / 2, 0, -1.521]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder008_details_0.geometry}
          material={materials.details}
          position={[85.605, 87.297, 15.921]}
          rotation={[-Math.PI / 2, 0, -1.602]}
          scale={147.697}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder009_details_0.geometry}
          material={materials.details}
          position={[-74.867, 87.297, 247.036]}
          rotation={[-Math.PI / 2, 0, 1.554]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.folder_details_0.geometry}
          material={materials.details}
          position={[-74.867, 87.297, 111.134]}
          rotation={[-Math.PI / 2, 0, 1.554]}
          scale={132.212}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.plant001_details_0.geometry}
          material={materials.details}
          position={[-241.302, 113.897, -529.446]}
          rotation={[0, -1.167, 0]}
          scale={[0.524, 0.788, 0.524]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/assets/meeting_room.glb');
