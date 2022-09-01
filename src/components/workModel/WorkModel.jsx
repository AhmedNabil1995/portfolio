import './workModel.css'
import data from '../../data';
import { useState } from 'react';
const WorkModel = ({setShowModel,index=0}) => {
    let [project,setProject] = useState(data[index]);
  return (
    <div className='work_model'>
        <div className='wrapper'>
            <div className='close' onClick={()=>setShowModel(false)}>X</div>
            <h1 className='model_title'>{project.projectName}</h1>
            <hr />
            <div className='row rgap-4'>
                <div className='col-md-6'>
                <div className='img_container'>
                    <img className='avatar' src={`${window.location.origin}/assets/${project.img}`} alt=''/>
                </div>
                </div>
                <div className='col-md-6'>
                <div className='content'>
                    <h2 className='project_info'>PROJECT INFO:</h2>
                    <p className='project_desc'>{project.description}</p>
                    <h2 className='project_details'>PROJECT DETAILS:</h2>
                    <div className='project_details_item'>
                        <span className='item_key'>Client:</span>
                        <span className='item_value'>{project.client}</span>
                    </div>
                    <div className='project_details_item'>
                        <span className='item_key'>Technologies:</span>
                        <span className='item_value'>{project.technologies}</span>
                    </div>
                    <div className='project_details_item'>
                        <span className='item_key'>GitHub:</span>
                        <a href={project.github} target='_blank' className='item_value'>{project.github}</a>
                    </div>
                    <div className='project_details_item'>
                        <span className='item_key'>live Demo:</span>
                        <a href={project.url} target='_blank' className='item_value'>{project.url}</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkModel