import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import CreatePost from './Components/Posts/CreatePost';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditForm from './Components/Posts/EditForm';
import ListOfPosts from './Components/Posts/ListOfPosts';
import SignUp from './Components/SignUp/SignUp';



function App() {
  return (
    <Router>
      <div>
        <Route exact path = "/" component = { ListOfPosts } />
        <Route path = "/navbar" component = { NavBar } />
        <Route path='/EditForm/:id' component = { EditForm } />
        <Route path='/CreatePost' component={ CreatePost } />
        <Route path='/SignUp' component={ SignUp } />


   </div>
    </Router>

  );
}

export default App;
