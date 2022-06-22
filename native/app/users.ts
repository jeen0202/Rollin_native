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
    load3: (state: userState, action: PayloadAction<Object>) => {
      console.log(action.payload);
    },
    load4: (state: userState, action: PayloadAction) => {
      console.log(action.payload);
    },
    load7: (state: userState, action: PayloadAction<Object>) => {
      console.log(action.payload);
    },
    load5: (state: userState, action: PayloadAction<number>) => {
      state.check = action.payload;
    },
    getUsers: (state: userState, action: PayloadAction<Array<user>>) => {
      state.users = action.payload;
      // console.log(action.payload);
    },
    getUserById: (state: userState, action: PayloadAction<any>) => {
      state.me = action.payload.data;
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
export const { login, logout, getUsers, load3, load4, load5, getUserById, load7, fistload, checkLogin, loadUsers } = userSlice.actions;
export default userSlice.reducer;
