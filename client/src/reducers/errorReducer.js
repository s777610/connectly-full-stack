import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      // put errors payload into redux store
      return action.payload; // including err.response.data from express
    default:
      return state;
  }
}
