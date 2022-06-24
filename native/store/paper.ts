import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gift } from "./gifts";
import { user } from "./users";

// import { defaultAxios } from "./AxiosApi";

export type paper = {
  id: number;
  userId: number;
  nickname: string;
  content: string;
  date?: Date;
  giftId: number;
  gift?: gift;
};
export type paperState = {
  papers: Array<paper>;
  isLoading: boolean;
  error: Error | null;
  selectedUser?: user;
  selectedPaper?: paper;
};
const initialState: paperState = {
  papers: [],
  isLoading: false,
  error: null,
  selectedUser: undefined,
  selectedPaper: undefined,
};

const paperSlice = createSlice({
  name: "papers",
  initialState,
  reducers: {
    select: (state: paperState, action: PayloadAction<user>) => {
      state.selectedUser = action.payload;
    },
    selectPaper: (state: paperState, action: PayloadAction<paper>) => {
      console.log(action.payload);
      state.selectedPaper = action.payload;
    },
    getPapers: (state: paperState, action: PayloadAction<Array<paper>>) => {
      console.log(action.payload);
      state.papers = action.payload;
    },
    load: (state: paperState) => {
      state.isLoading = true;
    },
    load2: (state: paperState, action: PayloadAction<Object>) => {
      //   state.paperdata = action.payload;
      console.log(action.payload);
      state.selectedUser = undefined;
    },
    getPapersFail: (state: paperState, action: PayloadAction<Error>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.selectedUser = undefined;
    },
    requestGetGift: (state: paperState, action: PayloadAction<object>) => {
      console.log(action.payload);
    },
    getGiftFromId: (state: paperState, action: PayloadAction<gift>) => {
      state.selectedPaper = { ...state.selectedPaper, gift: action.payload };
    },
    getGiftByIdFails: (state: paperState, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});
export const { select, selectPaper, getPapers, getPapersFail, load, load2, getGiftFromId, getGiftByIdFails, requestGetGift } = paperSlice.actions;
export default paperSlice.reducer;
