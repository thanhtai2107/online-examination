import { ADD_QUESTION } from "./ActionType";

const initialValue = {
  addQuestion: null,
};

export const questionReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_QUESTION:
      return { ...state, addQuestion: payload };
    default:
      return state;
  }
};
