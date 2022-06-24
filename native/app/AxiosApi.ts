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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjU2MTM2MjM5fQ.dbPPdeNGV9-0Wwl0IOa7HnJnJCYHyf5fTct3K1Oes_Y`,
    },
  });
};
export const fileAxios = async (url: any, method: any, data: any) => {
  console.log(`url : ${url}`);
  const response = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjU2MTM2MjM5fQ.dbPPdeNGV9-0Wwl0IOa7HnJnJCYHyf5fTct3K1Oes_Y`,
      "Content-Type": "multipart/form-data",
    },
  });
  //console.log(response);
  return response.data;
};
