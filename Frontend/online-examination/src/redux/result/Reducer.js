import {
  GET_RESULTS_BY_EXAM,
  GET_STUDENT_RESULTS,
  SAVE_RESULT,
} from "./ActionType";

const initialValue = {
  saveResult: null,
  studentResults: [],
  examResults: [],
};

export const resultReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case SAVE_RESULT:
      return { ...state, saveResult: payload };
    case GET_STUDENT_RESULTS:
      return { ...state, studentResults: payload };
    case GET_RESULTS_BY_EXAM:
      return { ...state, examResults: payload };
    default:
      return state;
  }
};
