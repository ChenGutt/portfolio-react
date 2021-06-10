import logo from './logo.svg';
import "bootswatch/dist/solar/bootstrap.min.css";
import './App.css';
import Navbar from './comps/navBar';
import Header from './comps/header';
import About from './comps/about';
import Portfolio from './comps/portfolio';
import Footer from './comps/footer';
import { useState } from 'react';


function App() {
  

  return (
    <div>
      <header>
      <Navbar />
      <Header />
     
      </header>
      <main>
      <About />
      <Portfolio />
      </main>
      <footer>
    <Footer />
      </footer>
    </div>
  );
}

export default App;
