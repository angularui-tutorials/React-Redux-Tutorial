import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import {updateUser} from "./actions/user-actions";

class App extends React.Component {
  constructor(props){
    super(props);
    this.updateUser = this.updateUser.bind(this);
  }
   updateUser() {
    this.props.onUpdateUser('sammy');
  }

  render() {
    console.log('props', this.props);
    return (
        <div className="App">
        <button onClick={this.updateUser}>Update User</button>
        </div>
    );
    console.log('updated Props', this.props);
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    user: state.user.name
  };
};

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps,mapActionsToProps)(App);

