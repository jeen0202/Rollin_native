import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
export const IMG_PATH = "http://localhost:8000";
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjU2MTE4NjU5fQ.hbd24FVxeRnzJGdKBiiPqQ5CAUQ3n9h65T6C3eU0HMc`,
    },
  });
};
