import './contactInfo.css'

const ContactInfo = ({contact}) => {
  return (
    <div className='contact-info'>
      <i className={contact.icon}></i>
      <h3>{contact.title}</h3>
      <p>{contact.value}</p>
    </div>
  )
}

export default ContactInfo
