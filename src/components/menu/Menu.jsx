import { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
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

    function handleActiveLink(e){
        Array.from(links.current.children).forEach((link)=>{
            if(link.firstChild==e.target){
                link.classList.add('active');
                console.log('yes')
            }else{
                link.classList.remove('active');
            }
        })
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
                <li onClick={handleActiveLink}  className='active'><Link to={'/'}>Home</Link></li>
                <li onClick={handleActiveLink}><Link to={'/resume'}>Resume</Link></li>
                <li onClick={handleActiveLink}><Link to={'/portfolio'}>Portfolio</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Menu