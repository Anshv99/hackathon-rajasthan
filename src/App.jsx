import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import Chart from './pages/Chart';
import Humidity from './partials/Humidity';
import Soil from './partials/Soil';
import 'aos/dist/aos.css';
import './css/style.css';


import AOS from 'aos';

import Home from './pages/Home';

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/soil" element={<Soil />} />
        <Route path="/humidity" element={<Humidity />} />
      </Routes>
    </>
  );
}

export default App;
