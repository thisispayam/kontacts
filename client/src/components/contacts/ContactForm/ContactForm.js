import React,{useState, useContext, useEffect} from 'react';
import ContactContext from '../../../context/contact/contactContext';
import Card from 'react-bootstrap/Card';
import './ContactForm.scss';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    
    const { addContact,clearCurrent,updateContact, current } = contactContext;

    // to edit the form - set the form to 'current' data if current is not null
    useEffect(() => {
        if(current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    },[contactContext, current]) // only if contactContext or current value is changed
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
        if(current === null){
            addContact(contact);//running the state trough addContact function in ContactState.js
        }else{
            updateContact(contact);
        }
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        });
    }

    const clearAll = () =>{
        clearCurrent();
    }
    return (
            <Card>
                
        <form onSubmit={onSubmit}>
                    <Card.Header>
                            <h2 className="text-primary">{current ? <i className="fas fa-user-edit"> Edit Contact</i> : <i className="fas fa-user-plus"> Add Contact</i> }</h2>
                    </Card.Header>
                        <Card.Body>
           <input type='text' name='name' placeholder='Name' value={name} onChange={onChange}/> 
            <input type='email' name='email' placeholder='Email' value={email} onChange={onChange} /> 
            <input type='text' name='phone' placeholder='Phone' value={phone} onChange={onChange} /> 
            <h5>Contacy Type</h5>
            <input type='radio' name='type' value='personal' checked={type === 'personal'} onChange={onChange} /> Personal {' '}
            <input type='radio' name='type' value='professional' checked={type === 'professional'} onChange={onChange} /> Professional {' '}
            <div className='add-btn'>
                    <button type="submit" className='btn btn-primary btn-block round-btn'>
                    {current ? 'Update Contact' : 'Add Contact'}
                </button>
                {current &&
                <button className='btn btn-block btn-light round-btn' onClick={clearAll}>Clear All</button>}
            </div>
                        </Card.Body>
           
                   
        </form>
            </Card>
    )
}

export default ContactForm
