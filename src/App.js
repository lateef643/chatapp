import React from 'react';
import './App.css';
import IndexPage from './presentation/indexPage';
import About from './presentation/Signup';
import { Switch, Route } from 'react-router-dom'; 
import Signup from './presentation/Signup';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={IndexPage} />
      <Route exact path='/Signup' component={Signup} />
    </Switch>
  );
}

export default App;
