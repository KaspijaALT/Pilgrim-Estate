import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Direct image URL in the backgroundStyle
  const backgroundStyle = {
    backgroundImage: `url('https://ogroup.com/wp-content/uploads/2023/10/22-Old-Ranch-Road-115-1.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/register', {
        email,
        username,
        password
      });
      alert('Registration successful!');
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
  };

  return (
    <div style={backgroundStyle}>
      <div style={{ maxWidth: '400px', width: '100%', margin: '0 auto', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', margin: '0 0 20px' }}>Register</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            type="text"
            name="username"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            style={{ margin: '10px 0', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            type="password"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer', margin: '20px 0' }}
          >
            Create Account
          </button>
        </form>
        <div style={{ textAlign: 'center' }}>
          <a href="/Login" style={{ textDecoration: 'none', color: 'blue' }}>Have an account? Login</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
