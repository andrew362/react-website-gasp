import React, { useEffect } from 'react';
import IntroOverlay from '../components/introOverlay';
import Banner from '../components/banner';
import Cases from '../components/cases';
import gsap from 'gsap';
import { useState } from 'react';

const animationTimeline = (completeAnimation) => {
  const tl = gsap.timeline();

  tl.from('.line span', 1.3, {
    y: 100,
    ease: 'power4.out',
    delay: 1,
    skewY: 5,
    stagger: {
      amount: 0.3,
    },
  })
    .to('.overlay-top', 1, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
    })
    .to('.overlay-bottom', 1, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.3,
      },
    })
    .to('.intro-overlay', 0, { css: { display: 'none' } })
    .from('.case-image img', 1.6, {
      scale: 1.3,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4,
      },
      delay: -1.4,
      onComplete: completeAnimation,
    });
};

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => setAnimationComplete(true);

  useEffect(() => {
    animationTimeline(completeAnimation);
  }, []);

  return (
    <>
    {!animationComplete && (
      <IntroOverlay />
    )}
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
