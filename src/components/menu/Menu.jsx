import { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import './menu.css'

const Menu = () => {
    let [display,setDisplay] = useState('none');
    let links = useRef()
    function handleDisplay(){
        if(display=='none'){
            setDisplay('block')
        }else{
            setDisplay('none')
        }
    }

    
  return (
    <div className='menu'>
        <div className={`${display==='none'?'menu_btn':'menu_btn close'}`} onClick={handleDisplay}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='menu_items' style={{display}}>
            <ul ref={links}>
                
                <li><NavLink to={'/portfolio'}>Home</NavLink></li>
                <li><NavLink to={'/resume'}>Resume</NavLink></li>
                <li><NavLink to={'/myworks'}>Portfolio</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu