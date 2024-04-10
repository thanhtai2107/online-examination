import axios from "axios";
import authHeader from "../../config/auth-header";
import { API_URL } from "../../config/api";
import { ADD_QUESTION } from "./ActionType";
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
