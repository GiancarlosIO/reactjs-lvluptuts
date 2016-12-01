var React = require('react');
var ReactDOM = require('react-dom');

//require modules
var PersonComponent = require('./personComponent');

var HelloWord = React.createClass({
  // set the type of props
  propTypes: {
    name: React.PropTypes.string,
    isPerson: React.PropTypes.bool
  },

  // set the default props
  getDefaultProps: function () {
    return {
      name: 'Jose'
    }
  },

  //set initial steps
  getInitialState: function () {
    return {
      value: 1
    }
  },

  // component was mounted succesfully
  componentDidMount: function () {
    this.setState({
      value: this.state.value + 15
    })
  },

  //render the content html
  render: function () {
    var greeting = 'World';

    if (this.props.isPerson) {
      greeting = (<PersonComponent name={this.props.name} />);
    }

    return(
      <div>
        <span>value {this.state.value}</span>
        <h1>hellow {greeting}</h1>
      </div>
    );
  }
});


ReactDOM.render(<HelloWord name="Tim" isPerson={false} />, document.getElementById('hello'))
