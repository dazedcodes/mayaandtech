import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Motto from './components/Motto';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Home />
        <AboutMe  />
        <Projects />
        <Motto />
        <Experience/>
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
