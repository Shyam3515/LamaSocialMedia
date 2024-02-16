import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Shyam Social.</h1>
          <p>Social media is a collective term for websites and applications that focus on communication, community-based input, interaction, content-sharing and collaboration. People use social media to stay in touch and interact with friends, family and various communities.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
              <button>Login</button>
          </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder='Username'/>
              <input type="email" placeholder='Email'/>
              <input type="password" placeholder='password'/>
              <input type="text" placeholder='Name'/>

              <button>Register</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register