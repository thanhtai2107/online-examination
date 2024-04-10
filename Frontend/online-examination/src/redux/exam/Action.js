import axios from "axios";
import authHeader from "../../config/auth-header";
import { API_URL } from "../../config/api";
import { ADD_EXAM, GET_EXAM, GET_EXAMS, UPDATE_EXAM } from "./ActionType";
import { toast } from "react-toastify";

export const addExam = (req) => async (dispatch) => {
  try {
    const resp = await axios.post(
      `${API_URL}/api/v1/exam/add`,
      req,
      authHeader()
    );
    dispatch({ type: ADD_EXAM, payload: resp.data });
    toast.success("Thêm bài thi thành công");
  } catch (error) {
    toast.error("Thêm bài thi thất bại");
  }
};

export const getExams = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/exams?page=${req.page}&size=${req.size}`,
      authHeader()
    );
    dispatch({ type: GET_EXAMS, payload: resp.data });
    console.log("exams", resp.data);
  } catch (error) {
    console.error(error);
  }
};

export const getExam = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/exam?id=${req}`,
      authHeader()
    );
    dispatch({ type: GET_EXAM, payload: resp.data });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateExam = (req) => async (dispatch) => {
  try {
    const resp = await axios.put(
      `${API_URL}/api/v1/exam/update`,
      req,
      authHeader()
    );
    dispatch({ type: UPDATE_EXAM, payload: resp.data });
    toast.success("Cập nhật thành công");
  } catch (error) {
    toast.error("Cập nhật thất bại");
  }
};
