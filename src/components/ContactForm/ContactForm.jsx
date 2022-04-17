import { nanoid } from 'nanoid';

import { Component } from "react";

class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    };

  nameInputId = nanoid();
  numberInputId = nanoid();

    handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    // console.log(event.currentTarget)
    // console.log(event.currentTarget.name)
    // console.log(event.currentTarget.value)
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    //this.state.contacts.push(this.state.name)
      this.props.onSubmit(this.state.name, this.state.number);
      this.reset();
  }
    
    reset = () => {
        this.setState({name:'', number:''})
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            id={this.nameInputId}
            value={this.state.name}
            onChange={this.handleChange}
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            // autoComplete="off"
            required />
          <label htmlFor={this.numberInputId}>Number</label>
          <input
            type="tel"
            name="number"
            id={this.numberInputId}
            value={this.state.number}
            onChange={this.handleChange}
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            // required
          />
          <button type='submit'>Add contact</button>
        </form>
      );
  };
};

export default ContactForm;