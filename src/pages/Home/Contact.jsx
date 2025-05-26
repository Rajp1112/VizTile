import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, User } from 'lucide-react';
import { Toast } from 'primereact/toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const toast = useRef(null);

  const onSubmit = (data) => {
    console.log(data);
    toast.current?.show({
      severity: 'success',
      summary: 'Success',
      detail: 'Thanks for reaching out! We’ll get back to you shortly.',
      life: 4000,
    });
    reset();
  };

  return (
    <section
      id='contact'
      className='relative overflow-hidden py-20 bg-gradient-to-b from-indigo-50 to-white'
    >
      {/* decorative blurred blobs */}
      <div className='absolute -top-48 -left-32 w-96 h-96 bg-indigo-200 rounded-full blur-[120px] opacity-40' />
      <div className='absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-violet-200 rounded-full blur-[120px] opacity-40' />

      <Toast ref={toast} />

      <div className='relative z-10 container mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center max-w-7xl'>
        {/* Animated showcase image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='overflow-hidden rounded-3xl ring-1 ring-indigo-100 shadow-xl'
        >
          <motion.img
            src='/assets/LandingPageImage/ContactPageImage.png' // 👉 swap as desired
            alt='Modern architecture collage'
            className='w-full h-full object-cover'
            animate={{ scale: [1, 1.05, 1], y: [0, -20, 0] }}
            transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
          />
        </motion.div>

        {/* Glassy form card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='backdrop-blur-xl bg-white/80 shadow-2xl ring-1 ring-indigo-100 rounded-3xl p-8 md:p-12'
        >
          <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 text-center'>
            Let’s Get In Touch.
          </h2>
          <p className='mt-2 text-center text-gray-600'>
            Or email us directly at
            <a
              href='mailto:hello@viztile.com'
              className='text-primary hover:underline font-medium ml-1'
            >
              hello@viztile.com
            </a>
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-4'>
            {/* name row */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {[
                {
                  id: 'firstName',
                  placeholder: 'First Name',
                  icon: <User className='w-4 h-4' />,
                },
                {
                  id: 'lastName',
                  placeholder: 'Last Name',
                  icon: <User className='w-4 h-4' />,
                },
              ].map(({ id, placeholder, icon }) => (
                <label
                  key={id}
                  className='group relative flex items-center bg-white rounded-lg ring-1 ring-gray-300 transition-all focus-within:ring-2 focus-within:ring-primary hover:ring-primary'
                >
                  <span className='pl-4 text-gray-500 group-focus-within:text-primary'>
                    {icon}
                  </span>
                  <input
                    {...register(id)}
                    type='text'
                    placeholder={placeholder}
                    className='w-full py-3 pl-3 pr-4 bg-transparent placeholder-gray-400 focus:outline-none'
                  />
                </label>
              ))}
            </div>

            {/* email */}
            <label className='group relative flex items-center bg-white rounded-lg ring-1 ring-gray-300 transition-all focus-within:ring-2 focus-within:ring-primary hover:ring-primary'>
              <span className='pl-4 text-gray-500 group-focus-within:text-primary'>
                <Mail className='w-4 h-4' />
              </span>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                    message: 'Invalid email address',
                  },
                })}
                type='email'
                placeholder='Email Address'
                className='w-full py-3 pl-3 pr-4 bg-transparent placeholder-gray-400 focus:outline-none'
              />
            </label>
            {errors.email && (
              <p className='text-sm text-red-500'>{errors.email.message}</p>
            )}

            {/* phone */}
            <label className='group relative flex items-center bg-white rounded-lg ring-1 ring-gray-300 transition-all focus-within:ring-2 focus-within:ring-primary hover:ring-primary'>
              <span className='pl-4 text-gray-500 group-focus-within:text-primary'>
                <Phone className='w-4 h-4' />
              </span>
              <input
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Invalid phone number',
                  },
                  maxLength: { value: 10, message: 'Invalid phone number' },
                  minLength: { value: 10, message: 'Invalid phone number' },
                })}
                type='text'
                placeholder='Phone Number'
                className='w-full py-3 pl-3 pr-4 bg-transparent placeholder-gray-400 focus:outline-none'
              />
            </label>
            {errors.phone && (
              <p className='text-sm text-red-500'>{errors.phone.message}</p>
            )}

            {/* message */}
            <textarea
              {...register('message')}
              placeholder='Enter your main text here...'
              rows={4}
              className='w-full rounded-lg bg-white ring-1 ring-gray-300 placeholder-gray-400 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-primary hover:ring-primary'
            />

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type='submit'
              className='w-full py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-primary to-indigo-600 shadow-lg'
            >
              Submit Form
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
