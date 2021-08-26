import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { LandingPage }from './components/LandingPage/LandingPage';
import { Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { AddPokemon } from './components/AddPokemon/AddPokemon';
import { DetailPokemon } from './components/DetailPokemon/DetailPokemon';

function App() {
  
  return (
      <React.Fragment>
          <Route exact path='/' component={LandingPage} />
          <Route path='/Home' component={NavBar} />
          <Route exact path='/Home' component={Home} />
          <Route path='/Home/Add' component={AddPokemon} />
          <Route path='/Home/data/:id' component={DetailPokemon} />       
      </React.Fragment>
  );
}

export default App;
