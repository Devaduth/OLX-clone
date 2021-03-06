import React, { useEffect, useContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Context, { AuthContext, FirebaseContext } from './store/Context'
import Post from './store/PostContext'


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Posts from './Components/Posts/Posts';
import Footer from './Components/Footer/Footer';

function App() {
  const { user } = useContext(AuthContext)
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })

  return (
    <div>
      <Post>
        <Router>
          <Route exact path='/' >
           {user ? <Home /> : <Signup />}
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/view'>
            <View />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
