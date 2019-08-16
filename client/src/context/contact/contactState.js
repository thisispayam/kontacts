import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
ADD_CONTACT,
DELETE_CONTACT,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_CONTACT,
FILTER_CONTACT,
SET_ALERT,
REMOVE_ALERT 
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts:[
            {
                id:1,
                name:'Payam kz',
                email:'payamtesting@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Paul Smith',
                email: 'paultesting@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Mike doe',
                email: 'mikedoe@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ]
    };
    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact})
    }
    //Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }
    // Set Current Contact

    //Clear Current Contact

    //Update Contact

    //Filter Contacts

    //Clear Filter

    return (
        <ContactContext.Provider 
        value={{ 
            contacts: state.contacts,
            addContact,
            deleteContact
            }} >
            {props.children}
        </ContactContext.Provider>
    )

}

export default ContactState;