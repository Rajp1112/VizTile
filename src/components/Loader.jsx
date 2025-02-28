import React from 'react';
import { FourSquare } from 'react-loading-indicators';

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-secondary'>
      <FourSquare color='#4f46e5' size='large' />
      <span className='ml-1 text-3xl font-bold text-primary'>vizTile</span>
    </div>
  );
};

export default Loader;
