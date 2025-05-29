import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';

import { toast } from 'react-toastify';
import LoginLoader from '../../components/LoginLoader';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        toast.success('Login successful');

        navigate('/');
        setLoading(false);
      } else {
        console.error('Invalid credentials');
        toast.error('Invalid credentials');
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      toast.error('Invalid credentials');
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      {loading ? (
        <LoginLoader message='Please wait, logging you in...' />
      ) : (
        <div className='w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md'>
          <h2 className='text-2xl font-bold text-center'>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
            <div>
              <label className='block mb-1 text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                {...register('email', { required: 'Email is required' })}
                className='w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200'
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className='block mb-1 text-sm font-medium text-gray-700'>
                Password
              </label>
              <input
                type='password'
                {...register('password', { required: 'Password is required' })}
                className='w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-indigo-200'
              />
              {errors.password && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type='submit'
              className='w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200'
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
