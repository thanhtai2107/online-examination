import axios from "axios";
import authHeader from "../../config/auth-header";
import { API_URL } from "../../config/api";
import { ADD_EXAM } from "./ActionType";
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
