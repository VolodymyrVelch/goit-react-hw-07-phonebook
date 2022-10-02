import React , {Component} from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Main } from "./App.styled";
import { nanoid } from "nanoid";
import Notiflix from 'notiflix';


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
  
  formSubmitData = (value) => {
    const { name, number } = value
    const {contacts} = this.state
    
    if (contacts.some(contact=> contact.name===name)) {
     Notiflix.Notify.failure('Contact is already in contact list');
    } else
        this.setState(({ contacts }) => ({
      contacts: [...contacts, {id:nanoid(), name: name, number: number }],
    }));
  }

  deleteContact = (contactId) => {
    // const { contacts } = this.state;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  }
  filterContscts = (e) => {
    this.setState({filter: e.currentTarget.value.toLowerCase()});
  }
  
  render() {
    const {contacts}=this.state
    const filtredContact = contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter),);

    return (
      <Main>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData}/>
        <h2>Contacts</h2>
        <Filter
          onChange={this.filterContscts} />
        <ContactList
          contactList={filtredContact}
          deleteContact={this.deleteContact} />
      </Main>
    );
}
};
