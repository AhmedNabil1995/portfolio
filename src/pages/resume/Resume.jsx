import History from '../../components/history/History';
import Progress from '../../components/progressSkills/Progress';
import './resume.css';
import { technicalSkills } from '../../data';
import { lanquagesSkills } from '../../data';
import { personalSkills } from '../../data';
import {workHistory} from '../../data';
import {educationHistory} from '../../data';
const Resume = () => {
  return (
    <div className='resume'>
        <div className='container'>
            <h1>MY <span>Resume</span></h1>
            <div className='resume_model'>
                <button className='btn btn-primary-outline'>download my CV</button>
            </div>
            <div className='row cgap-4'>
                <div className='col-md-6'>
                    <Progress skills={technicalSkills} title={'Technical Skills'}/>
                </div>
                <div className='col-md-5'>
                    <Progress skills={lanquagesSkills} title={'Lanquages Skills'}/>
                    <Progress skills={personalSkills} title={'Personal Skills'}/>

                </div>
                <div className='col-md-6'>
                        <History history={workHistory} title={'work history'}/>
                </div>
                <div className='col-md-5'>
                        <History history={educationHistory} title={'education history'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume