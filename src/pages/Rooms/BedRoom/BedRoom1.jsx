import React, { Suspense, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Dropdown } from 'primereact/dropdown';
import { Kitchen1Model } from '../../Models/KitchenModel/Kitchen1Model';
import Loader from '../../../components/Loader';
import { useNavigate } from 'react-router-dom';

const getImages = (size, length) => {
  const images = [];
  for (let i = 1; i <= +length; i++) {
    const imgPath = `/assets/tiles/${size}/${i}.jpg`;
    images.push(imgPath);
  }
  return images;
};

const Kitchen1 = () => {
  const navigate = useNavigate();
  const canvasRef = useRef();
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const controlsRef = useRef();

  const [selectedValue, setSelectedValue] = useState('600x600');
  const [selectedFolderLength, setSelectedFolderLength] = useState(156);
  const [selectedImage, setSelectedImage] = useState(null);
  const [gapSize, setGapSize] = useState(0.02);
  const [layout, setLayout] = useState('simple');
  const [tileImages, setTileImages] = useState([]);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    const images = getImages(selectedValue, selectedFolderLength);
    setTileImages(images);
    setSelectedImage(images[0] || null);
  }, [selectedValue, selectedFolderLength]);

  const handleSelectionChange = (e) => {
    const newValue = e.value;
    setSelectedValue(newValue);
    const folderLength =
      {
        '100x300': 160,
        '200x200': 82,
        '800x800': 22,
        '600x600': 156,
        '800x1600': 52,
        '1200x200': 14,
        '1200x600': 71,
      }[newValue] || 156;
    setSelectedFolderLength(folderLength);
    const images = getImages(newValue, folderLength);
    setTileImages(images);
    setSelectedImage(images[0] || null);
  };

  const downloadRecording = async () => {
    const canvas = canvasRef.current;
    const stream = canvas.captureStream(60);
    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: 'video/webm; codecs=vp9',
      videoBitsPerSecond: 25000000, // High-quality recording
    });
    recordedChunksRef.current = [];

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunksRef.current.push(event.data);
      }
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'canvas-recording.webm';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };

    mediaRecorderRef.current.start();
    setRecording(true);

    let angle = 0;
    const interval = setInterval(() => {
      if (controlsRef.current) {
        angle += 0.02;
        controlsRef.current.setAzimuthalAngle(angle);
        controlsRef.current.update();
      }
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      mediaRecorderRef.current.stop();
      setRecording(false);
    }, 5000);
  };

  return (
    <div className='flex w-screen h-screen'>
      <div className='w-[15%] h-full bg-gray-200 p-4 flex flex-col justify-between'>
        <h2 className='text-lg font-bold mb-2'>Select Tile Size</h2>
        <Dropdown
          options={[...Object.keys(getImages)].map((size) => ({
            label: size,
            value: size,
          }))}
          value={selectedValue}
          onChange={handleSelectionChange}
          optionLabel='label'
          placeholder='Select Size'
          className='w-full md:w-14rem'
        />
        <div className='mt-4 text-center'>
          <button
            className='bg-blue-500 text-white p-2 rounded'
            onClick={downloadRecording}
            disabled={recording}
          >
            {recording ? 'Recording...' : 'Download Video'}
          </button>
        </div>
      </div>

      <div className='w-[85%] h-full relative'>
        <Suspense fallback={<Loader />}>
          <Canvas
            ref={canvasRef}
            shadows
            camera={{ position: [5, 2, 5] }}
            gl={{ alpha: true, preserveDrawingBuffer: true, antialias: true }}
          >
            <ambientLight intensity={2} />
            <directionalLight position={[1, 1.5, 5]} castShadow />
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              minPolarAngle={1.0}
              maxPolarAngle={1.3}
              minAzimuthAngle={-0.5}
              maxAzimuthAngle={0.5}
              enableRotate
              enableZoom={false}
            />
            {selectedImage && (
              <Kitchen1Model
                selectedImage={selectedImage}
                gapSize={gapSize}
                layout={layout}
              />
            )}
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
};

export default Kitchen1;
