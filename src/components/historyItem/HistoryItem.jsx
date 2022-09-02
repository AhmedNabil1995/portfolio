import './historyItem.css'

const HistoryItem = ({item}) => {
  return (
    <div className='history_item'>
        <div className='start'></div>
        <h3 className='title'>{item?.companyName}</h3>
        <p className='job_time'>{item?.job} {item?.from} - {item?.to}</p>
        <p className='description'>{item?.description}</p>
        <div className='end'></div>
    </div>
  )
}

export default HistoryItem