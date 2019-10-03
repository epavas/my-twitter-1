import React from 'react';
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import Logo from './../../utils/Logo';

function PasswordRecovery() {
  return (

      <Container component="main" maxWidth="xs" className="passwordRecovery">
      
      <form  noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Logo />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography component="h1" variant="h5">
              Recupera tu contraseña
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
            />
          </Grid>
          <Grid item xs={12}>
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
        >
          Enviar
        </Button>
        </Grid>
          <Grid item xs={12}>
            <Typography component="p">¿Ya tienes cuenta? <Link to="/login">¿Inicia sesión?</Link></Typography>
            <Typography component="p">¿Nuevo en Twitter? <Link to="/signup">Regístrate ahora »</Link></Typography>
          </Grid>
        </Grid>
      </form>
      </Container>
  );
}

export default PasswordRecovery;
