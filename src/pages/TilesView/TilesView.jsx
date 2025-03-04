import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
const roomImages = {
  'Living Room': [
    '/assets/Rooms/livingroom1.png',
    '/assets/Rooms/livingroom2.png',
  ],
  Kitchen: ['/assets/Rooms/kitchen1.png'],
  'Meeting Room': ['/assets/Rooms/meetingroom1.png'],
  Classroom: ['/assets/Rooms/classroom1.png'],
  Bathroom: ['/assets/Rooms/bathroom1.png', '/assets/Rooms/bathroom2.png'],
};

const categories = Object.keys(roomImages).map((category) => ({
  name: category,
  count: roomImages[category].length,
}));
const TilesView = () => {
  const [selectedCategory, setSelectedCategory] = useState('Living Room');

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCustomBack = () => {
    setLoading(true);
    navigate('/');
  };

  return (
    <div className='flex flex-col h-screen bg-gray-200 relative'>
      {loading && (
        <div className='fixed inset-0 flex items-center justify-center bg-secondary bg-opacity-75 z-50'>
          <Loader />
        </div>
      )}

      <Header
        title='Tiles View'
        showBackButton={true}
        onClick={handleCustomBack}
      />
      <div className='flex flex-1 overflow-hidden'>
        <motion.aside
          className='w-1/5 p-4 bg-secondary text-primary shadow-lg'
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className='flex flex-col h-full'>
            <div>
              <h2 className='text-xl font-bold mb-4 pl-2 text-primary uppercase'>
                Categories
              </h2>
              <ul className='space-y-2'>
                {categories.map((category, index) => (
                  <motion.li
                    key={index}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-tertiary text-white shadow-md'
                        : 'bg-gray-300 hover:bg-gray-300 text-gray-700'
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className='flex items-center gap-3'>
                      <span className='text-xl'>🏡</span>
                      <span className='text-lg font-semibold'>
                        {category.name}
                      </span>
                    </div>
                    <motion.span className='bg-secondary text-primary px-3 py-1 rounded-full text-sm font-bold'>
                      {category.count}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.aside>

        <motion.main
          className='w-4/5 p-4 overflow-y-auto h-full'
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Suspense
            fallback={
              <div className='flex items-center justify-center'>
                <Loader />
              </div>
            }
          >
            <motion.div
              className='grid grid-cols-3 gap-4 max-h-full'
              initial='hidden'
              animate='visible'
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {roomImages[selectedCategory]?.map((image, index) => (
                <motion.div
                  key={index}
                  className='rounded-lg shadow-lg overflow-hidden'
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() =>
                    navigate(
                      `/${selectedCategory.toLowerCase().replace(/ /g, '')}/${
                        index + 1
                      }`
                    )
                  }
                >
                  <img
                    src={image}
                    alt={`Room ${index + 1}`}
                    className='w-full h-60 object-cover cursor-pointer'
                  />
                </motion.div>
              ))}
            </motion.div>
          </Suspense>
        </motion.main>
      </div>
    </div>
  );
};

export default TilesView;
