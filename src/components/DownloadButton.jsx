import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faDownload, faVideo } from '@fortawesome/free-solid-svg-icons';

export default function FloatingMenu({
  downloadRecording,
  downloadCanvasImage,
  recording,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed bottom-4 right-4 flex flex-col items-start'>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className='flex flex-col gap-3 mb-2'
        >
          <button
            className='bg-blue-500 text-white p-3 rounded-full shadow-md flex items-center justify-center'
            onClick={downloadCanvasImage}
          >
            <FontAwesomeIcon icon={faDownload} />
          </button>
          <button
            className={`p-3 rounded-full shadow-md flex items-center justify-center ${
              recording ? 'bg-red-500' : 'bg-green-500'
            } text-white`}
            onClick={downloadRecording}
          >
            <FontAwesomeIcon icon={faVideo} />
          </button>
        </motion.div>
      )}

      <button
        className='bg-primary text-white p-4 rounded-full shadow-lg flex items-center justify-center'
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        />
      </button>
    </div>
  );
}
