import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import {BrowserRouter,Routes,Route, useLocation} from 'react-router-dom'
import Working from './components/working/Working';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';
import { AnimatePresence } from 'framer-motion';
function App() {
  let [display,setDispaly] = useState(false);
  let location =  useLocation();
  return (
    <div className="App">
      <AnimatePresence mode='wait'>
      <Menu />
      {display&&<Working setDispaly={setDispaly}/>}
      <Routes location={location} key={location.key}>
        <Route path='/portfolio' element={<Home />}/>
        <Route path='/myworks' element={<Portfolio />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
