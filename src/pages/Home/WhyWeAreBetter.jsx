import {
  faVrCardboard,
  faMagic,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhyWeAreBetter = () => {
  const benefits = [
    {
      icon: faVrCardboard,
      title: 'Immersive 3D Experience',
      description:
        'Visualize tiles in a realistic 3D environment before making a decision.',
    },
    {
      icon: faMagic,
      title: 'Effortless Customization',
      description:
        'Experiment with colors, styles, and layouts to match your vision perfectly.',
    },
    {
      icon: faCheckCircle,
      title: 'Confidence in Every Choice',
      description:
        'Reduce uncertainty by previewing your selections in real-life settings.',
    },
  ];

  return (
    <section className='bg-secondary py-20'>
      <div className='max-w-6xl mx-auto px-6 lg:px-12'>
        {/* Heading Section */}
        <div className='text-center'>
          <span className='bg-teal-100 text-teal-600 px-5 py-2 rounded-full text-sm font-semibold'>
            Why Choose VizTile
          </span>
          <h2 className='text-4xl font-bold mt-5 text-gray-800'>
            A Smarter Way to Select Tiles
          </h2>
          <p className='text-gray-600 mt-3 text-lg max-w-2xl mx-auto'>
            Elevate your interior design process with cutting-edge
            visualization. VizTile offers precision, convenience, and
            confidence, ensuring every choice you make is the right one.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='text-center p-8 shadow-lg rounded-xl bg-white border border-gray-200 transition-transform transform hover:scale-105'
            >
              <div className='bg-teal-100 text-teal-600 p-5 rounded-full inline-block'>
                <FontAwesomeIcon icon={benefit.icon} className='text-4xl' />
              </div>
              <h3 className='text-2xl font-semibold mt-5 text-gray-800'>
                {benefit.title}
              </h3>
              <p className='text-gray-600 mt-3 text-lg'>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreBetter;
