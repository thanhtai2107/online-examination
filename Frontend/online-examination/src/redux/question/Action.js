import axios from "axios";
import authHeader from "../../config/auth-header";
import { API_URL } from "../../config/api";
import {
  ADD_QUESTION,
  DELETE_QUESTION,
  GET_QUESTION,
  GET_QUESTIONS,
  GET_STUDENT_QUESTIONS,
  UPDATE_QUESTION,
} from "./ActionType";
import { toast } from "react-toastify";

export const addQuestion = (req) => async (dispatch) => {
  try {
    const resp = await axios.post(
      `${API_URL}/api/v1/question/add`,
      req,
      authHeader()
    );
    dispatch({ type: ADD_QUESTION, payload: resp.data });
    toast.success("Thêm câu hỏi thành công");
  } catch (error) {
    toast.error("Thêm câu hỏi thất bại");
  }
};

export const getQuestions = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/questions?id=${req}`,
      authHeader()
    );
    dispatch({ type: GET_QUESTIONS, payload: resp.data });
    console.log("questions", resp.data);
  } catch (error) {
    console.error(error);
  }
};

export const getStudentQuestions = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/questions/student?examId=${req.examId}&studentId=${req.studentId}`,
      authHeader()
    );
    dispatch({ type: GET_STUDENT_QUESTIONS, payload: resp.data });
    console.log("questions", resp.data);
  } catch (error) {
    toast.error("Bạn không thể thực hiện bài thi");
    console.error(error);
  }
};

export const getQuestion = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/question?id=${req}`,
      authHeader()
    );
    dispatch({ type: GET_QUESTION, payload: resp.data });
    console.log("question", resp.data);
  } catch (error) {
    console.error(error);
  }
};

export const updateQuestion = (req) => async (dispatch) => {
  try {
    const resp = await axios.put(
      `${API_URL}/api/v1/question/update`,
      req,
      authHeader()
    );
    dispatch({ type: UPDATE_QUESTION, payload: resp.data });
    toast.success("Cập nhật thành công");
  } catch (error) {
    toast.error("Cập nhật thất bại");
  }
};

export const deleteQuestion = (req) => async (dispatch) => {
  try {
    const resp = await axios.delete(
      `${API_URL}/api/v1/question?id=${req}`,
      authHeader()
    );
    dispatch({ type: DELETE_QUESTION, payload: resp.data });
    toast.success("Xóa câu hỏi thành công");
    console.log(resp.data);
  } catch (error) {
    toast.error("Xóa câu hỏi thất bại");
    console.error(error);
  }
};
