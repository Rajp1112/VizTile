import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { EffectFade, Autoplay } from 'swiper/modules';
import slide1 from '../../../public/assets/SliderImage/sliderImage01.webp';
import slide2 from '/assets/SliderImage/sliderImage02.jpg';
import slide3 from '/assets/SliderImage/sliderImage03.jpg';

import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const slides = [
    { image: slide1, text: 'Welcome to Our Platform' },
    { image: slide2, text: 'Explore Amazing Features' },
    { image: slide3, text: 'Join Us Today' },
  ];

  return (
    <motion.div
      className='flex flex-col items-center justify-center h-full w-full gap-6 p-4'
      id='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Header Text Section */}
      <motion.div
        className='flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/2 gap-3 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className='bg-secondary rounded-2xl p-2 text-primary text-lg md:text-xl lg:text-2xl font-bold'
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Revolutionizing Tile Design Virtually
        </motion.h1>

        <motion.p
          className='mt-3 text-2xl md:text-4xl lg:text-5xl font-extrabold'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transform Your Space with VizTile
        </motion.p>
        <motion.p
          className='text-2xl md:text-4xl lg:text-5xl font-extrabold'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          The Future of Tile Visualization
        </motion.p>
        <motion.p
          className='mt-3 text-sm md:text-lg text-[#475569] opacity-60'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          VizTile lets you visualize and experiment with tile designs in a
          realistic 3D space before making a decision. Explore styles, colors,
          and textures within pre-configured room models to find the perfect
          fit. Say goodbye to guesswork and make confident design choices with
          ease!
        </motion.p>
      </motion.div>

      {/* Swiper Section */}
      <motion.div
        className='w-full md:w-[60%] lg:w-[50%] h-[45%] shadow-lg rounded-2xl overflow-hidden'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Swiper
          effect='fade'
          modules={[EffectFade, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className='w-full h-full'
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className='flex justify-center items-center inset-0 rounded-2xl bg-gradient-to-br from-[#a0a7ff] to-secondary p-1 shadow-lg'
            >
              <motion.img
                src={slide.image}
                alt={`Slide ${index}`}
                className='w-full h-full object-cover rounded-2xl'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
