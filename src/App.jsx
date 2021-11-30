import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Error from './components/Error';
import Animation from './components/Animation';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>

  );
}

export default App;
