import { ADD_STUDENT } from "../student/ActionType";
const initialValue = {
  addTeacher: null,
};
export const studentReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_STUDENT:
      return { ...state, addTeacher: payload };

    default:
      return state;
  }
};
