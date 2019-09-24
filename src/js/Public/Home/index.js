import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <p>Sigue lo que te interesa.</p>
      <p>Entérate de lo que está hablando la gente.</p>
      <p>Únete a la conversación.</p>


      <p>Descubre lo que está pasando en el mundo en este momento</p>
      <p>Únete hoy a Twitter.</p>

      <p><Link to="/login">Iniciar sesión</Link></p>
      <p><Link to="/signup">Crea una cuenta</Link></p>

      
    </div>
  );
}

export default Home;
