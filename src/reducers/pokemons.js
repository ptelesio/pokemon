import pokemonsConstants from "../constants/pokemons";

const pokemonsListInitialState = {
  request: false,
  error: null,
  pokemonsList: null,
  pokemon:null
};

export default (state = pokemonsListInitialState, action) => {
  switch (action.type) {
    case pokemonsConstants.GET_POKEMONS_LIST_REQUEST:
      return {
        ...state,
        request: true,
        error: null,
      };

    case pokemonsConstants.GET_POKEMONS_LIST_FAILURE:
      return {
        ...state,
        request: false,
        error: action.error,
      };

    case pokemonsConstants.GET_POKEMONS_LIST_SUCCESS:
      return {
        ...state,
        request: false,
        pokemonsList: action.pokemonsList,
      };

      case pokemonsConstants.GET_POKEMON_REQUEST:
        return {
          ...state,
          request: true,
          error: null,
        };
  
      case pokemonsConstants.GET_POKEMON_FAILURE:
        return {
          ...state,
          request: false,
          error: action.error,
        };
  
      case pokemonsConstants.GET_POKEMON_SUCCESS:
        return {
          ...state,
          request: false,
          pokemon: action.pokemon,
        };

        case pokemonsConstants.RESET_POKEMON:
          return {
            ...state,
            request: false,
            pokemon: null,
          };

    default:
      return state;
  }
};
