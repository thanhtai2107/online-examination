import { SAVE_RESULT } from "./ActionType";

const initialValue = {
  saveResult: null,
};

export const resultReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case SAVE_RESULT:
      return { ...state, saveResult: payload };
    default:
      return state;
  }
};
