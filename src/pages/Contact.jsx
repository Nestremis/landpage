import React from 'react';
import './contact.scss';
// import graph './photo/remote-edu.png';

function Contact() {
    return (
        <div className='contact' id='kontakt'>
            <div className='emaildiv'>        
              <h1> kontakt </h1> 
              <form>
                <input type='text' placeholder='email' />
                <textarea placeholder='wiadomość'> </textarea>
                <button type='submit'> WYŚLIJ </button> 
              </form>
                {/* <img src='media/eduremote.png' alt='grafika edu' />  */}
            </div>
            <footer> 
                <h2> i know. </h2>
                <h6> Copyright &copy; 2021. All right reserved by <span style={{color: 'limegreen'}}> NES </span>. </h6>
            </footer>
        </div>
    )
}

export default Contact
