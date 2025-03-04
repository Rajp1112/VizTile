import React from 'react';
import Navbar from '../../../components/Navbar';

const ProductDetails = [
  {
    id: 1,
    heading1: 'Product1',
    heading2: 'Product1',
    heading3: 'Product1',
    heading4: 'Product1',
    p1: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p2: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p3: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p4: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    image1: 'path/path',
    image2: 'path/path',
  },
  {
    id: 2,
    heading1: 'Product1',
    heading2: 'Product1',
    heading3: 'Product1',
    heading4: 'Product1',
    p1: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p2: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p3: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p4: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    image1: 'path/path',
    image2: 'path/path',
  },
  {
    id: 3,
    heading1: 'Product1',
    heading2: 'Product1',
    heading3: 'Product1',
    heading4: 'Product1',
    p1: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p2: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p3: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p4: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    image1: 'path/path',
    image2: 'path/path',
  },
  {
    id: 4,
    heading1: 'Product1',
    heading2: 'Product1',
    heading3: 'Product1',
    heading4: 'Product1',
    p1: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p2: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p3: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p4: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    image1: 'path/path',
    image2: 'path/path',
  },
  {
    id: 5,
    heading1: 'Product1',
    heading2: 'Product1',
    heading3: 'Product1',
    heading4: 'Product1',
    p1: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p2: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p3: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p4: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    image1: 'path/path',
    image2: 'path/path',
  },
  {
    id: 6,
    heading1: 'Product1',
    heading2: 'Product1',
    heading3: 'Product1',
    heading4: 'Product1',
    p1: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p2: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p3: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    p4: 'dkhsuhwiuhedweiufhhuifhd iuhbsicdg usihif ',
    image1: 'path/path',
    image2: 'path/path',
  },
];
const ProductExplainSection = () => {
  return (
    <>
      <div className='flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-10'>
        <Navbar />
        <div className='bg-secondary'>
          <div className='container-1'>
            {ProductDetails.map((product, index) => {
              <h1>{product.heading1}</h1>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductExplainSection;
