import {
  ADD_STUDENT,
  GET_STUDENT,
  GET_STUDENTS,
  UPDATE_STUDENT,
} from "../student/ActionType";
const initialValue = {
  addStudent: null,
  students: [],
  student: null,
  updateStudent: null,
};
export const studentReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_STUDENT:
      return { ...state, addStudent: payload };
    case GET_STUDENTS:
      return { ...state, students: payload };
    case GET_STUDENT:
      return { ...state, student: payload };
    case UPDATE_STUDENT:
      return { ...state, updateStudent: payload };
    default:
      return state;
  }
};
