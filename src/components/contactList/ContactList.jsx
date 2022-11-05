import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/phonebookSlice';
import { deleteContacts } from 'redux/operation';
import { getContacts} from 'redux/selectors';
// import { getContacts, getFilter } from 'redux/selectors';
import { ContactField, Contact, Button,Number } from './ContactList.styled'


export const ContactList = () => {
    // зчитуємо дані  з стейту 
    const contactList = useSelector(getContacts)
    // const contactFilter = useSelector(getFilter)
    console.log({contactList});
    const dispatch = useDispatch();
    // const filtredContact = contactList.filter(contact => contact.name.toLowerCase().includes(contactFilter),);
    
    return (contactList.map(contact =>
        <ContactField key={contact.id}>
            <Contact>{contact.name} : </Contact>
            <Number>{contact.phone}</Number>
            <Button type='button' onClick={() => dispatch(deleteContacts(contact.id)) }>delete</Button>
        </ContactField>
    )
    );
}


