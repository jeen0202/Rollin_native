import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

axios.defaults.baseURL = "http://192.168.0.253:8000";
export const IMG_PATH = "http://192.168.0.253:8000";
export const FIRESTORAGE_PATH = "gs://rollin-fa609.appspot.com";
export const defaultAxios = async (url: any, method: any, data: any) => {
  // console.log(`url : ${url}`);
  return await axios({
    method,
    url,
    data,
    headers: { "Content-Type": "application/json" },
  });
};
export const AuthAxios = async (url: any, method: any, data: any) => {
  // console.log(`url : ${url}`);
  const token = await AsyncStorage.getItem("loginUser");
  // console.log(token);
  return await axios({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const fileAxios = async (url: any, method: any, data: any) => {
  // console.log(`url : ${url}`);
  const token = await AsyncStorage.getItem("loginUser");
  const response = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
  //console.log(response);
  return response.data;
};
