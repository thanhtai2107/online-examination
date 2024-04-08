import { ADD_COURSE } from "../course/ActionType";
const initialValue = {
  add: null,
};
export const courseReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_COURSE:
      return { ...state, add: payload };

    default:
      return state;
  }
};
