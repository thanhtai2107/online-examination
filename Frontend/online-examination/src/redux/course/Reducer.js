import {
  ACTIVE_COURSES,
  ADD_COURSE,
  ALL_COURSE,
  GET_COURSES,
} from "../course/ActionType";

const initialValue = {
  add: null,
  courses: [],
  allCourse: [],
  activeCourses: [],
};
export const courseReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_COURSE:
      return { ...state, add: payload };
    case GET_COURSES:
      return { ...state, courses: payload };
    case ALL_COURSE:
      return { ...state, allCourse: payload };
    case ACTIVE_COURSES:
      return { ...state, activeCourses: payload };
    default:
      return state;
  }
};
