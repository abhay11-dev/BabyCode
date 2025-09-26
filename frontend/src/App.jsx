import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main id="main-content" role="main">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;