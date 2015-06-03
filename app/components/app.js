/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

var App = module.exports = React.createClass({

  render: function() {
    return (
      <div className="container">
        <ul>
          <li><Link to="index">Brent Kirkland</Link></li>
          <li><Link to="foo">Portfolio</Link></li>
          <li><Link to="bar">Github</Link></li>
        </ul>
        {this.props.activeRouteHandler()}
      </div>
    );
  },

  renderIndex: function() {
    return (
      <div>
        <h2>Index</h2>
      </div>
    );
  }

});

