import React, { useContext, useEffect } from 'react'
import Contacts from '../../contacts/Contacts';
import ContactForm from '../../../components/contacts/ContactForm/ContactForm';
import ContactFilter from '../../../components/contacts/ContactFilter/ContactFilter';
import AuthContext from '../../../context/auth/authContext';
import './Home.scss';

const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        authContext.loadUser();// checks the token, validiate with the backend, puts the user in to state
        //eslint-disable-next-line
    }, []);
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
