import { createSlice } from "@reduxjs/toolkit";
export type authState = {
  Api: object;
  kakaoid: number;
};
const initialState: authState = {
  Api: {},
  kakaoid: 0,
};

const APISlice = createSlice({
  name: "kakaos",
  initialState,
  reducers: {
    putAPI: (state: authState, action: any) => {
      state.Api = action.payload;
    },
    putKaokaoID: (state: authState, action: any) => {
      state.kakaoid = action.payload;
    },
    APIload: (state: authState, action: any) => {
      console.log(action.payload);
    },
    APIload2: (state: authState, action: any) => {
      console.log(action.payload);
    },
    APIload3: (state: authState, action: any) => {
      console.log(action.payload);
    },
  },
  extraReducers: {},
});
export const { putAPI, putKaokaoID, APIload, APIload2, APIload3 } = APISlice.actions;
export default APISlice.reducer;
