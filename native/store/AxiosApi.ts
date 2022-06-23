import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.59:8000";
export const IMG_PATH = "http://192.168.0.59:8000";
export const defaultAxios = async (url: any, method: any, data: any) => {
  console.log(`url : ${url}`);
  return await axios({
    method,
    url,
    data,
    headers: { "Content-Type": "application/json" },
  });
};
export const AuthAxios = async (url: any, method: any, data: any) => {
  console.log(`url : ${url}`);
  return await axios({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("loginUser")}`,
    },
  });
};
