import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About.jsx';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Hello from './components/Hello';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Hello />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
     </div>
  );
}

export default App;
