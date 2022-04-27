const Login = ({title}) => {

  return (
      <div>
        <h1>Login { title }</h1>
        <div>
            <label htmlFor="email">Email</label>
        </div>
      
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
        </div>


        <div>
          <button>Login</button>
        </div>
      </div>
  )
}

export default Login