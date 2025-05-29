import React from 'react';

const LoginLoader = ({ message = 'Loading...' }) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-100'>
      <div className='flex items-center justify-center space-x-2'>
        <div className='w-4 h-4 bg-blue-500 rounded-full animate-bounce'></div>
        <div className='w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150'></div>
        <div className='w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300'></div>
      </div>
      <h3 className='mt-4 text-xl font-semibold text-blue-600'>{message}</h3>
    </div>
  );
};

export default LoginLoader;
