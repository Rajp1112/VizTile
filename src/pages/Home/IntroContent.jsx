import { useEffect } from 'react';
import { gsap } from 'gsap';
import Logo from '/assets/LOGO/logo.png'; // Ensure the correct import path

export default function AnimatedSVG() {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.5,
      defaults: { duration: 0.6, ease: 'power2.inOut' },
    });

    gsap.set('#target1', { rotation: 45, svgOrigin: '50 50' });
    gsap.set('#target2', { rotation: 135, svgOrigin: '50 50' });

    tl.to('line', { attr: { x2: 100 } })
      .to('#target1', { rotation: 0 }, 'turn')
      .to('#target2', { rotation: 180 }, 'turn')
      .to('#target1', { y: -10 }, 'move')
      .to('#target2', { y: 10 }, 'move')
      .to('#theSquare', { attr: { height: 22, y: 38 } }, 'move')
      .to('line', { attr: { x1: 50, x2: 50 } })
      .to('#logoImage', { duration: 1, opacity: 0, ease: 'none' }); // Animate the image
  }, []);

  return (
    <div
      className='flex justify-center items-center h-screen  relative overflow-hidden'
      style={{
        backgroundImage: "url('/assets/LandingPageImage/Hero Section.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <svg
        id='demo'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 100 100'
        className='max-w-[80%] max-h-[80%] font-bold'
      >
        <defs>
          <clipPath id='theClipPath'>
            <rect
              id='theSquare'
              x='0'
              y='50'
              width='100'
              height='0'
              fill='red'
            />
          </clipPath>
        </defs>
        <line
          id='target1'
          x1='0'
          y1='50'
          x2='0'
          y2='50'
          strokeWidth='1'
          stroke='#4f46e5'
        />
        <line
          id='target2'
          x1='0'
          y1='50'
          x2='0'
          y2='50'
          strokeWidth='1'
          stroke='#a0a7ff'
        />
        <g id='clipPathReveal' clipPath='url(#theClipPath)'>
          <image
            id='logoImage'
            href={Logo}
            x='30'
            y='30'
            height='40'
            width='40'
          />
        </g>
      </svg>
    </div>
  );
}
