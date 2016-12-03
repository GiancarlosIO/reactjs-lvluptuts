import React from 'react';

const ContactComponent = ({contact, item}) =>
      <li>
        {contact.name} - {contact.phone}
      </li>

export default ContactComponent;
