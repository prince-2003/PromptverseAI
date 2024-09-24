import React from 'react';
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Home from './home.jsx';
import Music from './music.jsx';
import Trending from './trending.jsx';
import Gallery from './gallery.jsx';
import Features from './feaures.jsx';



function App() {
  
  return (
    <>
    
    <Navbar />
    <Hero />
    <Home />
    <Trending />
    <Gallery />
    <Music/>
    <Features />
    </>
  )
}

export default App;