import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { EffectFade, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from '../../components/Navbar';
import ProductDisplaySection from './ProductDisplaySection';
import ProductKeyFeatures from './ProductKeyFeatures';

import IntroContent from './IntroContent';
import Contact from './Contact';
import Hero from './Hero';
import HeroFactors from './HeroFactors';
import Footer from '../../components/Footer';
import { useAuth } from '../../store/auth';
import Loader from '../../components/Loader';

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, user, userLoading, reloadUser } = useAuth();

  useEffect(() => {
    reloadUser();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {userLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className=' flex-col w-full h-screen flex '
            style={{
              backgroundImage:
                "url('/assets/LandingPageImage/Hero Section.png')",
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Navbar user={user} isLoggedIn={isLoggedIn} />
            <Hero />
          </div>
          <ProductDisplaySection />
          <ProductKeyFeatures />
          {/* <WhyWeAreBetter /> */}
          <HeroFactors />
          <Contact isLoggedIn={isLoggedIn} />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
