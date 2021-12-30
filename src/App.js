import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Motto from './components/Motto';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar />
      <header className="App-header">
       <Home />
       <AboutMe />
       <Projects />
       <Motto />
       <Experience />
       <Contact/>
      </header>
    </div>
  );
}

export default App;
