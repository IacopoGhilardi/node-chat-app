const Login = ({title}) => {

  const prova = () => {
    console.log('ciao');
  }
  return (
      <div>
        <h1>Login { title }</h1>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" />
        </div>
      
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
        </div>


        <div>
          <button onClick={prova}>Login</button>
        </div>
      </div>
  )
}

export default Login