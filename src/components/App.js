import React from 'react';

import NavigationBar from './NavigationBar';
import ContentSection from './ContentSection';
import Footer from './Footer';

import '../styles/App.css';

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ContentSection />
      <Footer />
    </div>
  );
}