import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import { Login } from './components/login-user/login-user-component'
import { SignInUserWithPopUp } from './firebase/firebase-sign'

function App() {
  const [userName, setUserName] = useState(null)
  const [password, setPassword] = useState(null)

  const submitSignIn = (event) => {
    event.preventDefault()
    console.log(userName, password)
  }

  const googleSignIn = (event) => {
    SignInUserWithPopUp()
    console.log(event.target)
  }

  const handleUserNameChange = (event) => {
    const name = event.target.value
    setUserName(() => name)
  }
  const handlePasswordChange = (event) => {
    const password = event.target.value
    setPassword(() => password)
  }

  const allHandlers = {
    handlerSubmit: submitSignIn,
    googleSignIn: googleSignIn,
    handleUserNameChange: handleUserNameChange,
    handlePasswordChange: handlePasswordChange,
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Login allHandlers={allHandlers} />
      </header>
    </div>
  )
}

export default App
