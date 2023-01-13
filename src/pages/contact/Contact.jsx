import { childrenVariant, headerVariant, parentNoAnimate, ParentVarient } from '../../animation/animation';
import ContactInfo from '../../components/contactInfo/ContactInfo';
import Form from '../../components/form/Form';
import Map from '../../components/map/Map';
import './contact.css';
import { motion } from 'framer-motion';
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
    <motion.div className='contact' variants={ParentVarient}
    initial='intial'
    animate='animate'
    exit='exit'>
      <motion.div className='container' variants={parentNoAnimate}
        initial='initial' 
        animate='animate'>
        <motion.h1 variants={headerVariant}>Contact <span>Me</span></motion.h1>
        <motion.div className='row' variants={childrenVariant}>
            {contactInfon.map((contact,i)=>(
                <div className='col-l-4 col-md-6' key={i}>
                    <ContactInfo contact={contact}/>
                </div>
            ))}
        </motion.div>
        <motion.div className='row rgap-4' variants={childrenVariant}>
                <div className='col-md-6' >
                    <Form />
                </div>
                <div className='col-md-6' >
                    <Map />
                </div>
            </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
