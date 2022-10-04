export const SignUp_RegisterUser = ({ allHandlers, message }) => {
  const { handlerSubmit, googleSignIn, handleEmailChange, handlePasswordChange, signOut } = allHandlers

  return (
    <div className='sign sign-in'>
      <h3>You don't have account? Register now!</h3>
      <form className='form' onSubmit={handlerSubmit}>
        <div className='input'>
          <label htmlFor='email'>Username</label>
          <input type='email' name='email' onChange={handleEmailChange} />
        </div>
        <div className='input'>
          <label htmlFor='user-password'>Password</label>
          <input type='password' name='user-password' onChange={handlePasswordChange} />
        </div>
        <div className='input'>
          <label htmlFor='user-confirm-password'>Confirm password</label>
          <input type='password' name='user-password' onChange={handlePasswordChange} />
        </div>
        <div className='input'>
          <input type='submit' value='sing in' />
          <input type='button' onClick={googleSignIn} value='sign in with Google' />
        </div>
      </form>
      <input type='button' value='sign out' onClick={signOut} />
    </div>
  )
}
