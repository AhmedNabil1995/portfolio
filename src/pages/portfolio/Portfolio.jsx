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
        }
    } 
    const filterFun =(i)=>{
        if(i===0){
            setFilterData(data);
        }else if(i===1){
            filterData = filterData.filter((el)=>{
                return el.category.includes('e-commerce')
            })
            setFilterData(filterData);
        }else if(i===2){
            filterData = filterData.filter((el)=>{
                return el.category.includes('javascript')
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