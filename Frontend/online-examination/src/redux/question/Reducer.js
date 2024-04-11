import {
  ADD_QUESTION,
  DELETE_QUESTION,
  GET_QUESTION,
  GET_QUESTIONS,
  UPDATE_QUESTION,
} from "./ActionType";

const initialValue = {
  addQuestion: null,
  questions: [],
  updateQuestion: null,
  question: null,
  deleteQuestion: null,
};

export const questionReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_QUESTION:
      return { ...state, addQuestion: payload };
    case UPDATE_QUESTION:
      return { ...state, updateQuestion: payload };
    case GET_QUESTIONS:
      return { ...state, questions: payload };
    case GET_QUESTION:
      return { ...state, question: payload };
    case DELETE_QUESTION:
      return { ...state, deleteQuestion: payload };
    default:
      return state;
  }
};
