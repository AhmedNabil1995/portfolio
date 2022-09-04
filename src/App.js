import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Working from './components/working/Working';
import Resume from './pages/resume/Resume';
import Contact from './pages/contact/Contact';

function App() {
  let [display,setDispaly] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
      {display&&<Working setDispaly={setDispaly}/>}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
