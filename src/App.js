import React, { useState } from 'react';
import './App.css';

import UserForm from './components/UserForm'

function App() {
  // can access current state via 'state' and then change the state via 'setState' by calling 'useState'
  const [ state, setState ] = useState({
    // default values (object)
    firstName: "",
    firstnameError: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
        <UserForm input={state} setInput={setState} />
      
    </div>
  );
}

export default App;
