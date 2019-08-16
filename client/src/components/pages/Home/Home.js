import React from 'react'
import Contacts from '../../contacts/Contacts';
import ContactForm from '../../../components/contacts/ContactForm/ContactForm';

const Home = () => {
    return (
        <div className='grid-1'>
            <div>
                <ContactForm />
            </div>
            <div className='flex-col'>
                <Contacts />
            </div>
        </div>
    )
}

export default Home
