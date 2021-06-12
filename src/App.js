import './App.css';
import Particles from "react-particles-js"
import Header from './components/header';
import Navbar from './components/navbar';
import AboutMe from './components/aboutMe';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {


  return (  
    <>
      <Particles 
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value:30, 
            density:{
              enable:true,
              value_area: 900
        }
        },
        shape: {
          type: "circle",
          stroke:{
            width: 5,
            color: "#f9ab00"
          } 
        }
        }}}/>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>

  );
}

export default App;