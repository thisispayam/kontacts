import React from 'react'
import Contacts from '../../contacts/Contacts';
import ContactForm from '../../../components/contacts/ContactForm/ContactForm';
import ContactFilter from '../../../components/contacts/ContactFilter/ContactFilter';

const Home = () => {
    return (
        <div >
            <div className='grid-1'>
                <ContactForm />
              
            </div>
            <ContactFilter />
            
            <div className='flex-col'>
               
                <Contacts />
            </div>
        </div>
    )
}

export default Home
