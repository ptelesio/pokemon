import { combineReducers } from 'redux';
import pokemons from './pokemons';
import home from './home';


const reducers = combineReducers({
    pokemons,
    home
});

export default reducers;