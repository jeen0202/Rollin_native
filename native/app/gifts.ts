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
      console.log(action.payload);
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
    load2: (state: giftState, action: PayloadAction<number>) => {
      state.giftId = action.payload;
    },
    load3: (state: giftState, action: PayloadAction<string>) => {},
    selectGiftByKey: (state: giftState, action: PayloadAction<any>) => {
      console.log("gifts.js 안의 selectGfitByKey, action.payload:", action.payload);
      state.detailGift.gift = action.payload.data;
    },
    // selectReceivers: (state: giftState, action: PayloadAction<any>) => {
    //   console.log(action.payload);
    //   state.receiversInfo.receivers = action.payload.data;
    // },
    insertGift: (state: giftState, action: PayloadAction<any>) => {
      console.log("insertGift, action.payload: ", action.payload);
    },
    insertGiftFail: (state: giftState, action: PayloadAction<Error>) => {
      state.error = action.payload;
      console.log("InsertGift Fail");
    },
    postEmail: (state: any, action: PayloadAction<any>) => {
      console.log("postEmail, acation.payload: ", action.payload);
    },
    postEmailFail: (state: any, action: PayloadAction<Error>) => {
      state.error = action.payload;
      console.log("postEmail Fail");
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(selectGiftByKey.fulfilled, (state, { payload }) => {
  //       const newDetailGift = { ...state.detailGift };
  //       if (payload) {
  //         newDetailGift.gift = payload;
  //         return { ...state, detailGift: newDetailGift };
  //       } else {
  //         newDetailGift.message = "상품이 없습니다.";
  //         return { ...state, detailGift: newDetailGift };
  //       }
  //     })
  //     .addCase(selectGiftByKey.rejected, (state, { error }) => {
  //       const newDetailGift = { ...state.detailGift };
  //       newDetailGift.message = error.message;
  //       return { ...state, detailGift: newDetailGift };
  //     })
  //     .addCase(selectReceivers.fulfilled, (state, { payload }) => {
  //       const newReceiversInfo = { ...state.receiversInfo };
  //       if (payload) {
  //         newReceiversInfo.receivers = payload;
  //         return { ...state, receiversInfo: newReceiversInfo };
  //       } else {
  //         newReceiversInfo.message = "받을 수 있는 사람이 없습니다";
  //         return { ...state, receiversInfo: newReceiversInfo };
  //       }
  //     })
  //     .addCase(selectReceivers.rejected, (state, { error }) => {
  //       const newReceiversInfo = { ...state.receiversInfo };
  //       newReceiversInfo.message = error.message;
  //       return { ...state, receiversInfo: newReceiversInfo };
  //     })
  //     .addCase(insertGift.fulfilled, (state, { payload }) => {
  //       console.log("insert Gift 성공");
  //       return { ...state };
  //     })
  //     .addCase(insertGift.rejected, (state, { error }) => {
  //       return { ...state };
  //     });
  // },
});

export const {
  selectAllGifts,
  load2,
  load3,
  selectGiftByKey,
  insertGift,
  insertGiftFail,
  requestSort,
  requestGetGiftName,
  postEmail,
  postEmailFail,
  updateView,
} = giftsSlice.actions;

export default giftsSlice.reducer;
