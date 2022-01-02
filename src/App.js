import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Motto from './components/Motto';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import VeryFunnyDad from './components/VeryFunnyDad';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
          <div className="App-body">
            <Home/>
            <AboutMe />
            <Projects />
            <Motto />
            <Experience />
            <Contact />
            <Routes>
                <Route path="/veryfunnydad-game" element={VeryFunnyDad()}/>
            </Routes>
            <Footer/>
          </div>
        </div>
    </Router>
  );
}

export default App;
