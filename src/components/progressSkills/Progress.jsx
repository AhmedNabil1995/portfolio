import Skill from '../skill/Skill'
import './progress.css'

const Progress = ({skills,title}) => {
  return (
    <div className='progress resume_model'>
      <h3>{title}</h3>
        <hr className='skills_hr'/>
        {skills.map((skill)=>(
          <Skill key={skill.skillName} skill={skill}/>
        ))}
    </div>
  )
}

export default Progress
