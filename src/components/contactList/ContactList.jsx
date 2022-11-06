import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactField, Contact, Button, Number, NumberWrap } from './ContactList.styled'


export const ContactList = () => {
    // зчитуємо дані  з стейту(сервер mockapi.io) 
    const contactList = useSelector(selectContacts)
    const contactFilter = useSelector(selectFilter)
    
    const dispatch = useDispatch();
    const filtredContact = contactList.filter(contact => contact.name.toLowerCase().includes(contactFilter),);
    return (filtredContact.map(contact =>
        <ContactField key={contact.id}>
            <Contact>{contact.name} : </Contact>
            <NumberWrap>
            <Number>{contact.number}</Number>
            <Button type='button' onClick={() => dispatch(deleteContacts(contact.id)) }>delete</Button>
            </NumberWrap>
        </ContactField>
    )
    );
}


