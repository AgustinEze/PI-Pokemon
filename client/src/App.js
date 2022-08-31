import './App.css';
import {Home} from './components/Home'
import Pokemons from './components/pokemons.jsx'
import {NewPokemon} from './components/NewPokemon'
import {PokemonDetails} from './components/PokemonDetails'
import {Route} from 'react-router-dom'
import { useEffect } from 'react';


function App() {
  useEffect(()=>{
    
  },[])
  return (
    <div className="App">
      <Route exact path='/pokemons/:id' component={PokemonDetails}/>
      <Route exact path='/pokemons' component={Pokemons}/>
      <Route exact path='/newpokemon' component={NewPokemon}/>
      <Route exact path='/' component={Home} />
    </div>
  );
}

export default App;
