import React, { useState}  from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {login} from './../../services/firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login(email, password)
    .then(user =>{
      sessionStorage.setItem('user',user.user.uid);
    })
    .catch(err=>{
      console.log('Ocurrió un error');
    })
  }

  return (
      <Container component="main" maxWidth="xs" className="signup">

      <form  noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Typography component="h1" variant="h5">
            Inicia sesión en Twitter
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Correo"
              name="email"
              autoComplete="email"              
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"              
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"          
          onClick={handleSubmit}
        >
          Inicia sesión
        </Button>
        </Grid>
          <Grid item xs={12}>
            <Typography component="p">¿Ya tienes cuenta?<Link to="/passwordRecovery">¿Olvidaste tu contraseña?</Link></Typography>
            <Typography component="p">¿Nuevo en Twitter?<Link to="/signup">Regístrate ahora »</Link></Typography>

          </Grid>
        </Grid>
      </form>
  </Container>
  );
}

export default Login;
