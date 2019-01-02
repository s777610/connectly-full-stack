import { GET_ERRORS } from "./types";

export const clearError = () => dispatch => {
  dispatch({
    type: GET_ERRORS,
    payload: {}
  });
};
