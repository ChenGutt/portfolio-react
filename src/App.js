import logo from './logo.svg';
import './App.css';
import Navbar from './comps/navBar';
import Header from './comps/header';
import About from './comps/about';
import Portfolio from './comps/portfolio';

function App() {
  return (
    <div>
      <header>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      </header>
      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
