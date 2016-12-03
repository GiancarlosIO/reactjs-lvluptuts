import React from 'react';

import ContactComponent from './contactComponent';

class ContactsListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      contacts: props.contacts
    };
  }

  render() {
    let filteredContacts = this.state.contacts.filter(
      (contact)=> {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return(
      <div>
        <label>Search: </label><input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search"/>
        <form onSubmit={this.addContact.bind(this)}>
          <h2>Add contact</h2>
          <label>Name: <input type="text" ref="name"></input></label>
          <br/>
          <label>Phone: <input type="text" ref="phone"></input></label>
          <br/>
          <input type="submit" value="Add" />
        </form>
        <ul>
          {
            filteredContacts.map((contact, index)=>{
              return <ContactComponent contact={contact} key={contact.id}/>
            })
          }
        </ul>
      </div>
    );
  }

  // custom function
  updateSearch(event) {
    console.log('yo');
    this.setState({
      // set the value and only accept 21 characters
      search: event.target.value.substr(0, 20)
    });
  }

  addContact(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let phone = this.refs.phone.value;
    let id = this.state.contacts.length + 1;
    this.setState({
      contacts: this.state.contacts.concat({id, name, phone})
    });
    this.refs.name.value = '';
    this.refs.phone.value = '';
  }
}

export default ContactsListComponent;
