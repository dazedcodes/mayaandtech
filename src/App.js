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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  return (
    <Router>
        <div className="App">
            <NavBar/>
          <div className="App-body">
            <Routes>
                <Route path="/" exact element={Home()} />
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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpKKT5f0Dkz9J6odgOTJqWmAmQ7L-WTwA",
  authDomain: "mayaandtechwebsite.firebaseapp.com",
  projectId: "mayaandtechwebsite",
  storageBucket: "mayaandtechwebsite.appspot.com",
  messagingSenderId: "894047096485",
  appId: "1:894047096485:web:7e5521ab71b118ea32874c",
  measurementId: "G-4M628RGDNB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default App;
