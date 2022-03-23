import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactList = ({ contact }) => {

    const [online, setonline] = useState(contact.connected);

    const changeOnline = () => {
        setonline(!online)
        console.log(online)
    }

    return (
        <div>
            <div>Nombre: {contact.name}</div>
            <div>Apellido: {contact.lname}</div>
            <div>Email: {contact.email}</div>
            <div>{online ? "Conectado" : "No conectado"}</div>
            <div>
                <button onClick={changeOnline}>
                    Cambiar estado
                </button>
            </div>
        </div>
    );
};


ContactList.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactList;
