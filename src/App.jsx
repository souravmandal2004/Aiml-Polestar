import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Services from "../src/components/Services";
import Product from './components/Product';

function App() {

  return (
  <div>

    <Navbar />
    <Home />
    <Services />
    <Product />

  </div>
  )
}

export default App;