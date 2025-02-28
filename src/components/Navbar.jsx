import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Logo from '/assets/LOGO/Logo2.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScrollChange = () => {
      const sections = ['home', 'product', 'features', 'blog', 'contact'];
      let currentSection = 'home';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            currentSection = section;
          }
        }
      });

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScrollChange);
    return () => {
      window.removeEventListener('scroll', handleScrollChange);
    };
  }, []);

  return (
    <nav className='fixed w-full top-0 z-50 bg-gray-800 shadow-md p-4'>
      <div className='flex justify-between items-center max-w-7xl mx-auto px-4'>
        <img
          src={Logo}
          alt='Logo'
          className='h-8 cursor-pointer z-50'
          onClick={() => handleScroll('home')}
        />

        <button
          onClick={toggleMenu}
          className={`md:hidden text-white text-2xl z-50`}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Sidebar Menu */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: isOpen ? '0%' : '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white p-6 shadow-lg'
        >
          <button
            onClick={toggleMenu}
            className='absolute top-4 left-4 text-white text-2xl'
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className='mt-12 space-y-6 text-lg font-medium'>
            {['home', 'product', 'features', 'blog', 'contact'].map((item) => (
              <li key={item}>
                <button
                  className='block w-full text-left cursor-pointer hover:text-gray-400'
                  onClick={() => handleScroll(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-6 text-white text-lg font-medium relative'>
          {['home', 'product', 'features', 'blog', 'contact'].map((item) => (
            <li key={item} className='relative'>
              <button
                className='hover:text-gray-300 p-2 relative cursor-pointer'
                onClick={() => handleScroll(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
              {activeTab === item && (
                <motion.div
                  layoutId='underline'
                  className='absolute left-0 bottom-0 h-1 w-full bg-primary rounded'
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className='hidden md:flex'>
          <button
            className='flex gap-3 items-center bg-indigo-600 hover:opacity-90 cursor-pointer text-white font-bold py-2 px-4 rounded-full'
            onClick={() => navigate('/tiles-view')}
          >
            <FontAwesomeIcon icon={faEye} />
            Visualize Your Tiles
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
