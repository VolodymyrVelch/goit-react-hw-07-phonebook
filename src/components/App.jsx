import { ContactForm } from "./contactForm/ContactForm";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Main, Contact } from "./App.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "redux/operation";
import { selectError, selectIsLoading } from "redux/selectors";

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError)
  useEffect(() => {
  dispatch(fetchAll())
  }, [dispatch]);

    return (
      <Main>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Contact>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
        <ContactList /> 
        </Contact>
      </Main>
    );
  }
