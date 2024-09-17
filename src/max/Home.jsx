import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../max/Hero';
import Build from '../max/Build';
import Page from './Page';
import Join from '../max/Join';
import OldTown from './OldTown';
import Blog from './Blog';
import Flow from './Flow';
import Footer from '../component/Footer';

function Home() {
  return (
      <div className='App'>
        <Navbar/>
          <Hero/>
          <Build/>
          <Page/>
          <OldTown/>
          <Join/>
          <Blog/>
          <Flow/>
        <Footer/>
    </div>
  )
}

export default Home