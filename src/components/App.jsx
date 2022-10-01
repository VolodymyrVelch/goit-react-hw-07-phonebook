import React , {Component} from "react";
import { ContactForm } from "./contactForm/ContactForm";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Main } from "./App.styled";
import { nanoid } from "nanoid";


export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',

  }

  
  formSubmitData = (value) => {
    const { name, number } = value
        this.setState(({ contacts }) => ({
      contacts: [...contacts, {id:nanoid(), name: name, number: number }],
    }));
  }
  
  render() {
  
    return (
      <Main>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitData}/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList contactList={this.state.contacts} />
      </Main>
    );
}
};
