import { ADD_EXAM } from "./ActionType";
const initialValue = {
  addExam: null,
};

export const examReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case ADD_EXAM:
      return { ...state, addExam: payload };

    default:
      return state;
  }
};
