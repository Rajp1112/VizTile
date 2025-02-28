import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const products = [
  {
    id: 1,
    heading: '3D Textured Tiles',
    title: ' Unique and dynamic',
    image: '/assets/ProductDisplayImage/3DTextuerTile.webp',
  },
  {
    id: 2,
    heading: 'Glossy Tiles',
    title: ' Reflective and premium feel',
    image: '/assets/ProductDisplayImage/GlossyTile.webp',
  },
  {
    id: 3,
    heading: 'Marble Tiles',
    title: ' Elegant and luxurious',
    image: '/assets/ProductDisplayImage/MarbleTile.webp',
  },
  {
    id: 4,
    heading: 'Patterned Tiles',
    title: 'Traditional and artistic designs',
    image: '/assets/ProductDisplayImage/PatterenedTile.webp',
  },
  {
    id: 5,
    heading: 'Mosaic Tiles',
    title: ' Colorful and vibrant',
    image: '/assets/ProductDisplayImage/MosaicTile.webp',
  },
  {
    id: 6,
    heading: 'Wooden Finish Tiles',
    title: ' Warm and natural look',
    image: '/assets/ProductDisplayImage/WoodTile.webp',
  },
  {
    id: 7,
    heading: 'Matte Finish Tiles',
    title: ' Modern and stylish',
    image: '/assets/ProductDisplayImage/MatteTile.webp',
  },
  {
    id: 8,
    heading: 'Concrete/Stone Finish Tiles',
    title: ' Industrial and contemporary look',
    image: '/assets/ProductDisplayImage/ConcreteStoneTile.webp',
  },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const ProductDisplaySection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Close modal on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (selectedProduct) setSelectedProduct(null);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProduct]);

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.2 }}
      className='bg-secondary text-white py-12 px-6 text-center min-h-screen flex flex-col justify-center relative'
      id='product'
    >
      {/* Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
        className='text-3xl font-bold text-black'
      >
        Elevate Your Space with Premium Tiles
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: false }}
        className='text-gray-600 mt-2 max-w-2xl mx-auto'
      >
        Discover a stunning collection of high-quality tiles designed to add
        elegance, durability, and style to your home or business. From classic
        to contemporary designs, we offer the perfect tiles to transform any
        space effortlessly.
      </motion.p>

      {/* Product Grid with Scroll Animations */}
      <motion.div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 transition-all ${
          selectedProduct ? 'blur-sm' : 'blur-0'
        }`}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            layoutId={`card-${product.id}`}
            className='bg-white rounded-xl p-4 shadow-md cursor-pointer'
            onClick={() => setSelectedProduct(product)}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={product.image}
              alt={product.title}
              className='w-full h-40 object-cover rounded-lg'
            />
            <motion.h1 className='text-primary font-semibold mt-4'>
              {product.heading}
            </motion.h1>
            <motion.h3 className='text-black'>{product.title}</motion.h3>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for Expanded View */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className='fixed inset-0 backdrop-blur-sm  bg-opacity-40 flex justify-center items-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              layoutId={`card-${selectedProduct.id}`}
              className='bg-white rounded-xl p-6 shadow-lg w-3/4 max-w-lg'
              onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
            >
              <motion.img
                src={selectedProduct.image}
                className='w-full h-60 object-cover rounded-lg'
              />
              <motion.h1 className='text-primary font-semibold mt-4'>
                {selectedProduct.heading}
              </motion.h1>
              <motion.h3 className='text-black'>
                {selectedProduct.title}
              </motion.h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductDisplaySection;
