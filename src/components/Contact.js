import React, {useState, useRef} from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'


function Contact() {

  const formRef = useRef();

  const [switchedToggled, setSwitchedToggled] = useState(false);

  const [done, setDone] = useState(false)

  const ToggleSwitch = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d57wiaf', 'template_mu8bxtc', formRef.current, 'user_Gx4zVSpfY1XzcO3lYuKGy')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    switchedToggled ? setSwitchedToggled(false) : setSwitchedToggled(true);
    done ? setDone(false) : setDone(true);

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d57wiaf",
        "template_mu8bxtc",
        formRef.current,
        "user_Gx4zVSpfY1XzcO3lYuKGy"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact'>
    <div className='contact-container'>
      <div className='contact-top'>
        <h2>Contact Me</h2>
      </div>
      <div className='contact-bottom'>
        <form ref={formRef} className='' onSubmit={handleSubmit}>
          <label><h5>Name</h5></label>
          <input type='text' name='user_name'/>
          <label><h5>Email</h5></label>
          <input type='email' name='user_email'/>
          <label><h5>Message</h5></label>
          <textarea type="text" name='user_subject'/>
          <button type="submit" className={switchedToggled ? "buttonMove" : "buttonOrigin"} onClick={ToggleSwitch}>{switchedToggled ? "Sent" : "Send"}</button>

          {done && "Thank you, I'll reply ASAP..."}
        </form>
      </div>
    </div>
    </section>
  )
}

export default Contact