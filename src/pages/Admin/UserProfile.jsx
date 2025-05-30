import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Settings, Link, Twitter, Facebook, Instagram } from 'lucide-react';
import ProfileImage from '../../../public/assets/UserProfileImages/DummyImage.jpg';
import ProfileBGImage from '../../../public/assets/UserProfileImages/DummyProfi;eBGImage.jpg';
import { toast } from 'react-toastify';
import API_BASE_URL from '../../store/apiConfig';
import ENDPOINTS from '../../store/endpoint';
import { useAuth } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

const UserProfile = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.userData?.username || '',
      email: user?.userData?.email || '',
      address: user?.userData?.address || '',
      city: user?.userData?.city || '',
      country: user?.userData?.country || '',
      postal_code: user?.userData?.postal_code || '',
      aboutMe: user?.userData?.about_me || '',
    },
  });
  const { authorizationToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_BASE_URL}${ENDPOINTS.USER.UPDATE_USER}/${user.userData._id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authorizationToken,
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        setLoading(false);
        console.error('Server Error:', result);
        throw new Error(result.msg || 'Failed to update user');
      }
      setLoading(false);
      navigate('/');
      console.log('User updated successfully:', result);
      toast.success(result.msg || 'Profile updated');
    } catch (error) {
      setLoading(false);
      console.error('Update failed:', error);
      toast.error(error.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className='flex-1 flex flex-col overflow-hidden bg-[#202940] min-h-screen text-gray-200'>
      <main className='flex-1 overflow-auto p-6 bg-[#202940] relative'>
        <div className='absolute right-6 top-6 z-20'>
          <button className='p-2 bg-[#2a344d] rounded-full shadow-lg border border-[#3e4860] text-gray-400 hover:text-white'>
            <Settings size={24} />
          </button>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 bg-[#2a344d] rounded-lg shadow-md p-6'>
            <h2 className='text-xl text-white font-semibold mb-6 border-b pb-4 border-[#3e4860]'>
              Edit Profile
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mb-6'>
                <div>
                  <label className='block text-xs font-semibold text-gray-400 uppercase mb-1'>
                    Company
                  </label>
                  <input
                    disabled
                    className='w-full p-2 border border-[#3e4860] rounded-md bg-[#3a445d] text-gray-400 cursor-not-allowed text-sm'
                    defaultValue='Creative Code Inc.'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-400 uppercase mb-1'>
                    Username
                  </label>
                  <input
                    {...register('username', {
                      required: 'Username is required',
                    })}
                    className='w-full text-white p-2 border border-[#3e4860] rounded-md bg-[#3a445d] text-sm'
                  />
                  {errors.username && (
                    <p className='text-xs text-red-500'>
                      {errors.username.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-400 uppercase mb-1'>
                    Email
                  </label>
                  <input
                    type='email'
                    {...register('email', { required: 'Email is required' })}
                    className='w-full text-white p-2 border border-[#3e4860] rounded-md bg-[#3a445d] text-sm'
                  />
                  {errors.email && (
                    <p className='text-xs text-red-500'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className='mb-6'>
                <label className='block text-xs font-semibold text-gray-400 uppercase mb-1'>
                  Address
                </label>
                <input
                  {...register('address')}
                  className='w-full text-white p-2 border border-[#3e4860] rounded-md bg-[#3a445d] text-sm'
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mb-6'>
                <div>
                  <label className='block text-xs font-semibold text-gray-400 uppercase mb-1'>
                    City
                  </label>
                  <input
                    {...register('city')}
                    className='w-full text-white p-2 border border-[#3e4860] rounded-md bg-[#3a445d] text-sm'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-400 uppercase mb-1'>
                    Country
                  </label>
                  <input
                    {...register('country')}
                    className='w-full text-white p-2 border border-[#3e4860] rounded-md bg-[#3a445d] text-sm'
                  />
                </div>
                <div>
                  <label className='block text-xs font-semibold text-gray-400 uppercase mb-1'>
                    Postal Code
                  </label>
                  <input
                    {...register('postal_code')}
                    className='w-full text-white p-2 border border-[#3e4860] rounded-md bg-[#3a445d] text-sm'
                  />
                </div>
              </div>

              <div className='text-right'>
                <motion.button
                  type='submit'
                  className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md shadow-md transition-colors duration-200 text-sm'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Update Profile
                </motion.button>
              </div>
            </form>
          </div>

          {/* Right: User Card */}
          <div className='lg:col-span-1 bg-[#2a344d] rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6 text-center'>
            <div
              className='w-full pb-4 mb-4 border-b border-[#3e4860] bg-cover bg-center h-28 relative'
              style={{ backgroundImage: `url(${ProfileBGImage})` }}
            >
              <div className='w-24 h-24 rounded-full overflow-hidden border-2 border-[#2a344d] shadow-lg mx-auto absolute bottom-[-48px] left-1/2 transform -translate-x-1/2 bg-gray-600'>
                <img
                  src={ProfileImage}
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <h3 className='text-lg font-semibold mt-16 text-white'>
              {user?.userData?.username}
            </h3>
            <p className='text-sm text-gray-400 mb-2'>{user?.userData?.city}</p>
            <p className='text-xs text-gray-500 mb-4 px-4'>
              {user?.userData?.email}
            </p>
            <div className='flex space-x-3 mb-4'>
              {[Link, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href='#'
                  className='text-indigo-400 hover:text-indigo-300'
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className='text-xs text-gray-500 mt-auto'>
              © 2023, made with love for a better web.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
