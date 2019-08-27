import React from 'react'
import Contacts from '../../contacts/Contacts';
import ContactForm from '../../../components/contacts/ContactForm/ContactForm';
import ContactFilter from '../../../components/contacts/ContactFilter/ContactFilter';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='grid-1 contact-form'>
                <ContactForm />
            </div>
            <div className='contact-body'>
                <div className='contact-filter'>
                    <ContactFilter />
                </div>
                <div className='flex-col contacts'>
                    <Contacts />
                </div>
            </div>
            
        </div>
    )
}

export default Home
