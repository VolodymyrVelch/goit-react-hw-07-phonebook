// import PropTypes from 'prop-types';
import { Contact } from './ContactList.styled'
// import { nanoid } from "nanoid";

export const ContactList = ({ contactList }) => {
    
    return (contactList.map(contact =>
        <Contact key={contact.id}><span>{contact.name} : {contact.number}</span><button>delete</button></Contact>
    )
    );
}
