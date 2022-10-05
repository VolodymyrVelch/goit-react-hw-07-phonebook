import PropTypes from 'prop-types';
import { ContactField, Contact, Button,Number } from './ContactList.styled'


export const ContactList = ({ contactList, deleteContact }) => {
    // рендер інфо в розмітку за допомогою map (в contactList приходать дані згідно стейт або згадно відфільтрованих згідно методу filter)
    // видадення потрібного елементу  на основі id (в button)
    return (contactList.map(contact =>
        <ContactField key={contact.id}>
            <Contact>{contact.name} : </Contact>
            <Number>{contact.number}</Number>
            <Button type='button' onClick={()=>deleteContact(contact.id) }>delete</Button>
        </ContactField>
    )
    );
}

ContactList.propTypes = {
    contactList: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired
}
