import './skill.css'

const Skill = ({skill}) => {
  return (
    <div className='skill'>
        <div className='skill_content'>
            <div className='skill_content_title'>{skill.skillName}</div>
            <div className='skill_content_percentage'>{skill.percentage}%</div>
        </div>
        <div className='progress_bar'>
            <div className='progress_bar_percentage' style={{width:`${skill.percentage}%`}}></div>
        </div>
    </div>
  )
}

export default Skill
