import pokemonsConstants from "../constants/pokemons";
import { getPokemonsListService,getPokemonService } from "../services/pokemons";

const getPokemonsListRequest = () => ({
  type: pokemonsConstants.GET_POKEMONS_LIST_REQUEST,
});

const getPokemonsListFailure = (error) => ({
  type: pokemonsConstants.GET_POKEMONS_LIST_FAILURE,
  error,
});

const getPokemonsListSuccess = (pokemonsList) => ({
  type: pokemonsConstants.GET_POKEMONS_LIST_SUCCESS,
  pokemonsList,
});

const getPokemonRequest = () => ({
  type: pokemonsConstants.GET_POKEMON_REQUEST,
});

const getPokemonFailure = (error) => ({
  type: pokemonsConstants.GET_POKEMON_FAILURE,
  error,
});

const getPokemonSuccess = (pokemon) => ({
  type: pokemonsConstants.GET_POKEMON_SUCCESS,
  pokemon,
});

const resetPokemonSuccess = () => ({
  type: pokemonsConstants.RESET_POKEMON
});

export const getPokemonsList = () => {
  return async (dispatch) => {
    try {
      dispatch(getPokemonsListRequest());

      const pokemonsList = await getPokemonsListService();

      dispatch(getPokemonsListSuccess(pokemonsList));
    } catch (error) {
      dispatch(getPokemonsListFailure(error));
    }
  };
};

export const getPokemon = (pokemonName) => {
  return async (dispatch) => {
    try {
      dispatch(getPokemonRequest());

      const pokemon = await getPokemonService(pokemonName);

      dispatch(getPokemonSuccess(pokemon));
    } catch (error) {
      dispatch(getPokemonFailure(error));
    }
  };
};

export const resetPokemon = () => {
  return async (dispatch) => {
    dispatch(resetPokemonSuccess());
  };
};