import { ADD_QUESTION, GET_QUESTIONS } from "./ActionType";

const initialValue = {
  addQuestion: null,
  questions: [],
};

export const questionReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_QUESTION:
      return { ...state, addQuestion: payload };
    case GET_QUESTIONS:
      return { ...state, questions: payload };
    default:
      return state;
  }
};
