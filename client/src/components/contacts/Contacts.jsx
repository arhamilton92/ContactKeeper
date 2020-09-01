import React, { useContext, Fragment } from 'react';
import ContactContext from '../../context/contact/ContactContext';
import ContactItem from './ContactItem';

function Contacts() {
    const contactContext = useContext(ContactContext);

    const { contacts } = contactContext;

    return (
        <Fragment>
            {contacts.map(contact => 
                <ContactItem key={contact._id} contact={contact} />
                )}
        </Fragment>
    )
};

export default Contacts;
