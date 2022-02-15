import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';


function App() {
 return(
<Router>
  <nav>
    {/* <Link to="/" className='link'>Home</Link> */}
    <Link to="/" className='link'>Shop</Link>
    <Link to="/about" className='link'>About us</Link>
    <Link to="/contact" className='link'>Contact us</Link>
  </nav>

  <Routes>
  <Route path='/' element={<Home/>}/>
    {/* <Route path='/home' element={<Home/>}/> */}
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
</Router>
 )
}

export default App;