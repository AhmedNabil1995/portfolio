import './portfolio.css'
import WorkModel from '../../components/workModel/WorkModel';
import { useRef, useState } from 'react';
import Work from '../../components/work/Work';
import data from '../../data';
import { AnimatePresence, motion } from 'framer-motion';
import { childrenVariant, headerVariant, parentNoAnimate, ParentVarient } from '../../animation/animation';
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
                return el.category.includes('socialMedia')
            })
            setFilterData(filterData);
        }

    }
  return (
    <>
    <AnimatePresence>
    {showModel&&<WorkModel 
     item={item} setShowModel={setShowModel}/>}
    </AnimatePresence>
    <motion.div className='portfolio' variants={ParentVarient}
    initial='intial'
    animate='animate'
    exit='exit'>
        <motion.div className='container' variants={parentNoAnimate}
            initial='initial'
            animate='animate'>
        <motion.h1 variants={headerVariant} 
            initial='initial' 
            animate='animate'>My <span>portfolio</span></motion.h1>
        <motion.div className='portfolio_tab' ref={btnContainer}
        variants={childrenVariant}
        initial='initial' 
        animate='animate'>
            <button onClick={handleClick} className='btn btn-primary-outline active'>All</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>E-Commerce websites</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>javaScript Project</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>HTML/CSS</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>Games</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>React Js</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>Dashboard</button>
            <button onClick={handleClick} className='btn btn-primary-outline'>Socail Media</button>

        </motion.div>
            <motion.div className='row rgap-4' layout variants={childrenVariant}
            initial='initial' 
            animate='animate'>
                <AnimatePresence>
                    {filterData.map((el)=>(
                        <motion.div layout
                        initial={{opacity:0,scale:0}}
                        animate={{opacity:1,scale:1}}
                        exit={{opacity:0,scale:0}}
                        transition={{duration:0.8}}
                         className='col-l-4 col-s-6' key={el.projectName}>
                        <Work project={el} setItem={setItem} setShowModel={setShowModel}/>
                        </motion.div>
                    )
                    )}
                    </AnimatePresence>
            </motion.div>
        </motion.div>
    </motion.div>
    </>
  )
}

export default Portfolio