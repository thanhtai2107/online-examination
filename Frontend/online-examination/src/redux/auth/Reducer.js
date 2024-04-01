import { LOGIN } from "./ActionType";

const initialValue = {
  signin: null,
};

export const authReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return { ...state, signin: payload };

    default:
      return state;
  }
};
