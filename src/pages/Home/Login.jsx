import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import API_BASE_URL from '../../store/apiConfig';
import ENDPOINTS from '../../store/endpoint';

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
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.AUTH.LOGIN}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const res_data = await response.json();
        storeTokenInLS(res_data.token);
        toast.success('Login successful');
        navigate('/');
      } else {
        toast.error('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  const handleBack = () => {
    navigate('/');
  };

  return (
    <div
      className='flex items-center justify-center min-h-screen'
      style={{ backgroundColor: '#a0a7ff' }}
    >
      {loading ? (
        <Loader />
      ) : (
        <div className='bg-purple-900 absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 overflow-hidden'>
          <button
            onClick={handleBack}
            className='absolute top-4 left-4 bg-white text-black px-4 py-2 rounded'
            style={{ zIndex: 9999 }}
          >
            Back
          </button>

          <div className='relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl'>
            {/*  Left welcome panel  */}
            <div className='hidden lg:flex flex-col self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10'>
              <div className='self-start text-gray-300'>
                <h1 className='my-3 text-4xl font-semibold'>Welcome back</h1>
                <p className='pr-3 text-sm opacity-75'>
                  Log in to continue using the platform.
                </p>
              </div>
            </div>

            {/*  Login form  */}
            <div className='flex justify-center self-center z-10'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-white p-6 rounded shadow-md w-full max-w-lg z-50'
              >
                <h2 className='mb-4 text-2xl font-bold text-black'>Login</h2>

                {/*  Email field  */}
                <div className='mb-4'>
                  <label className='block mb-2 text-sm font-bold text-black'>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type='email'
                    {...register('email', { required: 'Email is required' })}
                    className='w-full px-3 py-2 border rounded focus:outline-none'
                    style={{ backgroundColor: 'transparent', color: '#000' }}
                  />
                  {errors.email && (
                    <span className='text-xs text-red-500'>
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/*  Password field  */}
                <div className='mb-6'>
                  <label className='block mb-2 text-sm font-bold text-black'>
                    PASSWORD
                  </label>
                  <input
                    type='password'
                    {...register('password', {
                      required: 'Password is required',
                    })}
                    className='w-full px-3 py-2 border rounded focus:outline-none'
                    style={{ backgroundColor: 'transparent', color: '#000' }}
                  />
                  {errors.password && (
                    <span className='text-xs text-red-500'>
                      {errors.password.message}
                    </span>
                  )}
                </div>

                {/*  Submit button  */}
                <button
                  type='submit'
                  className={`w-full py-2 text-white rounded ${
                    loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={loading}
                  style={{ backgroundColor: 'rgb(91 33 182)' }}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>

                {/*  Register link  */}
                <p className='mt-4 text-sm text-gray-600'>
                  Don&apos;t have an account?{' '}
                  <Link
                    to='/register'
                    className='text-blue-500 hover:underline'
                  >
                    Register here
                  </Link>
                </p>
              </form>
            </div>

            {/*  Bottom wave SVG  */}
            <svg
              className='absolute bottom-0 left-0'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 320'
            >
              <path
                fill='#fff'
                fillOpacity='1'
                d='M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
