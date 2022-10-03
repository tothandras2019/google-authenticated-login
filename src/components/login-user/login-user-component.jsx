export const Login = ({ handler }) => {
  return (
    <div className='sign-in'>
      <form action='submit'>
        <label htmlFor='user-name'>Username</label>
        <input type='text' name='user-name' />
        <label htmlFor='user-password'>Password</label>
        <input type='password' name='user-password' />
        <input type='submit' value='press sing in' />
      </form>
    </div>
  )
}
