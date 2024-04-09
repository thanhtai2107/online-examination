import axios from "axios";
import { API_URL } from "../../config/api";
import authHeader from "../../config/auth-header";
import { ADD_STUDENT } from "./ActionType";
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
