import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactList from '../pure/connected';

const ContactComponent = () => {

    const contactOne = new Contact('Alberto', 'Mejias', 'alberto@mejias.com', 'true')

    return (
        <div>

            <ContactList contact={contactOne}></ContactList>
        
        </div>
    );
};




export default ContactComponent;
