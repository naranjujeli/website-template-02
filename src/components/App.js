import React, { useState } from 'react';

import NavigationBar from './NavigationBar';
import ContentSection from './ContentSection';
import Footer from './Footer';

import '../styles/App.css';

export default function App() {
  const [smallDevice, setSmallDevice] = useState(window.innerWidth<=768);
  
  function handleWindowResize() {
    setSmallDevice(window.innerWidth<=768);
    console.log("executing handleWindowResize")
  }

  window.addEventListener("resize", handleWindowResize);

  return (
    <div className="App">
      <NavigationBar smallDevice={smallDevice} />
      <ContentSection />
      <Footer />
    </div>
  );
}