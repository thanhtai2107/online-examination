import { CURRENT_USER, LOGIN, LOGOUT } from "./ActionType";

const initialValue = {
  signin: null,
  currentUser: null,
};

export const authReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, signin: payload };
    case LOGOUT:
      return { ...state, currentUser: payload };
    case CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};
