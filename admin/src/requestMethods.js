import axios from "axios";
import { useNavigate } from "react-router-dom";

const navigate = () => useNavigate;
let TOKEN = null;

const storedData = localStorage.getItem("persist:root");
if (storedData) {
  const user = JSON.parse(JSON.parse(storedData).user).currentUser;

  if (user) {
    TOKEN = user.accessToken;
  } else {
    navigate("/login");
  }
} else {
  navigate("/login");
}

const BASE_URL = "http://localhost:5050/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
