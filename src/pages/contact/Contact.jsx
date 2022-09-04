import ContactInfo from '../../components/contactInfo/ContactInfo';
import Form from '../../components/form/Form';
import Map from '../../components/map/Map';
import './contact.css';

const Contact = () => {
    let contactInfon = [
        {
            icon:'fa-solid fa-location-dot',
            title: 'MY LOCATION',
            value: '14 st. Mahmoud Kotb - Mahkma Square'
        },
        {
            icon:'fa-solid fa-phone',
            title: 'PHONE NUMBER',
            value: '01020522304',
        },
        ,
        {
            icon:'fa-solid fa-envelope',
            title: 'EMAIL ADDRESS',
            value: 'ahmed.nabil55586@gmail.com',
        },
        
    ]
  return (
    <div className='contact'>
      <div className='container'>
        <h1>Contact <span>Me</span></h1>
        <div className='row'>
            {contactInfon.map((contact,i)=>(
                <div className='col-l-4 col-md-6' key={i}>
                    <ContactInfo contact={contact}/>
                </div>
            ))}
        </div>
        <div className='row rgap-4'>
                <div className='col-md-6'>
                    <Form />
                </div>
                <div className='col-md-6'>
                    <Map />
                </div>
            </div>
      </div>
    </div>
  )
}

export default Contact
