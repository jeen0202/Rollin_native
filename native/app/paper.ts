import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { gift, user, paperState, paper } from "../types";

// import { defaultAxios } from "./AxiosApi";

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
      //console.log(action.payload);
      state.selectedPaper = action.payload;
    },
    getPapers: (state: paperState, action: PayloadAction<Array<paper>>) => {
      // console.log(action);
      state.papers = action.payload;
    },
    loadPapers: (state: paperState) => {
      state.isLoading = true;
    },
    addPaper: (state: paperState, action: PayloadAction<Object>) => {
      //   state.paperdata = action.payload;
      // console.log(action.payload);
      state.selectedUser = undefined;
    },
    getPapersFail: (state: paperState, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
      state.selectedUser = undefined;
    },
    requestGetGift: (state: paperState, action: PayloadAction<number>) => {
      console.log("선물 데이터 요청", action.payload);
    },
    getGiftFromId: (state: paperState, action: PayloadAction<gift>) => {
      const newPaper = { ...state.selectedPaper!, gift: action.payload };
      state.selectedPaper = newPaper;
    },
    getGiftByIdFails: (state: paperState, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
  },
});
export const { select, selectPaper, getPapers, getPapersFail, loadPapers, addPaper, getGiftFromId, getGiftByIdFails, requestGetGift } = paperSlice.actions;
export default paperSlice.reducer;
