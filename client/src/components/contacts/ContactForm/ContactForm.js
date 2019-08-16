import React,{useState, useContext} from 'react';
import ContactContext from '../../../context/contact/contactContext';

import './ContactForm.scss';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name:'',
        email:'',
        phone:'',
        type:'personal'
    });
    const { name, email, phone, type } = contact;
    
    const onChange = (e) => setContact({
        ...contact, // whatever is in current contact state
        [e.target.name]: e.target.value
    }); 
    
    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);//running the state trough addContact function in ContactState.js
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    }
    return (
        <form onSubmit={onSubmit}>
           <h2 className="text-primary">Add Contact</h2>
           <input type='text' name='name' placeholder='Name' value={name} onChange={onChange}/> 
            <input type='text' name='email' placeholder='Email' value={email} onChange={onChange} /> 
            <input type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} /> 
            <h5>Contacy Type</h5>
            <input type='radio' name='type' value='personal' checked={type === 'personal'} onChange={onChange} /> Personal {' '}
            <input type='radio' name='type' value='professional' checked={type === 'professional'} onChange={onChange} /> Professional {' '}
            <div>
                <button type="submit" value='Add Contact' className='btn btn-primary btn-block'>
                    Add Contact
                </button>
            </div>
        </form>
    )
}

export default ContactForm
