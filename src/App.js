import React from 'react';
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import Home from './home.jsx';
import Trending from './trending.jsx';
import Gallery from './gallery.jsx';
import Music from './music.jsx';
function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Home />
    <Trending />
    <Gallery />
    <Music/>
    </>
  )
}

export default App;