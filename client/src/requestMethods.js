import axios from "axios";
const BASE_URL = "http://localhost:5050/api/";
const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZjI4MzRmYWUzZGNhZDJiMWJmM2QyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyNzUxMjYwOSwiZXhwIjoxNzI3NzcxODA5fQ.6c-bkpllVIIhFmAYXyztLylpIuxlx83RfVnFBpkzkUI `;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
  // header: { token: `Bearer ${TOKEN}` },
});
