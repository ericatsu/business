import React from 'react';
import '../../App.css';
import Cards from '../Services';
import Hero from '../Hero';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Hero />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;