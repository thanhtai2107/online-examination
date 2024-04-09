import { ADD_COURSE, ALL_COURSE, GET_COURSES } from "../course/ActionType";
import { allCourse } from "./Action";
const initialValue = {
  add: null,
  courses: [],
  allCourse: [],
};
export const courseReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_COURSE:
      return { ...state, add: payload };
    case GET_COURSES:
      return { ...state, courses: payload };
    case ALL_COURSE:
      return { ...state, allCourse: payload };
    default:
      return state;
  }
};
