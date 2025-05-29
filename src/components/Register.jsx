import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import LoginLoader from './LoginLoader'; // Assuming LoginLoader is the correct component

const Register = () => {
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
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        if (res_data.token) {
          storeTokenInLS(res_data.token);
          navigate('/');
          setLoading(false);
        } else {
          console.log(res_data.msg);
          setLoading(false);
        }
      } else {
        console.error('Invalid credentials');
        setLoading(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setLoading(false);
    }
  };

  return (
    <div
      className='flex justify-center items-center h-screen'
      style={{ backgroundColor: '#a0a7ff' }}
    >
      {' '}
      {loading ? (
        <LoginLoader message='Registration Successful. Redirecting...' />
      ) : (
        <div className='bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden'>
          <div className='relative   min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl'>
            <div className='flex-col flex  self-center lg:px-14 sm:max-w-4xl xl:max-w-md  z-10'>
              <div className='self-start hidden lg:flex flex-col  text-gray-300'>
                <h1 className='my-3 font-semibold text-4xl'>Welcome back</h1>
                <p className='pr-3 text-sm opacity-75'>
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups
                </p>
              </div>
            </div>
            <div className='flex justify-center self-center  z-10 rounded-b-2xlxl'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white p-6  rounded shadow-md w-full max-w-lg !z-50'
              >
                <h2 className='text-2xl font-bold mb-4 text-black'>Register</h2>{' '}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                  {' '}
                  <div className='col-span-1 md:col-span-2'>
                    <label className='block text-sm font-bold mb-2 text-black '>
                      USERNAME{' '}
                    </label>{' '}
                    <input
                      {...register('username', { required: true })}
                      className='w-full px-3 py-2 border rounded'
                      style={{ backgroundColor: 'transparent', color: '#000' }}
                    />{' '}
                    {errors.username && (
                      <span className='text-red-500 text-xs'>
                        Username is required
                      </span>
                    )}{' '}
                  </div>{' '}
                  <div className='col-span-1 md:col-span-2'>
                    {' '}
                    <label className='block text-sm font-bold mb-2 text-black'>
                      EMAIL ADDRESS{' '}
                    </label>{' '}
                    <input
                      {...register('email', { required: true })}
                      className='w-full px-3 py-2 border rounded'
                      style={{ backgroundColor: 'transparent', color: '#000' }}
                    />{' '}
                    {errors.email && (
                      <span className='text-red-500 text-xs'>
                        Email is required
                      </span>
                    )}{' '}
                  </div>
                </div>
                <div className='mb-4'>
                  {' '}
                  <label className='block text-sm font-bold mb-2 text-black'>
                    ADDRESS
                  </label>{' '}
                  <input
                    {...register('address', { required: true })}
                    className='w-full px-3 py-2 border rounded'
                    style={{ backgroundColor: 'transparent', color: '#000' }}
                  />{' '}
                  {errors.address && (
                    <span className='text-red-500 text-xs'>
                      Address is required
                    </span>
                  )}
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                  {' '}
                  <div>
                    {' '}
                    <label className='block text-sm font-bold mb-2 text-black'>
                      CITY
                    </label>{' '}
                    <input
                      {...register('city', { required: true })}
                      className='w-full px-3 py-2 border rounded'
                      style={{ backgroundColor: 'transparent', color: '#000' }}
                    />{' '}
                    {errors.city && (
                      <span className='text-red-500 text-xs'>
                        City is required
                      </span>
                    )}{' '}
                  </div>{' '}
                  <div>
                    {' '}
                    <label className='block text-sm font-bold mb-2 text-black'>
                      COUNTRY
                    </label>{' '}
                    <input
                      {...register('country', { required: true })}
                      className='w-full px-3 py-2 border rounded'
                      style={{ backgroundColor: 'transparent', color: '#000' }}
                    />{' '}
                    {errors.country && (
                      <span className='text-red-500 text-xs'>
                        Country is required
                      </span>
                    )}{' '}
                  </div>{' '}
                  <div>
                    {' '}
                    <label className='block text-sm font-bold mb-2 text-black'>
                      POSTAL CODE{' '}
                    </label>{' '}
                    <input
                      {...register('postalCode', { required: true })}
                      className='w-full px-3 py-2 border rounded'
                      style={{ backgroundColor: 'transparent', color: '#000' }}
                    />{' '}
                    {errors.postalCode && (
                      <span className='text-red-500 text-xs'>
                        Postal Code is required
                      </span>
                    )}{' '}
                  </div>
                </div>
                <div className='mb-4'>
                  {' '}
                  <label className='block text-sm font-bold mb-2 text-black'>
                    ABOUT ME
                  </label>{' '}
                  <textarea
                    {...register('aboutMe')}
                    className='w-full px-3 py-2 border rounded'
                    rows='2'
                    style={{ backgroundColor: 'transparent', color: '#000' }}
                  ></textarea>
                </div>
                <div className='mb-4'>
                  {' '}
                  <label className='block text-sm font-bold mb-2 text-black'>
                    PHONE
                  </label>{' '}
                  <input
                    {...register('phone', { required: true })}
                    className='w-full px-3 py-2 border rounded'
                    style={{ backgroundColor: 'transparent', color: '#000' }}
                  />{' '}
                  {errors.phone && (
                    <span className='text-red-500 text-xs'>
                      Phone is required
                    </span>
                  )}
                </div>
                <div className='mb-4'>
                  {' '}
                  <label className='block text-sm font-bold mb-2 text-black'>
                    PASSWORD
                  </label>{' '}
                  <input
                    type='password'
                    {...register('password', { required: true })}
                    className='w-full px-3 py-2 border rounded'
                    style={{ backgroundColor: 'transparent', color: '#000' }}
                  />{' '}
                  {errors.password && (
                    <span className='text-red-500 text-xs'>
                      Password is required
                    </span>
                  )}
                </div>
                <button
                  type='submit'
                  className={`w-full text-white py-2 rounded ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={loading}
                  style={{ backgroundColor: 'rgb(91 33 182)' }}
                >
                  {loading ? 'Registering...' : 'Register'}
                </button>{' '}
              </form>
            </div>
            <svg
              class='absolute bottom-0 left-0 '
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 320'
            >
              <path
                fill='#fff'
                fill-opacity='1'
                d='M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
