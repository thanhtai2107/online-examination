import axios from "axios";
import authHeader from "../../config/auth-header";
import { API_URL } from "../../config/api";
import { ADD_COURSE, GET_COURSES } from "./ActionType";
import { toast } from "react-toastify";
export const addCourse = (req) => async (dispatch) => {
  try {
    const resp = await axios.post(
      `${API_URL}/api/v1/course/add`,
      req,
      authHeader()
    );
    dispatch({ type: ADD_COURSE, payload: resp.data });
    toast.success("Thêm khóa học thành công");
  } catch (error) {
    toast.error("Thêm khóa học thất bại");
  }
};
export const getCourses = (req) => async (dispatch) => {
  try {
    const resp = await axios.get(
      `${API_URL}/api/v1/courses?page=${req.page}&size=${req.size}`,
      authHeader()
    );
    dispatch({ type: GET_COURSES, payload: resp.data });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
};
