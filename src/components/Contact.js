import React from 'react';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div id="Contact-section">
      <div className='contact'>
        <ul>
          <li>
            <a href='tel:+91 6354041983' target='_blank'>Phone</a>
          </li>
          <li>
            <a href='mailto:jdgothi04@gmail.com' target='_blank'>Email</a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/jahnvee-patel-195420252/' target='_blank'>Linkedin</a>
          </li>
          <li>
            <a href='https://github.com/asthajahnvee' target='_blank'>Github</a>
          </li>
          <li>
            <a href='https://www.behance.net/jahnveepatel' target='_blank'>Behance</a>
          </li>
          <li>
            <a href='https://medium.com/@jdgothi04' target='_blank'>Medium</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Contact;