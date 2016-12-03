import React from 'react';

import ContactComponent from './contactComponent';

class ContactsListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  render() {
    let filteredContacts = this.props.contacts.filter(
      (contact)=> {
        return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    return(
      <div>
        <label>Search: </label><input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
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
}

export default ContactsListComponent;
