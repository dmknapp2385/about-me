import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid');
              } else {
                setErrorMessage('');
              }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        } 
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }

    function handleSubmit(e) {
        e.preventDefault()
        alert('Your email has been submitted')

    }

    return (
        <section className="pt-13 mx-auto" style={{maxWidth: '400px'}}>
            <h1 className="pb-4 is-size-3">
                Contact Me
            </h1>
            <form onSubmit={handleSubmit} id='contact-form'>
                <div className="field">
                    <label className="tert label" htmlFor='name' >Name:</label>
                    <div className="control">
                        <input className="input" onBlur={handleChange} defaultValue={name}  type='text' name='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="tert label" htmlFor='email'>Email address:</label>
                    <div className="control">
                        <input className="input" onBlur={handleChange} defaultValue={email}  type='email' name='email'/>
                    </div>
                </div>
                <div className="field"> 
                    <label className="tert label" htmlFor='message'>Message:</label>
                    <div className="control">
                        <textarea className="textarea" onBlur={handleChange} defaultValue={message}  name='message' rows='5' />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="help is-size-5 quad error-text is-3">{errorMessage}</p>
                    </div>
                )}
                <div className="field is-grouped pt-5 pb-6">
                    <div className="control">
                        <button className="button is-link quad" type="sumbit">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button is-link primary" >Cancel</button>
                    </div>
                </div>
                
            </form>
        </section>
    )
}

export default Contact;