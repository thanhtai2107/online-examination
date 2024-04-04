import { jwtDecode } from "jwt-decode";

const checkExpired = (jwt) => {
  return Date.now() >= jwtDecode(jwt).exp * 1000 ? false : true;
};

export default function authHeader() {
  const jwt = localStorage.getItem("jwt");
  if (jwt && checkExpired(jwt)) {
    return {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    };
  } else {
    return {};
  }
}
