/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import firebase from './../../Firebase';
import { Link } from 'react-router-dom';

export class CreatePost extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('posty');
    this.state = {
      title: '',
      description: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  onSubmit = (e) => {
    e.preventDefault();

    const { tytul, tresc, autor } = this.state;

    this.ref.add({
      tytul,
      tresc,
      autor
    }).then((docRef) => {
      this.setState({
        tytul: '',
        tresc: '',
        autor: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  render() {
    const { tytul, tresc, autor } = this.state;
    
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Dodaj Posty
              </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Lista postów</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="tytul">tytul:</label>
                <textArea class="form-control" name="tytul" onChange={this.onChange}> {tytul} </textArea>
              </div>
              <div class="form-group">
                <label for="tresc">tresc:</label>
                <textArea class="form-control" name="tresc" onChange={this.onChange} placeholder="tresc" cols="80" rows="3">{tresc}</textArea>
              </div>
              <div class="form-group">
                <label for="autor">autor:</label>
                <textArea class="form-control" name="autor" onChange={this.onChange}> {autor} </textArea>
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost
