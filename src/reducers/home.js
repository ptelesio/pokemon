import homeConstants from "../constants/home";
import LANGUAGE from "../constants/default";

const homeInitialState = {
  language:LANGUAGE.ENGLISH
};

export default (state = homeInitialState, action) => {
  switch (action.type) {
    case homeConstants.SET_LANGUAGE:
      return {
        ...state,
        language:action.language
      };
    default:
      return state;
  }
};
