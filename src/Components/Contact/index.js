import React, { useState } from "react";
import { validateEmail } from '../../utils/helpers';

function Contact () {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});

    const {name, email, message} = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleState(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    
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

    async function handleSubmit(e) {
        e.preventDefault();
        const { name, email, message } = formState;
        const isValid = validateEmail(email)
        if(name.length === 0 || !validateEmail || message.length === 0){
            alert('Please complete the form')
        } else {
            try{
                let res = await fetch('https://formsubmit.co/dmknapp2385@gmail.com', {
                    method: "POST", 
                    body: JSON.stringify({
                        name: formState.name,
                        email: formState.email,
                        message: formState.message
                    })

                })
                if(res.status === 200) {
                    alert('Your email has been submitted')
                    setFormState({name:'', email:'', message: ''});
                } else{
                    setErrorMessage('Some Error Occured')
                }
            }catch(err) {
                console.error(err)
            }
        }
        
    }

    function clearForm(e) {
        e.preventDefault();
        setFormState({name:'', email:'', message: ''});
        setErrorMessage('');
    }

    return (
        <section className="pt-13 mx-auto" style={{maxWidth: '400px'}}>
            <h1 className="pb-4 is-size-3">
                Contact Me Here 
            </h1>
            <form onSubmit={handleSubmit} id='contact-form'>
                <div className="field">
                    <label className="tert label" htmlFor='name'>Name:</label>
                    <div className="control">
                        <input value={formState.name} className="input" onChange={handleState} onBlur={handleChange} defaultValue={name}  type='text' name='name'/>
                    </div>
                </div>
                <div className="field">
                    <label className="tert label" htmlFor='email'>Email address:</label>
                    <div className="control">
                        <input className="input" value={formState.email} onChange={handleState} onBlur={handleChange} defaultValue={email}  type='email' name='email'/>
                    </div>
                </div>
                <div className="field"> 
                    <label className="tert label" htmlFor='message'>Message:</label>
                    <div className="control">
                        <textarea value={formState.message} onChange={handleState} className="textarea" onBlur={handleChange} defaultValue={message}  name='message' rows='5' />
                    </div>
                </div>
                {errorMessage && (
                    <div>
                        <p className="help is-size-5 quad error-text is-3">{errorMessage}</p>
                    </div>
                )}
                <div className="field is-grouped pt-5 pb-6">
                    <div className="control">
                        <button className="button bkg-tert quad" type="sumbit">Submit</button>
                    </div>
                    <div className="control">
                        <button onClick={clearForm} className="button is-white">Cancel</button>
                    </div>
                </div>
                
            </form>
            <h2 className="pb-4 mb-4 is-size-4">
                or email me at dmknapp2385@gmail.com
            </h2>
        </section>
    )
}

export default Contact;