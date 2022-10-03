import './login-user-component.css'

export const Login = ({ allHandlers }) => {
  const { handlerSubmit, googleSignIn, handleUserNameChange, handlePasswordChange } = allHandlers

  return (
    <div className='sign-in'>
      <form className='form' onSubmit={handlerSubmit}>
        <div className='input'>
          <label htmlFor='user-name'>Username</label>
          <input type='email' name='user-name' onChange={handleUserNameChange} />
        </div>
        <div className='input'>
          <label htmlFor='user-password'>Password</label>
          <input type='password' name='user-password' onChange={handlePasswordChange} />
        </div>
        <input type='submit' value='sing in' />
        <input type='button' onClick={googleSignIn} value='google sign in' />
      </form>
    </div>
  )
}
