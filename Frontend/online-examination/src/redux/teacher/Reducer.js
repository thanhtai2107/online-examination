import {
  ADD_TEACHER,
  GET_TEACHER,
  GET_TEACHERS,
  UPDATE_TEACHER,
} from "../teacher/ActionType";
const initialValue = {
  addTeacher: null,
  teachers: [],
  teacher: null,
  update: null,
};
export const teacherReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_TEACHER:
      return { ...state, addTeacher: payload };
    case GET_TEACHERS:
      return { ...state, teachers: payload };
    case GET_TEACHER:
      return { ...state, teacher: payload };
    case UPDATE_TEACHER:
      return { ...state, update: payload };
    default:
      return state;
  }
};
