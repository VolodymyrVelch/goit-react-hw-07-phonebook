import PropTypes from 'prop-types';
import { Contact } from './ContactList.styled'
// import { nanoid } from "nanoid";

export const ContactList = ({ contactList, deleteContact }) => {
    
    return (contactList.map(contact =>
        <Contact key={contact.id}>
            <p>{contact.name} : {contact.number}</p>
            <button type='button' onClick={()=>deleteContact(contact.id) }>delete</button>
        </Contact>
    )
    );
}

ContactList.propTypes = {
    contactList: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}
