import { ADD_TEACHER } from "../teacher/ActionType";
const initialValue = {
  addTeacher: null,
};
export const teacherReducer = (state = initialValue, { action, payload }) => {
  switch (action) {
    case ADD_TEACHER:
      return { ...state, addTeacher: payload };
    default:
      return state;
  }
};
