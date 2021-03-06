var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function (){
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Leonardo Rodrigues Lima'
      },
      repos: ['a', 'b', 'c']
    }
  },
  componentDidMount: function (){
 /*   var childRef = firebase.database().ref(this.props.params.username);
    console.log(childRef);
    this.bindAsArray(childRef, 'notes');*/
  },
  componentWillUnMount: function (){
    this.unbind('notes');
  },
  render: function () {

    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos = {this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;