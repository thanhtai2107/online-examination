import axios from "axios";
import authHeader from "../../config/auth-header";
import { API_URL } from "../../config/api";
import { toast } from "react-toastify";
import {
  GET_RESULTS_BY_EXAM,
  GET_STUDENT_RESULTS,
  SAVE_RESULT,
} from "./ActionType";

export const saveResult = (req) => async (dispatch) => {
  try {
    const resp = await axios.post(
      `${API_URL}/api/v1/result/save`,
      req,
      authHeader()
    );
    dispatch({ type: SAVE_RESULT, payload: resp.data });
  } catch (error) {
    toast.error("Không thể lưu kết quả");
  }
};

export const getStudentResults = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/student-results?id=${req.id}&page=${req.page}&size=${req.size}`,
      authHeader()
    );
    dispatch({ type: GET_STUDENT_RESULTS, payload: resp.data });
    // console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};

export const getExamResults = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/exam/results?id=${req.id}&page=${req.page}&size=${req.size}`,
      authHeader()
    );
    dispatch({ type: GET_RESULTS_BY_EXAM, payload: resp.data });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};
