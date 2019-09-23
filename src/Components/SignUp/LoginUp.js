import React, { Component } from 'react'
import firebase from './../../Firebase';
import "./Login.css"

export class LoginUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password :'',
            formTitle: 'Login',
            fireErrors :'',
            onClickButton: true
        };
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    login = event => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = event => {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }
    
    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Zarejestruj sie', onClickButton: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Podaj login i hasło', onClickButton: true, fireErrors: ''});
        }
    }
    render() {     
        let subimtBtn = this.state.onClickButton ?
        (<input className="loginBtn" type="submit" onClick={this.login} value="Zaloguj" />) : 
        (<input className="loginBtn" type="submit" onClick={this.register} value="Zarejestruj" />);
     
        let login_register = this.state.onClickButton ?
            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Zarejestruj sie</button>) : 
            (<button className="registerBtn" onClick={() => this.getAction('login')}>Zaloguj sie</button>)
        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;
        return (
            <div className="form_block">
            <div id="title">{this.state.formTitle}</div>
            <div className="body">
                {errorNotification}
                <form>
                    <input type="text" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    name="email" 
                    placeholder = "Email"/>

                    <input type="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    name="password"
                    placeholder = "Hasło" />    
                                {subimtBtn}
                </form>
                {login_register}
            </div>
        </div>
        )
    }
}

export default LoginUp
