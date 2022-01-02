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
            <NavBar/>
          <div className="App-body">
            <Routes>
                <Route path="/hostedwebsite-mat" element={Home()} />
                <Route path="/aboutme" element={AboutMe()} />
                <Route path="/projects/*" element={Projects()} />
                <Route path="/motto"  element={Motto()} />
                <Route path="/experience" element={Experience()} />
                <Route path="/contact" element={Contact()} />
                <Route path="/veryfunnydad-game" element={VeryFunnyDad()}/>
            </Routes>
            <Footer/>
          </div>
        </div>
    </Router>
  );
}

export default App;
