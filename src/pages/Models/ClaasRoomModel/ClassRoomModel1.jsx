import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import floorTexture1 from '/assets/tiles/600x600/6.jpg';
import wallTextureauto from '/assets/tiles/600x600/6.jpg';

import GridMaterial from '../../../components/GridMaterial';
import WallMaterial from '../../../components/WallMaterial';

export function ClassRoomModel1(props) {
  const { nodes, materials } = useGLTF('/assets/GLBModel/class_room_2021.glb');
  const texture = useTexture(props.selectedImage || floorTexture1);
  const texture2 = useTexture(props.selectedImage2 || floorTexture1);
  const wallTexture1 = useTexture(props.selectedWallImage || wallTextureauto);
  const wallTexture2 = useTexture(props.selectedWallImage2 || wallTextureauto);
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.147}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[2000, 2000, 1500]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Ground_0.geometry}
              material={materials.Ground}
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
              geometry={nodes.Plane_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Cement_0.geometry}
              material={materials.Cement}
            />
          </group>
          <group
            position={[1704.251, 100, 1678.491]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube005_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[1608.119, 584.875, 1314.012]}
            rotation={[0.221, 0, Math.PI / 2]}
            scale={[92.49, 76.156, 13.835]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube008_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            position={[1608.119, 584.875, 1284.532]}
            rotation={[0.221, 0, Math.PI / 2]}
            scale={[92.49, 76.156, 13.835]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube009_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[1608.119, 583.476, 1245.208]}
            rotation={[0.337, 0, Math.PI / 2]}
            scale={[92.49, 76.156, 13.835]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube010_Material001_0.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group
            position={[1608.119, 586.75, 1165.326]}
            rotation={[2.972, 0, -Math.PI / 2]}
            scale={[92.49, 76.156, 13.835]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_Material004_0.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            position={[1618.256, 722.336, 1238.366]}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            scale={[77.66, 63.945, 7.688]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube012_Material001_0.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group
            position={[1618.256, 734.844, 1225.882]}
            rotation={[-Math.PI / 2, 0, -1.831]}
            scale={[77.66, 63.945, 4.428]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube013_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group
            position={[-542.04, 428.689, -36.961]}
            rotation={[-Math.PI / 2, 0, -0.528]}
            scale={[108.145, 77.652, 0.606]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017_Material004_0.geometry}
              material={materials['Material.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017_Paper_0.geometry}
              material={materials.Paper}
            />
          </group>
          <group
            position={[-780.303, 441.013, 10.428]}
            rotation={[Math.PI / 2, 0, -1.947]}
            scale={[92.49, 76.156, 4.613]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube015_Material004_0.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            position={[-60.537, 1202.257, -2000]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1391.443, 50.396, 549.324]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube016_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube016_Material014_0.geometry}
              material={materials['Material.014']}
            />
          </group>
          <group
            position={[-1660.667, -1.911, -889.963]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[-337.357, 100, 81.954]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube018_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube018_Cement_0.geometry}
              material={materials.Cement}
            />
          </group>
          <group
            position={[1186.514, 428.689, -36.961]}
            rotation={[-Math.PI / 2, 0, -0.528]}
            scale={[108.145, 77.652, 0.606]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube024_Material008_0.geometry}
              material={materials['Material.008']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube024_Paper_0.geometry}
              material={materials.Paper}
            />
          </group>
          <group
            position={[919.423, 428.508, -63.74]}
            rotation={[-Math.PI / 2, 0, 0.473]}
            scale={[99.281, 71.287, 0.557]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube025_Material006_0.geometry}
              material={materials['Material.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube025_Paper_0.geometry}
              material={materials.Paper}
            />
          </group>
          <group
            position={[1021.786, 432.239, 114.992]}
            rotation={[Math.PI / 2, 0, -0.716]}
            scale={[92.49, 76.156, 4.613]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_Material007_0.geometry}
              material={materials['Material.007']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube026_Material006_0.geometry}
              material={materials['Material.006']}
            />
          </group>
          <group
            position={[391.781, 526.56, -152.763]}
            rotation={[-Math.PI / 2, 0.314, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder010_Material001_0.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder010_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            position={[346.019, 526.56, -202.853]}
            rotation={[-1.878, 0.064, 1.371]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011_Material003_0.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder011_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            position={[-1206.074, 428.689, 1131.88]}
            rotation={[-Math.PI / 2, 0, 0.575]}
            scale={[108.145, 77.652, 0.606]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_Paper_0.geometry}
              material={materials.Paper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube030_Material001_0.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group
            position={[-903.081, 428.689, 1147.877]}
            rotation={[-Math.PI / 2, 0, -0.251]}
            scale={[108.145, 77.652, 0.606]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_Paper_0.geometry}
              material={materials.Paper}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube031_Material004_0.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            position={[-1676.119, 324.999, -1754.119]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube035_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube035_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[-1503.58, 809.874, -1650.115]}
            rotation={[Math.PI / 2, 1.35, 0]}
            scale={[92.49, 76.156, 13.835]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube036_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube036_Material004_0.geometry}
              material={materials['Material.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube036_Fabric_0.geometry}
              material={materials.Fabric}
            />
          </group>
          <group
            position={[-1533.06, 809.874, -1650.115]}
            rotation={[Math.PI / 2, 1.35, 0]}
            scale={[92.49, 76.156, 13.835]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube037_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube037_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            position={[-1571.13, 947.335, -1658.771]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[77.66, 63.945, 7.688]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube040_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube040_Material001_0.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group
            position={[-1583.613, 959.842, -1658.771]}
            rotation={[-Math.PI / 2, 0, -0.26]}
            scale={[77.66, 63.945, 4.428]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube041_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube041_Material003_0.geometry}
              material={materials['Material.003']}
            />
          </group>
          <group position={[0, 2006, -1986]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_Material004_0.geometry}
              material={materials['Material.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_Material005_0.geometry}
              material={materials['Material.005']}
            />
          </group>
          <group
            position={[-2021.819, 1207.105, -548.84]}
            rotation={[-Math.PI / 2, 0, -Math.PI]}
            scale={[-268.534, 268.534, 431.326]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube044_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube044_Material012_0.geometry}
              material={materials['Material.012']}
            />
          </group>
          <group
            position={[-1637.264, 1117.13, -1749.207]}
            rotation={[-Math.PI / 2, 0.314, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_Material001_0.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder007_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            position={[-1683.026, 1117.13, -1799.298]}
            rotation={[-1.878, 0.064, 1.371]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder014_Material003_0.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder014_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group
            position={[1669.528, -1.911, -889.963]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[337.357, 100, 81.954]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube019_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube019_Cement_0.geometry}
              material={materials.Cement}
            />
          </group>
          <group
            position={[1704.251, 254.16, 1678.491]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube034_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube034_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[1704.251, 408.16, 1678.491]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube045_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube045_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[1704.251, 562.16, 1678.491]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube046_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube046_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[1704.251, 716.16, 1678.491]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube047_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube047_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[1704.251, 870.16, 1678.491]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube048_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube048_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[1704.251, 100, 1141.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube007_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[1704.251, 254, 1141.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube049_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube049_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[1704.251, 408, 1141.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[201.381, 201.381, 67.492]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube050_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube050_Metal001_0.geometry}
              material={materials['Metal.001']}
            />
          </group>
          <group
            position={[-2021.819, 1207.105, 568.877]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[268.534, 268.534, 431.326]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube051_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube051_Material012_0.geometry}
              material={materials['Material.012']}
            />
          </group>
          <group
            position={[-2012.267, 1308.742, -1305.244]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[29.587, 546.675, 210.004]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube043_Wood_0.geometry}
              material={materials.Wood}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube043_Material013_0.geometry}
              material={materials['Material.013']}
            />
          </group>
          <group
            position={[1953.452, 587.961, -1581.045]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[29.816, 252.569, 94.475]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube032_Material011_0.geometry}
              material={materials['Material.011']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube032_Material012_0.geometry}
              material={materials['Material.012']}
            />
          </group>
          <group
            position={[713.825, 1541.932, -532.665]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[47.974, 383.793, 15.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube055_Material017_0.geometry}
              material={materials['Material.017']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube055_Material016_0.geometry}
              material={materials['Material.016']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube055_Material015_0.geometry}
              material={materials['Material.015']}
            />
          </group>
          <group
            position={[-716.658, 1541.932, -532.665]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[47.974, 383.793, 15.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube054_Material017_0.geometry}
              material={materials['Material.017']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube054_Material016_0.geometry}
              material={materials['Material.016']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube054_Material015_0.geometry}
              material={materials['Material.015']}
            />
          </group>
          <group
            position={[713.825, 1541.932, 1065.621]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[47.974, 383.793, 15.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube056_Material017_0.geometry}
              material={materials['Material.017']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube056_Material016_0.geometry}
              material={materials['Material.016']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube056_Material015_0.geometry}
              material={materials['Material.015']}
            />
          </group>
          <group
            position={[-716.658, 1541.932, 1065.621]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[47.974, 383.793, 15.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube057_Material017_0.geometry}
              material={materials['Material.017']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube057_Material016_0.geometry}
              material={materials['Material.016']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube057_Material015_0.geometry}
              material={materials['Material.015']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Wood_0.geometry}
            material={materials.Wood}
            position={[-930.214, 412.828, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[592.043, 285.338, 14.942]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[-1475.519, 391.091, -235.322]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={11.017}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004_Metal_0.geometry}
            material={materials.Metal}
            position={[1717.637, 100, 1678.491]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[216.339, 216.339, 77.253]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006_Metal_0.geometry}
            material={materials.Metal}
            position={[1717.637, 100, 1141.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[216.339, 216.339, 77.253]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[1614.902, 579.388, 1027.06]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[56.895, 56.895, 77.994]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve_Material002_0.geometry}
            material={materials['Material.002']}
            position={[1587.558, 658.897, 1039.663]}
            rotation={[-1.626, -0.348, 0.077]}
            scale={331.572}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve001_Material002_0.geometry}
            material={materials['Material.002']}
            position={[1621.708, 664.593, 1001.063]}
            rotation={[-1.749, 0.071, -2.821]}
            scale={[-331.572, 331.572, 331.572]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_Wall_0.geometry}
            material={materials.Wall}
            position={[0, 1500, -2000]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[2000, 1500, 1500]}
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
            geometry={nodes.Cube020_Wood_0.geometry}
            material={materials.Wood}
            position={[798.34, 412.828, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[592.043, 285.338, 14.942]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[253.035, 391.091, -235.322]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={11.017}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_Fabric_0.geometry}
            material={materials.Fabric}
            position={[513.321, 278.086, 378.758]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus004_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[513.321, 80, 377.992]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_Material_0.geometry}
            material={materials.Material}
            position={[347.103, 480.836, -159.182]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_Material001_0.geometry}
            material={materials['Material.001']}
            position={[319.079, 515.225, -126.652]}
            rotation={[1.753, 0.158, -0.865]}
            scale={[14.781, 14.781, 133.146]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_Material004_0.geometry}
            material={materials['Material.004']}
            position={[305.869, 515.225, -155.219]}
            rotation={[1.519, 0.235, 0.217]}
            scale={[14.781, 14.781, 133.146]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_Material006_0.geometry}
            material={materials['Material.006']}
            position={[-1096.002, 436.098, -28.939]}
            rotation={[-Math.PI, 1.253, Math.PI / 2]}
            scale={[14.781, 14.781, 133.146]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014_Wood_0.geometry}
            material={materials.Wood}
            position={[-823.16, 412.828, 1120.173]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[592.043, 285.338, 14.942]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[-1368.465, 391.091, 884.851]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={11.017}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane003_Wall_0.geometry}
            material={materials.Wall}
            position={[-2000, 1500, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[2000, 1500, 1500]}
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
            geometry={nodes.Plane004_Wall_0.geometry}
            material={materials.Wall}
            position={[0, 1500, 2000]}
            scale={[2000, 1500, 1500]}
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
            geometry={nodes.Cylinder004_Material009_0.geometry}
            material={materials['Material.009']}
            position={[-1790.532, 804.386, -1664.771]}
            rotation={[-Math.PI / 2, 0, -0.795]}
            scale={[56.895, 56.895, 77.994]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve002_Material002_0.geometry}
            material={materials['Material.002']}
            position={[-1777.929, 883.895, -1637.427]}
            rotation={[-1.222, -0.052, 1.666]}
            scale={331.572}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve003_Fabric_0.geometry}
            material={materials.Fabric}
            position={[-1816.53, 889.591, -1671.576]}
            rotation={[-1.643, -0.178, -1.263]}
            scale={[-331.572, 331.572, 331.572]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane005_Material_0.geometry}
            material={materials.Material}
            position={[2.339, 2003.748, -1970.213]}
            rotation={[0, 0, -0.19]}
            scale={7.352}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane006_Material_0.geometry}
            material={materials.Material}
            position={[2.339, 2003.748, -1972.738]}
            rotation={[0, 0, 0.894]}
            scale={4.325}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube038_Material010_0.geometry}
            material={materials['Material.010']}
            position={[1911.873, 1654.411, -1609.11]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 336.92, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube039_World_0.geometry}
            material={materials.World}
            position={[1596.199, 1207.935, -14.38]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[461.283, 608.161, 461.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube042_Material009_0.geometry}
            material={materials['Material.009']}
            position={[-2443.12, 1207.935, 9.09]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[461.283, 608.161, 461.283]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane007_Sloar_0.geometry}
            material={materials.material_0}
            position={[0, 1017.855, 1981.514]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[1218.379, 766.869, 1218.379]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001_Fabric_0.geometry}
            material={materials.Fabric}
            position={[994.377, 278.086, 338.187]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus001_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[994.377, 80, 337.421]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_Fabric_0.geometry}
            material={materials.Fabric}
            position={[1402.985, 278.086, 16.517]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus002_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[1402.985, 80, 15.752]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Fabric_0.geometry}
            material={materials.Fabric}
            position={[-631.36, 278.086, 303.411]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus003_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[-631.36, 80, 302.646]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_Fabric_0.geometry}
            material={materials.Fabric}
            position={[-1216.741, 278.086, 370.064]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus005_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[-1216.741, 80, 369.299]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_Fabric_0.geometry}
            material={materials.Fabric}
            position={[-1573.186, 278.086, -9.565]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus006_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[-1573.186, 80, -10.33]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_Fabric_0.geometry}
            material={materials.Fabric}
            position={[-460.382, 278.086, 1450.99]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus007_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[-460.382, 80, 1450.225]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_Fabric_0.geometry}
            material={materials.Fabric}
            position={[-835.954, 278.086, 1459.336]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus008_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[-835.954, 80, 1458.571]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube029_Fabric_0.geometry}
            material={materials.Fabric}
            position={[-1537.02, 278.086, 1271.551]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={111.436}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Torus009_Metal001_0.geometry}
            material={materials['Metal.001']}
            position={[-1537.02, 80, 1270.786]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube052_Metal_0.geometry}
            material={materials.Metal}
            position={[-1676.12, 324.999, -1767.51]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[216.339, 216.339, 77.253]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder006_Material_0.geometry}
            material={materials.Material}
            position={[-1681.942, 1071.407, -1755.626]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder015_Material001_0.geometry}
            material={materials['Material.001']}
            position={[-1709.966, 1105.795, -1723.097]}
            rotation={[1.753, 0.158, -0.865]}
            scale={[14.781, 14.781, 133.146]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder016_Material004_0.geometry}
            material={materials['Material.004']}
            position={[-1723.176, 1105.795, -1751.664]}
            rotation={[1.519, 0.235, 0.217]}
            scale={[14.781, 14.781, 133.146]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_Wall_0.geometry}
            material={materials.Wall}
            position={[2000, 1500, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[2000, 1500, 1500]}
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
            geometry={nodes.Cube053_Material009_0.geometry}
            material={materials['Material.009']}
            position={[1907.292, 587.961, -1581.045]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 305.017, 100]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube033_Cement_0.geometry}
            material={materials.Cement}
            position={[-2023.752, 0, -2020.902]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane008_Ground_0.geometry}
            material={materials.Ground}
            position={[0, 2312.539, 1314.727]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[2000, 1500, 1500]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/GLBModel/class_room_2021.glb');
