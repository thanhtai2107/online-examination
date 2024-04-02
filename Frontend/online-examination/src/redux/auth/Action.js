import axios from "axios";
import { API_URL } from "../../config/api";
import { LOGIN } from "./ActionType";
import { toast } from "react-toastify";

export const login = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/login`, data);
    const jwt = response.data.token;
    localStorage.setItem("jwt", jwt);
    dispatch({ type: LOGIN, payload: response.data });
    toast.success("Đăng nhập thành công");
  } catch (err) {
    toast.error("Đăng nhập thất bại");
    console.log(err);
  }
};
