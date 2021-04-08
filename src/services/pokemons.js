import {axios} from '../helpers';

export const getPokemonsListService = () => {
    return axios.get(`${process.env.REACT_APP_BASE_POKEMON_API}/pokemon`);
};

export const getPokemonService = (pokemon) => {
    return axios.get(`${process.env.REACT_APP_BASE_POKEMON_API}/pokemon/${pokemon}`);
}