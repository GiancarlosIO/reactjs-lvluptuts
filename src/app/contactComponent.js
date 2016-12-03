import React from 'react';

class ContactComponent extends React.Component {
  render() {
    return(
      <li>
        {this.props.contact.name} - {this.props.contact.phone}
      </li>
    );
  }
}

export default ContactComponent;
