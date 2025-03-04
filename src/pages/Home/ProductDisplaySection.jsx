import React from 'react';
import { useNavigate } from 'react-router-dom';

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

const ProductDisplaySection = () => {
  const navigate = useNavigate();
  return (
    <div
      className='bg-secondary text-white py-12 px-6 text-center min-h-screen flex flex-col justify-center relative'
      id='product'
    >
      <h2 className='text-3xl font-bold text-black'>
        Elevate Your Space with Premium Tiles
      </h2>
      <p className='text-gray-600 mt-2 max-w-2xl mx-auto'>
        Discover a stunning collection of high-quality tiles designed to add
        elegance, durability, and style to your home or business. From classic
        to contemporary designs, we offer the perfect tiles to transform any
        space effortlessly.
      </p>

      {/* Product Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10'>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className='bg-white rounded-xl p-4 shadow-md cursor-pointer hover:shadow-lg transition-all'
          >
            <img
              src={product.image}
              alt={product.title}
              className='w-full h-40 object-cover rounded-lg'
            />
            <h1 className='text-primary font-semibold mt-4'>
              {product.heading}
            </h1>
            <h3 className='text-black'>{product.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplaySection;
