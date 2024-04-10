import { ADD_EXAM, GET_EXAMS } from "./ActionType";
const initialValue = {
  addExam: null,
  exams: [],
};

export const examReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_EXAM:
      return { ...state, addExam: payload };
    case GET_EXAMS:
      return { ...state, exams: payload };
    default:
      return state;
  }
};
