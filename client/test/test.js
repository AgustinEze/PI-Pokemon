import rootReducer from '../src/store/reducer';


describe('Reducer', () => {
   const initialState = {
    pokemons: [],
    displayedPokemons:[],
    types:[]
   };

   it('Debería retornar el estado inicial si no se pasa una action válido', () => {
      expect(actionReducer(undefined, [])).toEqual({
        pokemons: [],
        displayedPokemons:[],
        types:[]
      });
   });
});