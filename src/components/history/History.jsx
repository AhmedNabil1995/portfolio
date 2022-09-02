import HistoryItem from '../historyItem/HistoryItem';
import './history.css';

const History = ({history,title}) => {
  return (
    <div className='history resume_model'>
      <h3>{title}</h3>
        <hr className='skills_hr'/>
        {history.map((historyElement)=>(
        <HistoryItem key={historyElement.companyName} item={historyElement}/>
        ))}
    </div>
  )
}

export default History