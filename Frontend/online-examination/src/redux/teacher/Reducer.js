import { ADD_TEACHER, GET_TEACHERS } from "../teacher/ActionType";
const initialValue = {
  addTeacher: null,
  teachers: [],
};
export const teacherReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_TEACHER:
      return { ...state, addTeacher: payload };
    case GET_TEACHERS:
      return { ...state, teachers: payload };
    default:
      return state;
  }
};
