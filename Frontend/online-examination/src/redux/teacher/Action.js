import axios from "axios";
import { API_URL } from "../../config/api";
import authHeader from "../../config/auth-header";
import {
  ADD_TEACHER,
  GET_TEACHER,
  GET_TEACHERS,
  UPDATE_TEACHER,
} from "./ActionType";
import { toast } from "react-toastify";

export const addTeacher = (req) => async (dispatch) => {
  try {
    const resp = await axios.post(
      `${API_URL}/api/v1/teacher/add`,
      req,
      authHeader()
    );
    dispatch({ type: ADD_TEACHER, payload: resp.data });
    toast.success("Thêm giáo viên thành công");
  } catch (error) {
    toast.error("Thêm giáo viên thất bại");
  }
};

export const getTeachers = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/teachers?page=${req.page}&size=${req.size}`,
      authHeader()
    );
    dispatch({ type: GET_TEACHERS, payload: resp.data });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};
export const getTeacher = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/teacher?id=${req}`,
      authHeader()
    );
    dispatch({ type: GET_TEACHER, payload: resp.data });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};
export const updateTeacher = (req) => async (dispatch) => {
  try {
    const resp = await axios.put(
      `${API_URL}/api/v1/teacher/update`,
      req,
      authHeader()
    );
    dispatch({ type: UPDATE_TEACHER, payload: resp.data });
    toast.success("Cập nhật thành công");
  } catch (error) {
    toast.error("Cập nhật thất bại");
  }
};
