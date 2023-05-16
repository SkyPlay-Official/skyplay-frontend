import {react,useState }from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from './signin';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const Login=()=>
{

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3002/login/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email,password }),
      });

      if (response.ok) {
        console.log("gg")
        const data = await response.json();
        if (data.authenticated) {
          console.log('Authentication successful');
          console.log('User:', data.user);
          
   
        } else {
    
          console.log('Authentication failed');
        }
      } else {
  
        console.log('Error:', response.status);
      }
    } catch (error) {
     
      console.error('Error:', error);
    }
  };


    return(        
    
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-body">
                <h3 className="card-title" style={{color:"white"}}>Login</h3>
                <form   onSubmit={handleSubmit} method="post">
                <div className="form-group">
                    <label htmlFor="email" style={{color:"white"}}>username</label>
                    <input
            type="text"
            className="form-control" 
            id="email"
            value={username}
            autoComplete="off" 
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" style={{color:"white"}}>Email address:</label>
                    <input
            type="text"
            className="form-control" 
            id="email"
            value={email}
            autoComplete="off" 
            name="username"
            onChange={(e) => setEmail(e.target.value)}
          />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd" style={{color:"white"}}>Password:</label>
                    <input
            type="password"
            className="form-control" 
            id="email"
            value={password}
            autoComplete="off" 
            name="username"
            onChange={(e) => setPassword(e.target.value)}
          />
                  </div>
                  <div className="center" style={{color:"white"}}>
                    <button type="submit" className="btn btn-primary" style={{color:"white"}}>Login</button>
                  </div>
                  <p></p>
                  <Link  className="returns"  style={{color:"white"}} to="/signin">Dont have an account?</Link>
                </form>
                <hr />
                <div className="google" >
                  <a className="btn btn-block" href="/auth/google" role="button">
                    <i className="fab fa-google"></i> | login using Google
                  </a>
                </div>
              </div>
            </div>
          );
}

export default Login;







