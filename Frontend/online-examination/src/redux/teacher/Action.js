import axios from "axios";
import { API_URL } from "../../config/api";
import authHeader from "../../config/auth-header";
import { ADD_TEACHER } from "./ActionType";
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
    toast.success("Thêm giáo viên thất bại");
  }
};
