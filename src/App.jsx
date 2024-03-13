import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Services from "../src/components/Services";
import Product from './components/Product';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  return (
  <div>

    <Navbar />
    <Home />
    <Services />
    <Product />
    <About />
    <Contact />

  </div>
  )
}

export default App;