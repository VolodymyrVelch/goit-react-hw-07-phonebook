import React , {useState, useEffect} from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Main, Contact } from "./App.styled";
import { nanoid } from "nanoid";
import Notiflix from 'notiflix';


export function App () {
  const [filter, setfilter] = useState('');
  const [contacts, setcontacts] = useState(
    (JSON.parse(window.localStorage.getItem("contacts"))??
    ([
      {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
      {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
      {id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ])
  ));
  

  useEffect(() => {
   window.localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts]);


  // при сабміті  форми отримуємо введені дані (з ContactForm)
  const formSubmitData = (value) => {
    // деструктуризуємо отримані дані (а також gthvfytynys вкладені в state для  тестування)
    const { name, number } = value

    // по умаові перевіряємо чи немає такого котакту в списку , якщо є виводимо повідомлення (Notiflix) 
    if (contacts.some(contact => contact.name === name)) {
     Notiflix.Notify.failure('Contact is already in contact list');
    } else
    // якщо немає , додаємо в список (id генеруємо nanoid). створюємо новий обєк в який розпиляємо попередній + нові дані
        setcontacts(( contacts ) => ( [...contacts, { id: nanoid(), name, number }]));
  }

  // // видаляємо контакт з тел книги порівнюючи id вибраного з іншими контактами якщо не дорінює залишаєм
  const deleteContact = (contactId) => {
    setcontacts(prevState=>prevState.filter(contact => contact.id !== contactId))
  }

  // // фільтруємо книгу згідно веедених даних в поле фільтрації (приводимо символи toLowerCase для порівняння)
  const filterContscts = (e) => setfilter(e.currentTarget.value.toLowerCase());
  
  const filtredContact = contacts.filter(contact => contact.name.toLowerCase().includes(filter),);

    return (
      <Main>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={formSubmitData}/>
        <h2>Contacts</h2>
        <Contact>
        <Filter
          onChange={filterContscts} />
        <ContactList
          contactList={filtredContact}
          deleteContact={deleteContact} /> 
        </Contact>
      </Main>
    );
  }

