import React from 'react';
import ReactDOM from 'react-dom';

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Contacts list</h1>
      </div>
    )
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('es6'));
