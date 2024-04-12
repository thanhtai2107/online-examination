import axios from "axios";
import authHeader from "../../config/auth-header";
import { API_URL } from "../../config/api";
import { toast } from "react-toastify";
import { SAVE_RESULT } from "./ActionType";

export const saveResult = (req) => async (dispatch) => {
  try {
    const resp = await axios.post(
      `${API_URL}/api/v1/result/save`,
      req,
      authHeader()
    );
    dispatch({ type: SAVE_RESULT, payload: resp.data });
    // toast.success("Thêm câu hỏi thành công");
  } catch (error) {
    // toast.error("Thêm câu hỏi thất bại");
  }
};
