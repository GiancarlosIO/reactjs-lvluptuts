var React = require('react');

var PersonComponent = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      name: 'Giancarlos'
    }
  },

  render: function () {
    return(
      <span>{this.props.name}</span>
    )
  }
});

module.exports = PersonComponent;
