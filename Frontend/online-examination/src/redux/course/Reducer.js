import { ADD_COURSE, GET_COURSES } from "../course/ActionType";
const initialValue = {
  add: null,
  courses: [],
};
export const courseReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_COURSE:
      return { ...state, add: payload };
    case GET_COURSES:
      return { ...state, courses: payload };
    default:
      return state;
  }
};
