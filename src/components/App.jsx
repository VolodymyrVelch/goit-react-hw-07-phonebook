import { ContactForm } from "./contactForm/ContactForm";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Main, Contact } from "./App.styled";



export function App () {

    return (
      <Main>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Contact>
        <Filter />
        <ContactList /> 
        </Contact>
      </Main>
    );
  }
