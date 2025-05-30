import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { Toast } from 'primereact/toast';
import { motion, useAnimation } from 'framer-motion';
import ENDPOINTS from '../../store/endpoint';
import API_BASE_URL from '../../store/apiConfig';

const Contact = ({ isLoggedIn }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const controls = useAnimation();
  const ref = useRef(null);
  const toast = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls]);

  const onSubmit = async (data) => {
    if (!isLoggedIn) {
      toast.current.show({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Please log in to submit the form',
        life: 3000,
      });
      return;
    }
    try {
      const response = await fetch(`${API_BASE_URL}${ENDPOINTS.CONTACT}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const res_data = await response.json();
        toast.current.show({
          severity: 'success',
          summary: 'Success',
          detail: res_data.msg || 'Message sent successfully!',
          life: 3000,
        });
        reset();
      } else {
        toast.current.show({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to submit the form',
          life: 3000,
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: 'An error occurred. Please try again later.',
        life: 3000,
      });
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className='flex flex-col md:flex-row items-center min-h-screen  p-3 justify-center text-center mx-auto px-30'
      id='contact'
      style={{
        backgroundImage: "url('/assets/LandingPageImage/Hero Section.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Toast ref={toast} />
      {/* Right Side Form Container */}
      <div className='flex flex-row w-full max-w-8xl shadow-lg rounded-lg overflow-hidden bg-gradient-to-br from-[#a0a7ff] to-secondary p-1'>
        <div className='w-full h-[800px]'>
          <img
            src='/assets/LandingPageImage/ContactPageImage.png'
            alt='Background'
            className='w-full h-full object-cover'
          />
        </div>

        <div className='w-full bg-white p-30 h-[800px]'>
          <div className='bg-secondary rounded-3xl shadow-2xl p-5'>
            <h2 className='text-3xl font-semibold text-gray-900 mb-4'>
              Let’s Get In Touch.
            </h2>
            <p className='text-gray-600 mb-6'>
              Or just reach out manually to{' '}
              <a href='mailto:hello@slothui.com' className='text-primary'>
                hello@viztile.com
              </a>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='flex items-center border border-gray-300 p-3 rounded-lg  transition-shadow  hover:border-tertiary focus-within:border-tertiary focus-within:shadow-lg focus-within:shadow-tertiary/20'>
                  <FontAwesomeIcon
                    icon={faUser}
                    className='text-gray-500 mr-2'
                  />
                  <input
                    {...register('first_name', {
                      // required: 'First name is required',
                    })}
                    type='text'
                    placeholder='First Name'
                    className='w-full focus:outline-none '
                  />
                </div>
                <div className='flex items-center border border-gray-300 p-3 rounded-lg  transition-shadow  hover:border-tertiary focus-within:border-tertiary focus-within:shadow-lg focus-within:shadow-tertiary/20'>
                  <FontAwesomeIcon
                    icon={faUser}
                    className='text-gray-500 mr-2'
                  />
                  <input
                    {...register('last_name', {
                      // required: 'Last name is required',
                    })}
                    type='text'
                    placeholder='Last Name'
                    className='w-full focus:outline-none'
                  />
                </div>
              </div>

              <div className='flex items-center border border-gray-300 p-3 rounded-lg mt-4  transition-shadow hover:border-tertiary focus-within:border-tertiary focus-within:shadow-lg focus-within:shadow-tertiary/20'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='text-gray-500 mr-2'
                />
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
                  className='w-full focus:outline-none'
                />
              </div>
              {errors.email && (
                <p className='text-red-500 text-sm text-start'>
                  {errors.email.message}
                </p>
              )}

              <div className='flex items-center border border-gray-300 p-3 rounded-lg mt-4  transition-shadow hover:border-tertiary focus-within:border-tertiary focus-within:shadow-lg focus-within:shadow-tertiary/20'>
                <FontAwesomeIcon
                  icon={faPhone}
                  className='text-gray-500 mr-2'
                />
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Invalid phone number',
                    },
                    maxLength: {
                      value: 10,
                      message: 'Invalid phone number',
                    },
                    minLength: {
                      value: 10,
                      message: 'Invalid phone number',
                    },
                  })}
                  type='text'
                  placeholder='Phone Number'
                  className='w-full focus:outline-none'
                />
              </div>
              {errors.phone && (
                <p className='text-red-500 text-sm text-start'>
                  {errors.phone.message}
                </p>
              )}
              <div className='border border-gray-300 p-3 rounded-lg mt-4  transition-shadow hover:border-tertiary focus-within:border-tertiary focus-within:shadow-lg focus-within:shadow-tertiary/20'>
                <textarea
                  {...register('message')}
                  placeholder='Enter your main text here...'
                  className='w-full h-32 focus:outline-none'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-primary text-white py-3  transition-all rounded-lg mt-4 hover:bg-primary hover:opacity-90 '
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
