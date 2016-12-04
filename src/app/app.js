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
];
let tasks = [
  { id: 1, name: 'eat a lot', time: '1 hour' },
  { id: 2,name: 'listen music', time: '2 hours' },
  { id: 3,name: 'watch tv', time: '3 hours' }
]

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts list</h1>
        <ContactsListComponent contacts={this.props.contacts} tasks={this.props.tasks}/>
      </div>
    )
  }
}

ReactDOM.render(<AppComponent contacts={contacts} tasks={tasks} />, document.getElementById('es6'));
