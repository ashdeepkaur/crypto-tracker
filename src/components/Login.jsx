import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email) {
      setError('Please enter an email');
      return;
    }
    if (!password) {
      setError('Please enter a password');
      return;
    }
    setError('');
    localStorage.setItem('logged-in', 'true');
    onLoginSuccess();
  };

  return (
    <Grid
      container
      style={{ height: '100vh' }}
      justifyContent='center'
      alignItems='center'
    >
      <Grid item>
        <Grid
          container
          style={{
            width: 600,
            height: 250,
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
          }}
          direction='column'
        >
          <TextField
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            style={{ marginTop: 5 }}
            label='Password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          {error && (
            <Typography
              style={{ color: 'red', marginTop: 5, textAlign: 'center' }}
            >
              {error}
            </Typography>
          )}
          <Button
            style={{ marginTop: 20, backgroundColor: '#ADD8E6' }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
