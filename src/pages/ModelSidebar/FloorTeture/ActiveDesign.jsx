import React, { useEffect, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';

const ActiveDesign = ({
  selectedValue,
  handleSelectionChange,
  tileImages,
  selectedImage,
  selectedImage2,
  handleTileClick,
  layout,
}) => {
  const [selectedOption, setSelectedOption] = useState('image1');

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleImageSelection = (image) => {
    handleTileClick(image, selectedOption);
  };

  return (
    <div className='transition-all duration-500 ease-in-out transform max-h-screen opacity-100 w-62 overflow-hidden bg-secondary border-primary border shadow-xl rounded-xl p-4'>
      <h1 className='text-lg font-semibold text-primary mb-2'>
        Select Tile Size
      </h1>
      <Dropdown
        options={[
          { label: '100 x 300 MM', value: '100x300' },
          { label: '200 x 200 MM', value: '200x200' },
          { label: '800 x 800 MM', value: '800x800' },
          { label: '600 x 600 MM', value: '600x600' },
          { label: '800 x 1600 MM', value: '800x1600' },
          { label: '1200 x 200 MM', value: '1200x200' },
          { label: '1200 x 600 MM', value: '1200x600' },
        ]}
        value={selectedValue}
        onChange={handleSelectionChange}
        optionLabel='label'
        placeholder='Select Size'
        className='w-full md:w-14rem'
      />

      {layout !== 'simple' &&
        layout !== 'bookmatch' &&
        layout !== 'brickcolumn' && (
          <div className='mt-4'>
            <h2 className='text-sm font-medium text-primary mb-2'>
              Select Tile For:
            </h2>
            <div className='flex gap-4 mb-4'>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input
                  type='radio'
                  name='imageSelection'
                  value='image1'
                  checked={selectedOption === 'image1'}
                  onChange={handleRadioChange}
                />
                Tile1
              </label>
              <label className='flex items-center gap-2 cursor-pointer'>
                <input
                  type='radio'
                  name='imageSelection'
                  value='image2'
                  checked={selectedOption === 'image2'}
                  onChange={handleRadioChange}
                />
                Tile2
              </label>
            </div>
          </div>
        )}

      <div className='mt-4 max-h-[24.5vh] overflow-y-scroll'>
        <div className='flex-wrap flex  gap-2'>
          {tileImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Tile ${index + 1}`}
              className={`w-20 h-20 object-cover cursor-pointer border-2 transition-all duration-300 ${
                (selectedOption === 'image1' && selectedImage === image) ||
                (selectedOption === 'image2' && selectedImage2 === image)
                  ? '!border-primary'
                  : 'border-white'
              } hover:border-primary`}
              onClick={() => handleImageSelection(image)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveDesign;
