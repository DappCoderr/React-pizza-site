import React from 'react'
import Navbar from './component/Navbar/index'
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyle';
import Hero from './component/Hero';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/>
    </Router>
  );
}

export default App

