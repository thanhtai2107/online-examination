import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import authService from "../service/authService";

export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      if (Date.now() >= jwtDecode(jwt).exp * 1000) {
        authService.logout();
      }
    } else {
      navigate("/");
    }
  }, [jwt]);
  return jwt ? children : navigate("/");
};
