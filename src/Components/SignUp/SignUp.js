import React, { Component } from 'react';
import firebase from './../../Firebase';
import LoginUp from '../SignUp/LoginUp';
import ListOfPosts from '../Posts/ListOfPosts';

export class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      user: null,
      loading: true
    }
  }

  componentDidMount(){
    this.authListener();
    setTimeout(function() {
      this.setState({
        loading: false
      });
    }.bind(this), 1000);
  }

  authListener(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    if (this.state.loading){
        return <p>Ładowanie komponentu..</p>;
    }
    return (
        <div>
          {this.state.user ? (<ListOfPosts />) : (<LoginUp />)}
        </div>
    );
  }
}
export default SignUp
