import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faBroom, faSmile } from '@fortawesome/free-solid-svg-icons';

const benefits = [
  {
    icon: faCogs,
    title: 'Streamlined Process',
    description:
      'Optimize your workflow with an efficient and intuitive system designed for seamless operations.',
  },
  {
    icon: faBroom,
    title: 'Minimum Effort',
    description:
      'Reduce manual work with automated features that save time and enhance productivity.',
  },
  {
    icon: faSmile,
    title: 'Stress-Free Experience',
    description:
      'Experience stress-free decision-making with a reliable and user-friendly platform.',
  },
];

const HeroFactors = () => {
  return (
    <section
      className='py-auto justify-center bg-secondary min-h-screen flex'
      id='blog'
    >
      <div className='max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12'>
        {/* Left Text Section */}
        <motion.div
          className='lg:w-1/2 text-left'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span
            className='bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-semibold'
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>
          <h2 className='text-3xl font-bold mt-4'>Why Should You Choose Us?</h2>
          <p className='text-gray-600 mt-2'>
            Our platform provides cutting-edge solutions to streamline your
            experience, ensuring efficiency and ease of use.
          </p>
          <div className='mt-8 space-y-6'>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className='flex items-start gap-4'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                // viewport={{ once: true }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <FontAwesomeIcon
                  icon={benefit.icon}
                  className='text-indigo-600 text-2xl'
                />
                <div>
                  <h3 className='font-semibold text-lg'>{benefit.title}</h3>
                  <p className='text-gray-600 mt-1'>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Right Image Section */}
        <motion.div
          className='lg:w-1/2 flex justify-center'
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          // viewport={{ once: true }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img
            src='/assets/LandingPageImage/HeroFacterImage.png'
            alt='Feature preview'
            className='rounded-lg shadow-lg'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroFactors;
