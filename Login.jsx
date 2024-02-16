import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import './login.scss'

const Login = () => {

  const {login} = useContext(AuthContext);

  const handleLogin = () =>{
    login();
  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World!</h1>
          <p>Social media is a collective term for websites and applications that focus on communication, community-based input, interaction, content-sharing and collaboration. People use social media to stay in touch and interact with friends, family and various communities.</p>
          <span>Don't you have an account?</span>
          <Link to="/register">
              <button>Register</button>
          </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder='Username'/>
              <input type="password" placeholder='password'/>
              <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login