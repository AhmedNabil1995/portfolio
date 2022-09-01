import React, { useState } from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './pages/home/Home';
import Portfolio from './pages/portfolio/Portfolio';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Working from './components/working/Working';

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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
