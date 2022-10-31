import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactField, Contact, Button,Number } from './ContactList.styled'


export const ContactList = () => {
    // зчитуємо дані  з стейту 
    const contactList = useSelector(getContacts)
    const contactFilter = useSelector(getFilter)

    const dispatch = useDispatch();
    const filtredContact = contactList.filter(contact => contact.name.toLowerCase().includes(contactFilter),);
    
    return (filtredContact.map(contact =>
        <ContactField key={contact.id}>
            <Contact>{contact.name} : </Contact>
            <Number>{contact.number}</Number>
            <Button type='button' onClick={() => dispatch(deleteContact(contact.id)) }>delete</Button>
        </ContactField>
    )
    );
}


