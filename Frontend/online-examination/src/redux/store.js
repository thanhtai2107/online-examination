import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/Reducer";
import { teacherReducer } from "./teacher/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  teacher: teacherReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
