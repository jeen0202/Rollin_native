import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.47:8000";
export const IMG_PATH = "http://192.168.0.47:8000";
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
      Authorization: `Bearer ${AsyncStorage.getItem("loginUser")}`,
    },
  });
};
export const fileAxios = async (url: any, method: any, data: any) => {
  console.log(url, method, data);
  const response = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${AsyncStorage.getItem("loginUser")}`,
      "Content-Type": "multipart/form-data",
      //    "Content-Type": "multipart/form-data",
    },
  });
  console.log(response);
  return response.data;
};
