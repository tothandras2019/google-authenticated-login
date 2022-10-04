import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import { Login } from './components/sign-in_logIn/login-user-component'
import { SignUp_RegisterUser } from './components/sign-up_register/sign-up-register-component'
import { m_SignInUserWithPopUp, m_CreateUserWithEmailAndPassword, m_SignInWithEmailAndPassword, m_SignOutUser } from './firebase/firebase-sign'
function App() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [msg, setMsg] = useState({ message: '' })

  const handleEmailChange = (event) => {
    const email = event.target.value
    setEmail(() => email)
  }
  const handlePasswordChange = (event) => {
    const password = event.target.value
    setPassword(() => password)
  }

  const resetEmailAndPassword = () => {
    setPassword(null)
    setEmail(null)
  }

  //SIGN METHODS:
  const submitSignUp = (event) => {
    event.preventDefault()
    console.log(email, password)
    m_CreateUserWithEmailAndPassword({ email, password })

    resetEmailAndPassword()
  }

  const googleSignIn = (event) => {
    console.log(event.target)
    m_SignInUserWithPopUp()
  }

  const submitSignIn = (event) => {
    m_SignInWithEmailAndPassword({ email, password })
    resetEmailAndPassword()
  }

  const signOut = (event) => {
    console.log(event.target)
    m_SignOutUser()
  }
  //SIGN METHODS END

  const allRegisterHandlers = {
    handlerSubmit: submitSignUp,
    googleSignIn: googleSignIn,
    handleEmailChange: handleEmailChange,
    handlePasswordChange: handlePasswordChange,
    signOut: signOut,
  }

  //TODO: implement
  const allLoginHandlers = {
    handleSignIn: submitSignIn,
    handleEmailChange: handleEmailChange,
    handlePasswordChange: handlePasswordChange,
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <SignUp_RegisterUser allHandlers={allRegisterHandlers} message={msg} />
        <Login allLoginHandlers={allLoginHandlers} />
      </header>
    </div>
  )
}

export default App
