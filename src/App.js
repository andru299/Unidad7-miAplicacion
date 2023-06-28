import React from 'react';
import Listado from './components/Listado';
import Detail from './components/Detail';
import Login from './components/Login';
import './index.css';
import './App.css'


const App = () => {
  return (
    <div className='container'>
      <h1 className='title'>Mis Heroes Favoritos</h1>
      <p>Aqui encontaras el mejor top, de los mejores Heroes de mi historia</p>
      
      


      <Listado />
      <Detail />
      <image />
      <Login />
    </div>
  );
}

export default App;

