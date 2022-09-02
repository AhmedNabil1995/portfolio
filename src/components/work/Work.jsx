import './work.css'

const Work = ({setShowModel,project,setItem}) => {
    function openModel(i){
      setItem(project)
        setShowModel(true)
    }
  return (
    <div className='portfolio_work' onClick={openModel}>
        <img className='avatar' src={`${window.location.origin}/assets/${project.img}`} alt=''/>
        <div className='portfolio_work_descritpion'>
            <p className='title'>{project.projectName}</p>
            <p className='cat'>{project.category[0]}</p>
        </div>
    </div>
  )
}

export default Work