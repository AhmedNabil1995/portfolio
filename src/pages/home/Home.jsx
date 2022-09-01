import './home.css'
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const Home = () => {
    let [work,setWork] = useState('');
    let timer = useRef();
    const myWork = ['WEB DEVELOPER','REACT DEVELOPER','ANGULAR DEVELOPER']
    useEffect(()=>{       
            typeWork(0);
    },[])

    function typeWork(arrIndex){
        let i = arrIndex;
        let j =0;
        work = ''
        setWork(work)
        let character =  myWork[i].split('');
        if(!timer.current){
            timer.current = setInterval(()=>{
                if(j<character.length-1){
                    work += character[j];
                    setWork(work)
                    j++;
                }else{
                    clearInterval(timer.current);
                    timer.current = '';
                    if(arrIndex==myWork.length-1){
                        typeWork(0);
                    }else{
                        arrIndex++;
                       setTimeout(() => {
                        typeWork(arrIndex);
                       }, 500);
                    }
                }
        },250)
        }
    }

  return (
    <div className='home'>
        <div className='container'>
            <div className='row rgap-4'>
                <div className='col-md-6'>
                    <div className='img-container'>
                        <img src={window.location.origin+'/assets/myImage.jpg'} alt='Ahmed Nabil' className='avatar'/>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='content'>
                        <p className='hello'>HELLO</p>
                        <h1>I'M <span>Ahmed Nabil</span></h1>
                        <div className='i-do'>I'M {work}|</div>
                        <p className='description'>I am a graduate of the Information Technology Institute, and I have a strong knowledge of web 
    development using JavaScript technology, and through my experience in the construction field, I 
    gained the skills of teamwork and time management.
    Seeking a challenging and rewarding position whereby I can apply and develop my skills, build a long-term growing career, and improve my experience in the software field.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home