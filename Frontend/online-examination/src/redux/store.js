import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/Reducer";
import { teacherReducer } from "./teacher/Reducer";
import { courseReducer } from "./course/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  teacher: teacherReducer,
  course: courseReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
