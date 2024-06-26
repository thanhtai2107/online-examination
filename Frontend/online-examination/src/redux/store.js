import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/Reducer";
import { teacherReducer } from "./teacher/Reducer";
import { courseReducer } from "./course/Reducer";
import { studentReducer } from "./student/Reducer";
import { examReducer } from "./exam/Reducer";
import { questionReducer } from "./question/Reducer";
import { resultReducer } from "./result/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  teacher: teacherReducer,
  course: courseReducer,
  student: studentReducer,
  exam: examReducer,
  question: questionReducer,
  result: resultReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
