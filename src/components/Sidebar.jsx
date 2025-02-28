import { motion } from 'framer-motion';

const Sidebar = ({ sidebarOpen, activeSection, handleSidebarToggle }) => {
  return (
    <motion.aside
      className={`fixed left-0 top-0 h-full bg-secondary shadow-2xl transition-all duration-300 ${
        sidebarOpen ? 'w-64 p-4' : 'w-0 overflow-hidden'
      }`}
      initial={{ x: -200 }}
      animate={{ x: sidebarOpen ? 0 : -200 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {sidebarOpen && (
        <div className='flex flex-col h-full'>
          {/* Sidebar Buttons */}
          <motion.div
            className={`p-4 bg-gray-100 mb-3 cursor-pointer flex-col transition-all duration-300 ease-in-out shadow-lg rounded-xl hover:bg-[#008080] hover:text-white ${
              activeSection === 'design' ? '!bg-[#008080] text-white' : ''
            }`}
            onClick={() => handleSidebarToggle('design')}
            whileHover={{ scale: 1.05 }}
          >
            <i className='fa fa-image text-xl'></i>
            <span className='text-[12px]'>Design</span>
          </motion.div>

          <motion.div
            className={`p-4 bg-gray-100 mb-3 cursor-pointer flex-col transition-all duration-300 ease-in-out shadow-lg rounded-xl hover:bg-[#008080] hover:text-white ${
              activeSection === 'pattern' ? '!bg-[#008080] text-white' : ''
            }`}
            onClick={() => handleSidebarToggle('pattern')}
            whileHover={{ scale: 1.05 }}
          >
            <i className='fa fa-th text-2xl'></i>
            <span className='text-[12px]'>Pattern</span>
          </motion.div>
          {/* Group Button */}
          <motion.div
            className={`flex items-center space-x-2 p-4 mb-3 bg-gray-100 cursor-pointer flex-col transition-all duration-300 ease-in-out shadow-lg rounded-xl hover:bg-[#008080] hover:text-white ${
              activeSection === 'group' ? '!bg-[#008080] text-white' : ''
            }`}
            onClick={() => handleSidebarToggle('group')}
            whileHover={{ scale: 1.05 }}
          >
            <i className='fa fa-bars fa-w-16 text-2xl justify-center mx-auto'></i>
            <span className='mx-1 text-[12px]'>Group</span>
          </motion.div>

          <motion.div
            className={`flex items-center space-x-2 p-4 mb-3 bg-gray-100 cursor-pointer flex-col transition-all duration-300 ease-in-out shadow-lg rounded-xl hover:bg-[#008080] hover:text-white ${
              activeSection === 'wallColor' ? '!bg-[#008080] text-white' : ''
            }`}
            onClick={() => handleSidebarToggle('wallColor')}
            whileHover={{ scale: 1.05 }}
          >
            <i className='fa fa-fill-drip fa-w-16 text-2xl justify-center mx-auto'></i>
            <span className='mx-1 text-[12px]'>Wall</span>
          </motion.div>
        </div>
      )}
    </motion.aside>
  );
};

export default Sidebar;
