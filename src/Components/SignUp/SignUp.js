import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from '../../Firebase';
import { Redirect } from "react-router"


export class SignUp extends Component {
    render() {
        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
      
        return (
            <div className="App">
            <header className="App-header">
              {
                user
                  ?  <Redirect to="/" /> 
                  : <p>Please sign in.</p>
              }
    
              {
                user
                  ? <button onClick={signOut}>Wyloguj </button>
                  : <button onClick={signInWithGoogle}>Zarejestruj sie z Google</button>
              }
            </header>
          </div>
        )
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(SignUp);