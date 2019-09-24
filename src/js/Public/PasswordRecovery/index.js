import React from 'react';
import {Link} from 'react-router-dom';

function PasswordRecovery() {
  return (
    <div>
    <h2>Recupera tu contraseña</h2>
    
    <p>¿Ya tienes cuenta?<Link to="/login">¿Inicia sesión?</Link></p>
    <p>¿Nuevo en Twitter? <Link to="/signup">Regístrate ahora »</Link></p>
    </div>
  );
}

export default PasswordRecovery;
