import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'; 

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
  };

  handleSubmit = (event) => {
    const { name, number } = this.state;
    event.preventDefault();
    this.props.onSubmit(name, number);
    this.reset();
  };
    
  reset = () => {
    this.setState({
      name: '',
      number: ''
    })
  };

  render() {
    const handleSubmit = this.handleSubmit;
    const handleChange = this.handleChange;
    const nameInputId = this.nameInputId;
    const numberInputId = this.nameInputId;
    const { name, number } = this.state;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor={nameInputId}>Name</label>
          <input
            type="text"
            name="name"
            id={nameInputId}
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            autoComplete="off"
            required />
          <label htmlFor={numberInputId}>Number</label>
          <input
            type="tel"
            name="number"
            id={numberInputId}
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type='submit'>Add contact</button>
        </form>
      );
  };
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};