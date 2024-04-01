import axios from "axios";

const API_URL = "http://localhost:8080/api/v1";
const authService = {
  login: (data) => {
    axios
      .post(API_URL + "/login", data)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          localStorage.setItem("jwt", response.data.token);
          localStorage.setItem("user", response.data.userDTO);
        }
        return response.data.token;
      })
      .catch();
  },
  logout: () => {
    localStorage.removeItem("jwt");
  },
};

export default authService;
