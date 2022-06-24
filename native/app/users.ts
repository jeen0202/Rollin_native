import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { user, userState } from "../types";

const initialState: userState = {
  users: undefined,
  isLogin: false,
  check: 0,
  me: undefined,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state: userState, action: PayloadAction<boolean>) => {
      // console.log(action.payload);
      state.isLogin = action.payload;
    },
    logout: (state: userState) => {
      AsyncStorage.removeItem("loginUser");
      state.isLogin = false;
      state.me = undefined;
    },
    addUser: (state: userState, action: PayloadAction<user>) => {
      console.log(action.payload);
    },
    joinIdCheck: (state: userState, action: PayloadAction<user>) => {
      console.log("ID중복체크");
      // console.log(action.payload);
    },
    tryLogin: (state: userState, action: PayloadAction<user>) => {
      //console.log(action.payload);
    },
    setCheck: (state: userState, action: PayloadAction<number>) => {
      state.check = action.payload;
    },
    getUsers: (state: userState, action: PayloadAction<Array<user>>) => {
      state.users = action.payload;
      // console.log(action.payload);
    },
    getUserById: (state: userState, action: PayloadAction<any>) => {
      state.me = action.payload;
    },
    fistload: (state: userState, action: PayloadAction) => {
      state.check = 0;
    },
    checkLogin: (state: userState, action: PayloadAction) => {
      console.log("check login...");
    },
    // getUsers: (state, action) => {
    //   state.value = action.payload;
    // },
    // selectUserById: (state, action) => {
    //   state.value = action.payload;
    // },
  },
  extraReducers: {},
});
export const { login, logout, getUsers, addUser, joinIdCheck, setCheck, getUserById, tryLogin, fistload, checkLogin } = userSlice.actions;
export default userSlice.reducer;
