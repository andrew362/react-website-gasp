import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as ArrowUp } from '../assets/up-arrow.svg';
import gsap from 'gsap';

let tl = gsap.timeline();

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState(false);

  history.listen(() => {
    setMenuState(false);
  });

  useEffect(() => {
    if (menuState) {
      tl.to('nav', { duration: 0.01, css: { display: 'block' } })
        .to('body', { css: { overflow: 'hidden' } })
        .to('.App', {
          duration: 1,
          y: dimensions.width <= 654 ? '70vh' : dimensions.height / 2,
          ease: 'expo.inOut',
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut',
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to('#circle', {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to('.hamburger-menu-close', {
          duration: 0.4,
          delay: -0.8,
          css: {
            display: 'block',
          },
        });
    } else {
      tl.to('.App', {
        duration: 1,
        y: 0,
        ease: 'expo.inOut',
      })
        .to('#circle', {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut',
        })
        .to('.hamburger-menu-close', {
          css: {
            display: 'none',
          },
        })
        .to('body', {
          css: {
            overflow: 'auto',
          },
        })
        .to('nav', {
          css: {
            display: 'none',
          },
        });
    }
  }, [menuState]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">MyLogo</NavLink>
          </div>
          <div className="nav-toggle">
            <div onClick={() => setMenuState(true)} className="hamburger-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div onClick={() => setMenuState(false)} className="hamburger-menu-close">
              <ArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
