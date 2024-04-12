import { updateExam } from "./Action";
import {
  ADD_EXAM,
  GET_EXAM,
  GET_EXAMS,
  GET_STUDENT_EXAMS,
  UPDATE_EXAM,
} from "./ActionType";
const initialValue = {
  addExam: null,
  exams: [],
  exam: null,
  updateExam: null,
  studentExams: null,
};

export const examReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_EXAM:
      return { ...state, addExam: payload };
    case GET_EXAMS:
      return { ...state, exams: payload };
    case GET_STUDENT_EXAMS:
      return { ...state, studentExams: payload };
    case GET_EXAM:
      return { ...state, exam: payload };
    case UPDATE_EXAM:
      return { ...state, updateExam: payload };
    default:
      return state;
  }
};
