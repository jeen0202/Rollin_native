import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user } from "../types";
export type gift = {
  id: number;
  price?: number;
  content: string;
  count?: number;
  img?: string;
  name?: string;
  views?: number;
};

export type giftState = {
  allGifts: Array<gift>;
  giftId?: number;
  error?: Error;
  isLoading: boolean;
  detailGift: {
    gift?: gift;
    message: string;
  };
  receiversInfo: {
    receivers: Array<user>;
    message: string;
  };
};
const initialState: giftState = {
  allGifts: [],
  isLoading: false,
  detailGift: {
    gift: undefined,
    message: "",
  },
  receiversInfo: {
    receivers: [],
    message: "",
  },
};

export const giftsSlice = createSlice({
  name: "gifts",
  initialState,
  reducers: {
    selectAllGifts: (state: giftState, action: PayloadAction<any>) => {
      // console.log(action.payload);
      state.allGifts = action.payload;
    },
    requestGetGiftName: (state: giftState, action: PayloadAction<string>) => {
      console.log("requestGetGiftName");
    },
    requestSort: (state: giftState, action: PayloadAction<any>) => {
      console.log("sort");
    },
    updateView: (state: giftState, action: PayloadAction<any>) => {
      console.log("view+1");
    },
    getGift: (state: giftState, action: PayloadAction<number>) => {
      // console.log("gifts.js 안의 getGift, action.payload:", action.payload);
      state.giftId = action.payload;
    },
    selectGiftByKey: (state: giftState, action: PayloadAction<any>) => {
      console.log(
        "gifts.js 안의 selectGfitByKey, action.payload.data:",
        action.payload
      );
      state.detailGift.gift = action.payload;
    },
    getReceivers: (state: giftState, action: PayloadAction<number>) => {},
    selectReceivers: (state: giftState, action: PayloadAction<any>) => {
      // console.log("selectReceivers 안의 action.payload.data:", action.payload);
      state.receiversInfo.receivers = action.payload;
    },
    insertGift: (state: giftState, action: PayloadAction<any>) => {
      console.log("gifts.ts의 insertGift");
      // console.log("insertGift, action.payload: ", action.payload);
    },
    insertGiftFail: (state: giftState, action: PayloadAction<Error>) => {
      state.error = action.payload;
      console.log("InsertGift Fail");
    },
    postEmail: (state, action) => {
      console.log("postEmail, acation.payload: ", action.payload);
    },
    postEmailFail: (state, action) => {
      state.error = action.payload;
      console.log("postEmail Fail");
    },
  },
});

export const {
  selectAllGifts,
  getGift,
  getReceivers,
  selectGiftByKey,
  insertGift,
  insertGiftFail,
  requestSort,
  requestGetGiftName,
  postEmail,
  postEmailFail,
  updateView,
  selectReceivers,
} = giftsSlice.actions;

export default giftsSlice.reducer;
