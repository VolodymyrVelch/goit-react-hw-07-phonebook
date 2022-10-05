import React , {Component} from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Main, Contact } from "./App.styled";
import { nanoid } from "nanoid";
import Notiflix from 'notiflix';


// створюємо класс 
export class App extends Component {
  state = {
  contacts: [
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
    {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
    {id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  }
  
  // при сабміті  форми отримуємо введені дані (з ContactForm)
  formSubmitData = (value) => {
    // деструктуризуємо отримані дані (а також gthvfytynys вкладені в state для  тестування)
    const { name, number } = value
    const {contacts} = this.state
    // по умаові перевіряємо чи немає такого котакту в списку , якщо є виводимо повідомлення (Notiflix) 
    if (contacts.some(contact=> contact.name===name)) {
     Notiflix.Notify.failure('Contact is already in contact list');
    } else
    // якщо немає , додаємо в список (id генеруємо nanoid). створюємо новий обєк в який розпиляємо попередній + нові дані
        this.setState(({ contacts }) => ({
      contacts: [...contacts, {id:nanoid(), name, number }],
    }));
  }

  // видаляємо контакт з тел книги порівнюючи id вибраного з іншими контактами якщо не дорінює залишаєм
  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }

  // фільтруємо книгу згідно веедених даних в поле фільтрації (приводимо символи toLowerCase для порівняння)
  filterContscts = (e) => {
    this.setState({filter: e.currentTarget.value.toLowerCase()});
  }

  // перевіряємо чи є дані влокал сторедж , якщо так  парсим дані з сторедж, в іншому випадку значення буде null 
  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parseContacts = JSON.parse(contacts)
    if (parseContacts) {
      this.setState ({contacts: parseContacts})
      }
  }

  componentDidUpdate( prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }
  
  render() {
    const {contacts}=this.state
    const filtredContact = contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter),);

    return (
      <Main>
        <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData}/>
        <h2>Contacts</h2>
        <Contact>
        <Filter
          onChange={this.filterContscts} />
        <ContactList
          contactList={filtredContact}
          deleteContact={this.deleteContact} />
        </Contact>
        </div>
      </Main>
    );
}
};
