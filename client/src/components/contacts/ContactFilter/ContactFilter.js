import React ,{useContext, useRef, useEffect} from 'react'
import ContactContext from '../../../context/contact/contactContext';
import './ContactFilter.scss';

const ContactFilter = () => {
   const contactContext = useContext(ContactContext);
    const text = useRef('');

    const { filterContact, clearFilter, filtered } = contactContext;
   
    useEffect(() => {
        if(filtered === null){
            text.current.value = ''; // we have access via useRef
        }
    });
   
    const onChange = (e) => {
        if (text.current.value !== ''){
            filterContact(e.target.value);
        }else {
            clearFilter();
        }
    }
    return (
        <form className='filter-form'>
            <input ref={text} type='text' placeholder='Filter contacts ...' onChange={onChange} />
        </form>
    )
}

export default ContactFilter
