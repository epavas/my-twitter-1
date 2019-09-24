import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Inicia sesión en Twitter</h2>
      
      <p><Link to="/passwordRecovery">¿Olvidaste tu contraseña?</Link></p>
      <p>¿Nuevo en Twitter? <Link to="/signup">Regístrate ahora »</Link></p>
      
    </div>
  );
}

export default Login;
