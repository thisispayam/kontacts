import React,{useState} from 'react';
import './ContactForm.scss';

const ContactForm = () => {
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
    
    return (
        <form>
           <h2 className="text-primary">Add Contact</h2>
           <input type='text' name='name' placeholder='Name' value={name} onChange={onChange}/> 
            <input type='text' name='email' placeholder='Email' value={email} onChange={onChange} /> 
            <input type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} /> 
            <h5>Contacy Type</h5>
            <input type='radio' name='type' value='personal' checked={type === 'personal'} /> Personal {' '}
            <input type='radio' name='type' value='professional' checked={type === 'professional'} /> Professional {' '}
            <div>
                <button type="submit" value='Add Contact' className='btn btn-primary btn-block'>
                    Add Contact
                </button>
            </div>
        </form>
    )
}

export default ContactForm
