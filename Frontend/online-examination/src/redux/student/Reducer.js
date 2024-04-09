import { ADD_STUDENT, GET_STUDENTS } from "../student/ActionType";
const initialValue = {
  addStudent: null,
  students: [],
};
export const studentReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_STUDENT:
      return { ...state, addStudent: payload };
    case GET_STUDENTS:
      return { ...state, students: payload };
    default:
      return state;
  }
};
