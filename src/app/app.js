import React from 'react';
import ReactDOM from 'react-dom';

//import componetns
import ContactsListComponent from './contactsListComponent';

//vars-data

let contacts = [{
  id: 1,
  name: 'Scott',
  phone: '555 555 5555'
},{
  id: 2,
  name: 'Tim',
  phone: '111 111 5555'
},{
  id: 3,
  name: 'Jeff',
  phone: '222 222 5555'
}
]

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts list</h1>
        <ContactsListComponent contacts={this.props.contacts}/>
      </div>
    )
  }
}

ReactDOM.render(<AppComponent contacts={contacts}/>, document.getElementById('es6'));
