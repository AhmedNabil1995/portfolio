import History from '../../components/history/History';
import Progress from '../../components/progressSkills/Progress';
import './resume.css';
import { technicalSkills } from '../../data';
import { lanquagesSkills } from '../../data';
import { personalSkills } from '../../data';
import {workHistory} from '../../data';
import {educationHistory} from '../../data';
import { motion } from 'framer-motion';
import { childrenVariant, headerVariant, parentNoAnimate, ParentVarient } from '../../animation/animation';
const Resume = () => {
  return (
    <motion.div className='resume'
    variants={ParentVarient}
    initial='intial'
    animate='animate'
    exit='exit'>
        <div className='container'>
            <motion.h1 variants={headerVariant} 
            initial='initial' 
            animate='animate'
            >MY <span>Resume</span></motion.h1>
            <motion.div className='resume_model btn-container'
            variants={childrenVariant}
            initial='initial' 
            animate='animate'>
                <button className='btn btn-primary-outline'><a href={`${window.location.origin}/assets/Ahmed Nabil Kamal CV.pdf`} download='Ahmed_Nabil_Kamal_CV'>download my CV</a></button>
            </motion.div>
            <motion.div className='row cgap-4' variants={parentNoAnimate}
            initial='initial'
            animate='animate'>
                <motion.div className='col-md-6'
                variants={childrenVariant}>
                    <Progress skills={technicalSkills} title={'Technical Skills'}/>
                </motion.div>
                <motion.div className='col-md-5'
                variants={childrenVariant}>
                    <Progress skills={lanquagesSkills} title={'Lanquages Skills'}/>
                    <Progress skills={personalSkills} title={'Personal Skills'}/>

                </motion.div>
                <motion.div className='col-md-6'
                variants={childrenVariant}>
                        <History history={workHistory} title={'work history'}/>
                </motion.div>
                <motion.div className='col-md-5'
                variants={childrenVariant}>
                        <History history={educationHistory} title={'education history'}/>
                </motion.div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Resume