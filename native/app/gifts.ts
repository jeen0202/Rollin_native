import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { user, giftState } from "../types";

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

// action 타입
// const SELECT_GIFT_BY_KEY = "SELECT_GIFT_BY_KEY";
// const SELECT_ALL_GIFTS = "SELECT_ALL_GIFTS";
// const SELECT_RECEIVERS_BY_KEY = "SELECT_RECEIVER_NAMES_BY_KEY";
// const INSERT_GIFT = "INSERT_GIFT";

// export const selectGiftByKey = createAsyncThunk(
//   SELECT_GIFT_BY_KEY,
//   async (payload) => {
//     const gift = await getGiftById(Number(1));
//     return gift;
//   }
// );

// // 로그인한 user id가 아닌 사람들 name 가져오기
// export const selectReceivers = createAsyncThunk(
//   SELECT_RECEIVERS_BY_KEY,
//   async (payload) => {
//     const receivers = await getReceiverNamesNotUserId(Number(1));
//     return receivers;
//   }
// );
// export const selectGiftByKey = createAsyncThunk(
//   SELECT_GIFT_BY_KEY,
//   async (payload) => {
//     const gift = await getGiftById(Number(1));
//     return gift;
//   }
// );

// // 로그인한 user id가 아닌 사람들 name 가져오기
// export const selectReceivers = createAsyncThunk(
//   SELECT_RECEIVERS_BY_KEY,
//   async (payload) => {
//     const receivers = await getReceiverNamesNotUserId(Number(1));
//     return receivers;
//   }
// );

// export const selectAllgifts = createAsyncThunk(SELECT_ALL_GIFTS, async () => {
//   return await giftsApi();
// });

// export const insertGift = createAsyncThunk(INSERT_GIFT, async (payload) => {
//   const { receiverId, content } = payload;
//   //giftId 받아온걸로 바꿔주기
//   console.log("insertGift안에서 receiverId: ", receiverId);
//   const gift = {
//     userId: Number(receiverId),
//     nickname: "nickname",
//     content,
//     giftId: 1,
//   };
//   console.log("insertGift안에서 gift: ", gift);
//   console.log(receiverId);
//   return await postGift(gift);
// });

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
      // console.log("gifts.js 안의 selectGfitByKey, action.payload.data:", action.payload);
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
