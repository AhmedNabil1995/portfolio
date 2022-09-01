import './portfolio.css'
import WorkModel from '../../components/workModel/WorkModel';
import { useRef, useState } from 'react';
import Work from '../../components/work/Work';
import data from '../../data';
const Portfolio = () => {
    let [showModel,setShowModel] = useState(false);
    let btnContainer = useRef();
    const handleClick =(e)=>{
        Array.from(btnContainer.current.children).forEach((el)=>{
            if(el===e.target){
                el.classList.add('active');
            }else{
                el.classList.remove('active');
            }
        })
    } 
  return (
    <>
    {showModel&&<WorkModel setShowModel={setShowModel}/>}
    <div className='portfolio'>
        <div className='container'>
        <h1>My <span>portfolio</span></h1>
        <div className='portfolio_tab' ref={btnContainer}>
            <button onClick={handleClick} className='btn btn-primary-outline active'>All</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>E-Commerce websites</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>javaScript Project</button>
        </div>
            <div className='row rgap-4'>
                <div className='col-l-4 col-s-6'>
                    {data.map((el)=>(
                        <Work key={el.projectName} project={el} setShowModel={setShowModel}/>
                    )
                    )}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio