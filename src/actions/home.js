import homeConstants from "../constants/home";

const setLenguageSuccess = (language) => ({
  type: homeConstants.SET_LANGUAGE,
  language
});

export const setLanguage = (language) => {
  return async (dispatch) => {
    dispatch(setLenguageSuccess(language));
  };
};