import axios from "axios";
import { API_URL } from "../../config/api";
import authHeader from "../../config/auth-header";
import {
  ADD_STUDENT,
  GET_STUDENT,
  GET_STUDENTS,
  UPDATE_STUDENT,
} from "./ActionType";
import { toast } from "react-toastify";

export const addStudent = (req) => async (dispatch) => {
  try {
    const resp = await axios.post(
      `${API_URL}/api/v1/student/add`,
      req,
      authHeader()
    );
    dispatch({ type: ADD_STUDENT, payload: resp.data });
    toast.success("Thêm học sinh thành công");
  } catch (error) {
    toast.error("Thêm học sinh thất bại");
  }
};

export const getStudents = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/students?page=${req.page}&size=${req.size}`,
      authHeader()
    );
    dispatch({ type: GET_STUDENTS, payload: resp.data });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};

export const getStudent = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/student?id=${req}`,
      authHeader()
    );
    dispatch({ type: GET_STUDENT, payload: resp.data });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateStudent = (req) => async (dispatch) => {
  try {
    const resp = await axios.put(
      `${API_URL}/api/v1/student/update`,
      req,
      authHeader()
    );
    dispatch({ type: UPDATE_STUDENT, payload: resp.data });
    toast.success("Cập nhật thành công");
  } catch (error) {
    toast.error("Cập nhật thất bại");
  }
};
