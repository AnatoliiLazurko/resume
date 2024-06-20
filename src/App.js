import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';
import Technology from './components/Technology/Technology';

function App() {
  return (
    <div>
      <Header />

      <Home />
      <About />
      <Skills />
      <Technology />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
