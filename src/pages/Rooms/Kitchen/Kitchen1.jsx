import React, { Suspense, useState, useRef, useEffect } from 'react';
import Loader from '../../../components/Loader';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/Header';
import floorTexture1 from '/assets/tiles/600x600/6.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { Panel } from 'primereact/panel';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { TabView, TabPanel } from 'primereact/tabview';
import RoomCanvas from '../../Canvas/RoomCanvas';
import WallDesign from '../../ModelSidebar/WallTexture/WallDesign';
import WallGapSelection from '../../ModelSidebar/WallTexture/WallGapSelection';
import WallPattern from '../../ModelSidebar/WallTexture/WallPattern';
import ActiveDesign from '../../ModelSidebar/FloorTeture/ActiveDesign';
import PatternSection from '../../ModelSidebar/FloorTeture/PatternSection';
import GapSection from '../../ModelSidebar/FloorTeture/GapSection';
import DownloadButton from '../../../components/DownloadButton';
const getImages = (size, length) => {
  return Array.from({ length }, (_, i) => `/assets/tiles/${size}/${i + 1}.jpg`);
};

const getWallImages = (size, length) => {
  return Array.from({ length }, (_, i) => `/assets/tiles/${size}/${i + 1}.jpg`);
};

const Kitchen1 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const canvasRef = useRef();
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const [activePanel, setActivePanel] = useState('floorPattern');

  // floor tile selection
  const [selectedValue, setSelectedValue] = useState('600x600');
  const [tileImages, setTileImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(floorTexture1);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [layout, setLayout] = useState('simple');
  const [gapSize, setGapSize] = useState(0.02);
  const [gapColor, setGapColor] = useState('#000000');

  // wall tile selection
  const [wallSelectedValue, setWallSelectedValue] = useState('600x600');
  const [wallTileImages, setWallTileImages] = useState([]);
  const [selectedWallImage, setSelectedWallImage] = useState(floorTexture1);
  const [selectedWallImage2, setSelectedWallImage2] = useState(null);
  const [wallLayout, setWallLayout] = useState('simple');
  const [wallGapSize, setWallGapSize] = useState(0.02);
  const [wallGapColor, setWallGapColor] = useState('#333333');

  const [selectedFolderLength, setSelectedFolderLength] = useState(156);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('design');
  const [loading, setLoading] = useState(true);
  const [recording, setRecording] = useState(false);

  const tileDimensions = {
    '100x300': { width: 10, height: 30 },
    '200x200': { width: 20, height: 20 },
    '800x800': { width: 80, height: 80 },
    '600x600': { width: 60, height: 60 },
    '800x1600': { width: 80, height: 160 },
    '1200x200': { width: 120, height: 20 },
    '1200x600': { width: 120, height: 60 },
  };

  const color = [
    { name: 'Muted Gray', colorCode: '#e7e7e7' },
    { name: 'Pure White', colorCode: '#ffffff' },
    { name: 'Soft White', colorCode: '#f9f6f1' },
    { name: 'Light Gray', colorCode: '#bdbdbd' },
    { name: 'Warm Beige', colorCode: '#e1d4c1' },
    { name: 'Dusty Rose', colorCode: '#ddd5d3' },
    { name: 'Pale Ivory', colorCode: '#e3dfd3' },
    { name: 'Olive Tint', colorCode: '#ceceb4' },
    { name: 'Medium Gray', colorCode: '#cbcbcb' },
    { name: 'Dark Charcoal', colorCode: '#383838' },
    { name: 'Cool Gray', colorCode: '#a7a7a7' },
    { name: 'Slate Gray', colorCode: '#8f8f8f' },
    { name: 'Steel Blue', colorCode: '#616b74' },
    { name: 'Mauve Taupe', colorCode: '#7f7775' },
    { name: 'Deep Brown', colorCode: '#4a463d' },
    { name: 'Rich Mahogany', colorCode: '#5a3c34' },
    { name: 'Muted Pink', colorCode: '#be968c' },
    { name: 'Pale Olive', colorCode: '#cac6ad' },
    { name: 'Moss Green', colorCode: '#909080' },
    { name: 'Eggshell White', colorCode: '#e8e9e3' },
    { name: 'Golden Beige', colorCode: '#a28b6b' },
    { name: 'Warm Sand', colorCode: '#b89a74' },
    { name: 'Muted Sage', colorCode: '#d0d0b6' },
    { name: 'Soft Almond', colorCode: '#e5dcd3' },
    { name: 'Ash Gray', colorCode: '#a0a096' },
  ];
  // floor tile selection
  useEffect(() => {
    const images = getImages(selectedValue, selectedFolderLength);
    setTileImages(images);
    setSelectedImage(images[0] || floorTexture1);
    setSelectedImage2(null);
  }, [selectedValue, selectedFolderLength]);

  // wall tile selection
  useEffect(() => {
    const images = getWallImages(wallSelectedValue, selectedFolderLength);
    setWallTileImages(images);
    setSelectedWallImage(images[0] || floorTexture1);
    setSelectedWallImage2(null);
  }, [wallSelectedValue, selectedFolderLength]);

  // floor tile selection
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
    setSelectedImage(images[0] || floorTexture1);
    setSelectedImage2(null);
  };

  // wall tile selection
  const handleWallSelectionChange = (e) => {
    const newValue = e.value;
    setWallSelectedValue(newValue);
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
    const images = getWallImages(newValue, folderLength);
    setWallTileImages(images);
    setSelectedWallImage(images[0] || floorTexture1);
    setSelectedWallImage2(null);
  };

  // floor tile selection
  const handleTileClick = (image, type) => {
    if (type === 'image1') {
      setSelectedImage(image);
    } else if (type === 'image2') {
      setSelectedImage2(image);
    }
  };

  // wall tile selection
  const handleWallTileClick = (image, type) => {
    if (type === 'image1') {
      setSelectedWallImage(image);
    } else if (type === 'image2') {
      setSelectedWallImage2(image);
    }
  };
  // floor tile selection
  const tileWidth = tileDimensions[selectedValue].width / 1000;
  const tileHeight = tileDimensions[selectedValue].height / 1000;

  // wall tile selection
  const wallTileWidth = tileDimensions[wallSelectedValue].width / 1000;
  const wallTileHeight = tileDimensions[wallSelectedValue].height / 1000;

  // floor gap color selection
  const handleGapColorChange = (colorCode) => {
    setGapColor(colorCode);
  };

  // wall gap Color selection
  const handleWallGapColorChange = (colorCode) => {
    setWallGapColor(colorCode);
  };
  const downloadCanvasImage = () => {
    const canvas = canvasRef.current;
    if (canvas && canvas.toDataURL) {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'scene.png';
      link.click();
    } else {
      console.error('Canvas is not ready for download');
    }
  };

  const handleSidebarToggle = (section) => {
    if (activeSection === section) return;

    setActiveSection(section);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.3, ease: 'easeIn' },
    },
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const downloadRecording = async () => {
    const canvas = canvasRef.current;

    const stream = canvas.captureStream(120);
    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: 'video/webm; codecs=vp9',
      videoBitsPerSecond: 25000000,
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
      if (canvasRef.current) {
        angle += 0.02;
        canvasRef.current.setAzimuthalAngle(angle);
        canvasRef.current.update();
      }
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      mediaRecorderRef.current.stop();
      setRecording(false);
    }, 5000);
  };

  const handleToggle = (panel) => {
    setActivePanel(activePanel === panel ? null : panel);
  };
  return (
    <div className='flex flex-col h-screen'>
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center bg-secondary bg-opacity-75 z-50'>
          <Loader />
        </div>
      )}

      <Header showBackButton={true} onClick={() => navigate('/tiles-view')} />
      <div className='flex h-full '>
        {/* Sidebar */}
        <div
          className={`transition-all  duration-300 relative ${
            sidebarOpen
              ? 'w-[20%] p-5  '
              : 'w-0 overflow-hidden overflow-y-scroll'
          } bg-secondary  flex flex-col`}
        >
          {sidebarOpen && (
            <TabView className='justify-center shadow-xl rounded-3xl '>
              <TabPanel header='Floor Texture' className='  m-0'>
                <Panel
                  header='Select Pattern'
                  toggleable
                  collapsed={activePanel !== 'floorPattern'}
                  onToggle={() => handleToggle('floorPattern')}
                >
                  <div className='m-0  justify-center mx-auto flex'>
                    <PatternSection layout={layout} setLayout={setLayout} />
                  </div>
                </Panel>

                <Panel
                  header='Select Design'
                  toggleable
                  collapsed={activePanel !== 'floorDesign'}
                  onToggle={() => handleToggle('floorDesign')}
                >
                  <div className='m-0 '>
                    <ActiveDesign
                      selectedValue={selectedValue}
                      handleSelectionChange={handleSelectionChange}
                      tileImages={tileImages}
                      selectedImage={selectedImage}
                      selectedImage2={selectedImage2}
                      handleTileClick={handleTileClick}
                      layout={layout}
                    />
                  </div>
                </Panel>

                <Panel
                  header='Select Grout'
                  toggleable
                  collapsed={activePanel !== 'floorGrout'}
                  onToggle={() => handleToggle('floorGrout')}
                >
                  <div className='m-0'>
                    <GapSection
                      gapSize={gapSize}
                      setGapSize={setGapSize}
                      gapColor={gapColor}
                      handleGapColorChange={handleGapColorChange}
                      color={color}
                    />
                  </div>
                </Panel>
              </TabPanel>

              <TabPanel header='Wall Texture' className='m-0  '>
                <Panel
                  header='Select Pattern'
                  toggleable
                  collapsed={activePanel !== 'wallPattern'}
                  onToggle={() => handleToggle('wallPattern')}
                >
                  <div className='m-0'>
                    <WallPattern
                      wallLayout={wallLayout}
                      setWallLayout={setWallLayout}
                    />
                  </div>
                </Panel>

                <Panel
                  header='Select Design'
                  toggleable
                  collapsed={activePanel !== 'wallDesign'}
                  onToggle={() => handleToggle('wallDesign')}
                >
                  <div className='m-0'>
                    <WallDesign
                      wallSelectedValue={wallSelectedValue}
                      handleWallSelectionChange={handleWallSelectionChange}
                      wallTileImages={wallTileImages}
                      selectedWallImage={selectedWallImage}
                      selectedWallImage2={selectedWallImage2}
                      handleWallTileClick={handleWallTileClick}
                      wallLayout={wallLayout}
                    />
                  </div>
                </Panel>

                <Panel
                  header='Select Grout'
                  toggleable
                  collapsed={activePanel !== 'wallGrout'}
                  onToggle={() => handleToggle('wallGrout')}
                >
                  <div className='m-0'>
                    <WallGapSelection
                      wallGapSize={wallGapSize}
                      setWallGapSize={setWallGapSize}
                      wallGapColor={wallGapColor}
                      handleWallGapColorChange={handleWallGapColorChange}
                      color={color}
                    />
                  </div>
                </Panel>
              </TabPanel>
            </TabView>
          )}
        </div>

        {/* 3D Model Canvas */}
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? 'w-[80%]' : 'w-screen'
          } h-full relative`}
        >
          <RoomCanvas
            pathname={pathname}
            canvasRef={canvasRef}
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
          <button
            className={`bg-transparent flex items-center absolute top-[50%] left-0 shadow-md rounded transition-all text-center duration-100 ease-in-out cursor-pointer  ${
              sidebarOpen ? 'h-10 justify-end' : 'justify-center'
            }`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FontAwesomeIcon
              icon={sidebarOpen ? faChevronLeft : faChevronRight}
              className='text-3xl text-primary'
            />
          </button>

          <div className='mt-4 text-center absolute top-0 right-0'>
            <DownloadButton
              recording={recording}
              downloadCanvasImage={downloadCanvasImage}
              downloadRecording={downloadRecording}
            />
          </div>
        </div>
      </div>
      {/* </Suspense> */}
    </div>
  );
};

export default Kitchen1;
