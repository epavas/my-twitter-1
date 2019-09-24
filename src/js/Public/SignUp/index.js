import React from 'react';
import {Link} from 'react-router-dom';

function SignUp() {
  return (
    <div>
    <h2>Regístrate ahora</h2>
    
    <p>¿Ya tienes cuenta?<Link to="/login">¿Inicia sesión?</Link></p>
    </div>
  );
}

export default SignUp;
