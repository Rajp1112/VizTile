import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faPaintRoller,
  faLayerGroup,
  faCubes,
  faLightbulb,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const features = [
  {
    icon: faEye,
    title: 'Real-Time Visualization',
    text: 'Instantly preview how different tile designs will look in your space with immersive 3D rendering.',
  },
  {
    icon: faPaintRoller,
    title: 'Effortless Interior Styling',
    text: 'Experiment with various tile styles, colors, and textures to create the perfect aesthetic effortlessly.',
  },
  {
    icon: faLayerGroup,
    title: 'Wide Tile Selection',
    text: 'Access a vast library of tile options, from classic to contemporary, to match your design vision.',
  },
  {
    icon: faCubes,
    title: 'Interactive 3D Models',
    text: 'Place tiles within realistic room models to get a true-to-life sense of how they will fit in your space.',
  },
  {
    icon: faLightbulb,
    title: 'Smart Design',
    text: 'Receive intelligent suggestions based on your preferences to make the decision-making process easier.',
  },
  {
    icon: faCheckCircle,
    title: 'Confident Purchase Decisions',
    text: 'Eliminate uncertainty by visualizing your choices before buying, ensuring complete satisfaction.',
  },
];

export default function ProductKeyFeatures() {
  return (
    <section
      className='py-16 bg-gray-50 text-center min-h-screen flex flex-col justify-center'
      id='features'
    >
      <motion.div
        className='max-w-3xl mx-auto mb-12'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <span className='bg-indigo-100 text-primary px-4 py-1 rounded-full text-sm font-semibold'>
          Explore VizTile Features
        </span>
        <h2 className='text-3xl font-bold mt-4'>
          Transform Your Space with Confidence
        </h2>
        <p className='text-gray-600 mt-2'>
          Visualize, experiment, and design effortlessly with our interactive 3D
          tile selection platform.
        </p>
      </motion.div>

      <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4'>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className='bg-white p-6 rounded-lg shadow-md text-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 10,
                delay: index * 0.2,
              }}
            >
              <FontAwesomeIcon
                icon={feature.icon}
                className='text-primary text-3xl mb-4'
              />
            </motion.div>
            <h3 className='font-semibold text-lg'>{feature.title}</h3>
            <p className='text-gray-600 mt-2'>{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
