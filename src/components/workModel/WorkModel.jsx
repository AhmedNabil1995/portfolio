import './workModel.css'
import data from '../../data';
import { useState } from 'react';
const WorkModel = ({setShowModel,item}) => {

  return (
    <div className='work_model'>
        <div className='wrapper'>
            <div className='close' onClick={()=>setShowModel(false)}>X</div>
            <h1 className='model_title'>{item.projectName}</h1>
            <hr />
            <div className='row rgap-4'>
                <div className='col-md-6'>
                <div className='img_container'>
                    <img className='avatar' src={`${window.location.origin}/assets/${item.img}`} alt=''/>
                </div>
                </div>
                <div className='col-md-6'>
                <div className='content'>
                    <h2 className='project_info'>PROJECT INFO:</h2>
                    <p className='project_desc'>{item.description}</p>
                    <h2 className='project_details'>PROJECT DETAILS:</h2>
                    <div className='project_details_item'>
                        <span className='item_key'>Client:</span>
                        <span className='item_value'>{item.client}</span>
                    </div>
                    <div className='project_details_item'>
                        <span className='item_key'>Technologies:</span>
                        <span className='item_value'>{item.technologies}</span>
                    </div>
                    <div className='project_details_item'>
                        <span className='item_key'>live Demo:</span>
                        <a href={item.url} target='_blank' className='item_value'>{item.url}</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkModel