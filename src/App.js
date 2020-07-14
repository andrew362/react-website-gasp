import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import './styles/App.scss';
import gsap from 'gsap';

import Header from './components/header';
import Navigation from './components/navigation';

//pages
import Home from './pages/home';
import About from './pages/about';
import Gallery from './pages/gallery';
import { useState } from 'react';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/gallery', name: 'Gallery', Component: Gallery },
];

function App() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const handleResize = () => {
      console.log(dimensions);
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);

    gsap.to('body', 0, {
      css: { visibility: 'visible' },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      <Header dimensions={dimensions} />
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
