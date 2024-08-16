import { FaUser, FaLock } from "react-icons/fa"
import { useState } from "react"

import "./Login.css"


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Função que é chamada quando o formulário é enviado
  const handleSubmit = (event) => {
    // Impede que a página seja recarregada
    event.preventDefault();

    console.log("Dados de Login:", { username, password });

  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>System Login</h1>
        <div className="input-field">
          <input 
            type='email' 
            placeholder='email'
            onChange={(e) => setUsername(e.target.value)}  
          />
          <FaUser className="icon"/>
        </div>
        <div className="input-field">
          <input 
            type='password' 
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button>Login</button>
      
        <div className="signup-link">
          <p>
            Create new account? <a href="#">Register</a>
          </p>
        </div>
      
      </form>
    </div>
  )
}

export default Login
