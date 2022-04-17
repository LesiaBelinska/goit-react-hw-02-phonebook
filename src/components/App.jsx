import { Component } from "react";

import { nanoid } from 'nanoid';

import ContactForm from "./ContactForm/ContactForm.jsx";
import ContactList from "./ContactList/ContactList.jsx";
import Filter from "./Filter/Filter.jsx";

class App extends Component {

  state = {
    contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  }

  

  addNewContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})
  }

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    )
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter}
        onChange={this.changeFilter}
        />
        <ContactList
          contacts={this.getFilteredContacts()} />
      </div>
    )
  }
};

export default App;