import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Services from './Components/Services';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Hero />
      <Services />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Services} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
