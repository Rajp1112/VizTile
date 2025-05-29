import React from 'react';
import { Settings, Link, Twitter, Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileImage from '../../../public/assets/UserProfileImages/DummyImage.jpg';
import ProfileBGImage from '../../../public/assets/UserProfileImages/DummyProfi;eBGImage.jpg';

const UserProfile = ({ user }) => {
  return (
    <div className='flex-1 flex flex-col overflow-hidden bg-[#202940] min-h-screen text-gray-200'>
      {' '}
      {/* User Profile Main Content Area */}
      <main className='flex-1 overflow-auto p-6 bg-[#202940] relative'>
        <div className='absolute right-6 top-6 z-20'>
          <button className='p-2 bg-[#2a344d] rounded-full shadow-lg border border-[#3e4860] text-gray-400 hover:text-white'>
            {' '}
            {/* Darker button */}
            <Settings size={24} />
          </button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Section: Edit Profile */}
          <div className='lg:col-span-2 bg-[#2a344d] rounded-lg shadow-md p-6'>
            {' '}
            {/* Darker card background */}
            <h2 className='text-xl text-white font-semibold mb-6 border-b pb-4 border-[#3e4860]'>
              {' '}
              {/* White text, dark border */}
              Edit Profile
            </h2>
            {/* Form Fields */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mb-6'>
              <div>
                <label
                  htmlFor='company'
                  className='block text-xs font-semibold text-gray-400 uppercase mb-1' // Lighter gray text
                >
                  Company (disabled)
                </label>
                <input
                  type='text'
                  id='company'
                  className='w-full p-2 border border-[#3e4860] rounded-md bg-[#3a445d] text-gray-400 cursor-not-allowed text-sm' // Darker input, lighter text
                  defaultValue='Creative Code Inc.'
                  disabled
                />
              </div>
              <div>
                <label
                  htmlFor='username'
                  className='block text-xs font-semibold text-gray-400 uppercase mb-1'
                >
                  Username
                </label>
                <input
                  type='text'
                  id='username'
                  className='w-full text-white p-2 border border-[#3e4860] rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm bg-[#3a445d]' // White text, dark background
                  defaultValue={user?.userData?.username}
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-xs font-semibold text-gray-400 uppercase mb-1'
                >
                  Email address
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full text-white p-2 border border-[#3e4860] rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm bg-[#3a445d]'
                  placeholder='Email'
                  defaultValue={user?.userData?.email}
                />
              </div>
            </div>
            <div className='mb-6'>
              <label
                htmlFor='address'
                className='block text-xs font-semibold text-gray-400 uppercase mb-1'
              >
                Address
              </label>
              <input
                type='text'
                id='address'
                className='w-full text-white p-2 border border-[#3e4860] rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm bg-[#3a445d]'
                defaultValue={user?.userData?.address}
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mb-6'>
              <div>
                <label
                  htmlFor='city'
                  className='block text-xs font-semibold text-gray-400 uppercase mb-1'
                >
                  City
                </label>
                <input
                  type='text'
                  id='city'
                  className='w-full text-white p-2 border border-[#3e4860] rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm bg-[#3a445d]'
                  defaultValue={user?.userData?.city}
                />
              </div>
              <div>
                <label
                  htmlFor='country'
                  className='block text-xs font-semibold text-gray-400 uppercase mb-1'
                >
                  Country
                </label>
                <input
                  type='text'
                  id='country'
                  className='w-full text-white p-2 border border-[#3e4860] rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm bg-[#3a445d]'
                  defaultValue={user?.userData?.country}
                />
              </div>
              <div>
                <label
                  htmlFor='postalCode'
                  className='block text-xs font-semibold text-gray-400 uppercase mb-1'
                >
                  Postal Code
                </label>
                <input
                  type='text'
                  id='postalCode'
                  className='w-full text-white p-2 border border-[#3e4860] rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm bg-[#3a445d]'
                  placeholder={user?.userData?.postal_code}
                />
              </div>
            </div>
            <div className='mb-8'>
              <label
                htmlFor='aboutMe'
                className='block text-xs font-semibold text-gray-400 uppercase mb-1'
              >
                About Me
              </label>
              <textarea
                id='aboutMe'
                rows='4'
                className='w-full text-white p-2 border border-[#3e4860] rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none text-sm bg-[#3a445d]'
                defaultValue="Lamborghini Mercy. Your chick so thirsty, I'm in that two seat Lambo."
              ></textarea>
            </div>
            <div className='text-right'>
              <motion.button
                className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-md shadow-md transition-colors duration-200 text-sm'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Update Profile
              </motion.button>
            </div>
          </div>

          {/* Right Section: User Card */}
          <div className='lg:col-span-1 bg-[#2a344d] rounded-lg shadow-md overflow-hidden flex flex-col items-center p-6 text-center'>
            {' '}
            {/* Darker card background */}
            {/* Profile header and circle for profile pic with background image */}
            <div
              className='w-full pb-4 mb-4 border-b border-[#3e4860] bg-cover bg-center h-28 relative'
              style={{
                backgroundImage: `url(${ProfileBGImage})`,
              }}
            >
              <div className='w-24 h-24 rounded-full overflow-hidden border-2 border-[#2a344d] shadow-lg mx-auto absolute bottom-[-48px] left-1/2 transform -translate-x-1/2 bg-gray-600'>
                {' '}
                {/* Adjusted border, background color */}
                <img
                  src={ProfileImage}
                  alt='Profile'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <h3 className='text-lg font-semibold mt-16 text-white'>
              {user?.userData?.username}
            </h3>{' '}
            {/* Adjusted margin-top */}
            <p className='text-sm text-gray-400 mb-2'>{user?.userData?.city}</p>
            <p className='text-xs text-gray-500 mb-4 px-4'>
              "Lamborghini Mercy. Your chick so thirsty, I'm in that two seat
              Lambo."
            </p>
            <div className='flex space-x-3 mb-4'>
              <a href='#' className='text-indigo-400 hover:text-indigo-300'>
                {' '}
                {/* Lighter indigo for icons */}
                <Link size={18} />
              </a>
              <a href='#' className='text-indigo-400 hover:text-indigo-300'>
                <Twitter size={18} />
              </a>
              <a href='#' className='text-indigo-400 hover:text-indigo-300'>
                <Facebook size={18} />
              </a>
              <a href='#' className='text-indigo-400 hover:text-indigo-300'>
                <Instagram size={18} />
              </a>
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
