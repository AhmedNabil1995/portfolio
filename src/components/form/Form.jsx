import './form.css';

const Form = () => {
  return (
    <form className='from'>
      <input type="text" name='name' placeholder='Name*'/>
      <input type="text" name='email'placeholder='Email*'/>
      <input type="text" name='subject'placeholder='Subject*'/>
      <textarea name="message" placeholder='Message*'></textarea>
      <input type='submit' value='send message' className='btn btn-primary'/>
      <div className='social_links'>

      </div>
    </form>
  )
}

export default Form
