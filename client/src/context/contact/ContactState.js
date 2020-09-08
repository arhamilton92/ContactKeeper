import React, { useReducer } from 'react';
import {v4 as uuid} from 'uuid'
import contactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                "type": "personal",
                "_id": "5f4e8c50570f46594b5dabc8",
                "name": "Nerd McNerdface",
                "email": "nerd@nerdschool.com",
                "phone": "700-700-7000",
            },
            {
                "type": "personal",
                "_id": "5f4e8c2c570f46594b5dabc7",
                "name": "Cool Dudeman",
                "email": "CDMAN@email.com",
                "phone": "700-700-7000",
            },
            {
                "type": "professional",
                "_id": "5f4e8c0f570f46594b5dabc6",
                "name": "Sara Smith",
                "email": "ssmith@email.com",
                "phone": "700-700-7000",
            }
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState)

    //Add Contact
    const addContact = contact => {
        contact.id = uuid;
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    //Delete Contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    //Set Current Contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    //Clear Current Contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT, });
    };

    //Update Contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    //Filter Contact
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };

    //Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <contactContext.Provider 
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}>
            { props.children }
        </contactContext.Provider>
    )
}

export default ContactState;