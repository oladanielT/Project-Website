import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Works/>
        <Contacts/>
    </div>
  );
}

export default App;
