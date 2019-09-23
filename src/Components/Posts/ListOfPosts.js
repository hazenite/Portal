import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from './../../Firebase';
import { Table, Button } from 'react-bootstrap';

export class ListOfPosts extends Component {
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('posty');
        this.unsubscribe = null;
        this.state = {
            posty: []
         };
        }

        onCollectionUpdate = (querySnapshot) => {
            const posty = [];
            querySnapshot.forEach((doc) => {
              const { tytul, autor, tresc } = doc.data();
              posty.push({
                key: doc.id,
                doc, 
                tresc,
                tytul,
                autor,
              });
            });
            this.setState({
              posty
           });
          }   

    componentDidMount() {
      this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    }

    logout = () => {
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
      }

    delete = () => {
      var user = firebase.auth().currentUser;
      user.delete();
    }


    render() {
        return (
          <div> 
            <div class="container">  
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                     Lista Postów 
                </h3>
              </div>
              <div class="panel-body">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>tytuł</th>
                      <th>treść</th>
                      <th>autor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.posty.map(posty =>
                      <tr>
                        <td><Link to={`/ShowPosts/${posty.key}`}>{posty.tytul}</Link></td>

                        <td>{posty.tresc}</td>
                        <td>{posty.autor}</td>

                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </div>          
            <Button variant="outline-dark" onClick={this.logout}> Wyloguj sie</Button>
            <Button variant="outline-dark" onClick={this.delete}> Skasuj konto </Button>

          </div>
          </div>                
        

        )
    }
}

export default ListOfPosts
