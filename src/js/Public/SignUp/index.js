import React,{useState} from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Logo from './../../utils/Logo';
import {signup} from './../../services/firebase';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    signup(email, password)
    .then(()=>{
      console.log('Usuario autenticado');
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
            <Logo />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography component="h1" variant="h5">
              Crea tu cuenta
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              autoComplete="fname"
              name="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Nombre"
              autoFocus           
              value={name}
              onChange={e => setName(e.target.value)}
           
            />
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
            <TextField
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirmar contraseña"
              type="password"
              id="confirmPassword"           
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
           
            />
          </Grid>
          <Grid item xs={12}>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          className="button"
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
        </Grid>
          <Grid item xs={12}>
            <Typography component="p">¿Ya tienes cuenta? <Link to="/login">¿Inicia sesión?</Link></Typography>
          </Grid>
        </Grid>
      </form>
  </Container>
  );
}

export default SignUp;
