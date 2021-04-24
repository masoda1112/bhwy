import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import FriendsList from './components/friendsList';
import Login from './components/login';
import GameList from './components/gameList';
import SignUp from './components/signup'
import PrivateRoute from './firebase/privateRoute'
import { AuthProvider } from './firebase/authProvider';

const App =()=> {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/friendsList' component={FriendsList} />
          <Route exact path='/' component={Login} />
          <Route exact path='/gameList' component={GameList} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
        <Link to='/'>Back To Top</Link>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
