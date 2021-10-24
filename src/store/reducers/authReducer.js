import { SIGNUP } from "../constants";
const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
      };

    default:
      return state;
  }
}
