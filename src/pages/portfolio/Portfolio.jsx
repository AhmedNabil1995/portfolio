import './portfolio.css'
import WorkModel from '../../components/workModel/WorkModel';
import { useRef, useState } from 'react';
import Work from '../../components/work/Work';
import data from '../../data';
const Portfolio = () => {
    let [showModel,setShowModel] = useState(false);
    let [filterData,setFilterData] = useState(data);
    let [item,setItem] = useState(data[0]);
    let btnContainer = useRef();
    const handleClick =(e)=>{
        Array.from(btnContainer.current.children).forEach((el)=>{
            if(el===e.target){
                el.classList.add('active');
            }else{
                el.classList.remove('active');
            }
        })
        if(e.target==btnContainer.current.children[0]){
            filterFun(0)
        }else if(e.target==btnContainer.current.children[1]){
            filterFun(1)
        }else if(e.target==btnContainer.current.children[2]){
            filterFun(2)
        }else if(e.target==btnContainer.current.children[3]){
            filterFun(3)
        }else if(e.target==btnContainer.current.children[4]){
            filterFun(4)
        }else if(e.target==btnContainer.current.children[5]){
            filterFun(5)
        }else if(e.target==btnContainer.current.children[6]){
            filterFun(6)
        }else if(e.target==btnContainer.current.children[7]){
            filterFun(7)
        }
    } 

    const filterFun =(i)=>{
        if(i===0){
            setFilterData(data);
        }else if(i===1){
            filterData = data.filter((el)=>{
                return el.category.includes('e-commerce')
            })
            setFilterData(filterData);
        }else if(i===2){
            filterData = data.filter((el)=>{
                return el.category.includes('javascript')
            })
            setFilterData(filterData);
        }else if(i===3){
            filterData = data.filter((el)=>{
                return el.category.includes('html/css')
            })
            setFilterData(filterData);
        }else if(i===4){
            filterData = data.filter((el)=>{
                return el.category.includes('games')
            })
            setFilterData(filterData);
        }else if(i===5){
            filterData = data.filter((el)=>{
                return el.category.includes('react')
            })
            setFilterData(filterData);
        }else if(i===6){
            filterData = data.filter((el)=>{
                return el.category.includes('dashboard')
            })
            setFilterData(filterData);
        }else if(i===7){
            filterData = data.filter((el)=>{
                return el.category.includes('socailMedia')
            })
            setFilterData(filterData);
        }

    }
  return (
    <>
    {showModel&&<WorkModel item={item} setShowModel={setShowModel}/>}
    <div className='portfolio'>
        <div className='container'>
        <h1>My <span>portfolio</span></h1>
        <div className='portfolio_tab' ref={btnContainer}>
            <button onClick={handleClick} className='btn btn-primary-outline active'>All</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>E-Commerce websites</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>javaScript Project</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>HTML/CSS</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>Games</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>React Js</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>Dashboard</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>Socail Media</button>

        </div>
            <div className='row rgap-4'>
                    {filterData.map((el)=>(
                        <div className='col-l-4 col-s-6' key={el.projectName}>
                        <Work project={el} setItem={setItem} setShowModel={setShowModel}/>
                        </div>
                    )
                    )}
            </div>
        </div>
    </div>
    </>
  )
}

export default Portfolio