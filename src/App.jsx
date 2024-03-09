import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Services from "../src/components/Services";

function App() {

  return (
  <div>

    <Navbar />
    <Home />
    <Services />

  </div>
  )
}

export default App;