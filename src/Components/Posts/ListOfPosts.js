import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import firebase from './../../Firebase';


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
    render() {
        return (
            <div class="container">  

            <div class="panel panel-default">
              <div class="panel-heading">
                <h3 class="panel-title">
                     Lista Postów 
                </h3>
              </div>
              <div class="panel-body">
                <h4><Link to="/CreatePost">Dodaj</Link></h4>
                <h4><Link to="/SignUp">Zarejestruj sie</Link></h4>
                <button onClick={signOut}>Sign out</button>

                <table class="table table-stripe">
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
                </table>
              </div>
            </div>
          </div>
        )
    }
}

export default ListOfPosts
