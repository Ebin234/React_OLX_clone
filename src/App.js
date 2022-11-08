import React,{useEffect,useContext} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './Store/PostContext'
import { AuthContext, FirebaseContext } from './Store/FirebaseContext'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {user,setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    console.log(user)
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
        <Route exact path='/' >
          <Home />
        </Route>
        <Route path='/signup' >
          <Signup />
        </Route>
        <Route path='/login' >
          <Login />
        </Route>
        <Route path='/create' >
          <Create/>
        </Route>
        <Route path='/viewproduct' >
          <View/>
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
