import React from 'react'

const Work = ({setShowModel,project}) => {
    function openModel(){
        setShowModel(true)
    }
  return (
    <div className='portfolio_work' onClick={openModel}>
        <img className='avatar' src={`${window.location.origin}/assets/${project.img}`} alt=''/>
        <div className='portfolio_work_descritpion'>
            <p className='title'>{project.projectName}</p>
            <p className='cat'>{project.category}</p>
        </div>
    </div>
  )
}

export default Work