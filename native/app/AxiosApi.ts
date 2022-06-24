import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

axios.defaults.baseURL = "http://172.20.10.5:8000";
export const IMG_PATH = "http://172.20.10.5:8000";
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
  const token = await AsyncStorage.getItem("loginUser")
  console.log(token);
  return await axios({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
