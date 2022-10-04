import './login-user-component.css'

export const Login = ({ allLoginHandlers, message }) => {
  const { handleSignIn, handleEmailChange, handlePasswordChange, email, password } = allLoginHandlers

  return (
    <div className='sign sign-in'>
      <h3>So you have an account? Login now</h3>
      <form className='form' onSubmit={handleSignIn}>
        <div className='input'>
          <label htmlFor='email'>your e-mail</label>
          <input type='email' name='email' value={email} onChange={handleEmailChange} />
        </div>
        <div className='input'>
          <label htmlFor='user-password'>Password</label>
          <input type='password' name='user-password' value={password} onChange={handlePasswordChange} />
        </div>
        <input type='submit' value='sing in' />
      </form>
    </div>
  )
}
