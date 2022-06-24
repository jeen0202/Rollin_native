import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";

export type comment = {
    id: number;
    userId: string;
    boardId: number;
    comment: string;
    img: string;
    date: string;
} | null;
export type userState = {
    comment?: Array<comment>;
    isLogin: boolean;
    check: number;
};
const initialState: userState = {
    comment: undefined,
    isLogin: false,
    check: 0,
};

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        loadaddcomment: (state: userState, action: PayloadAction<Object>) => {
            //console.log("dfaf:", action.payload);
        },
        getUsers: (state: userState, action: PayloadAction<Array<any>>) => {
            state.comment = action.payload;
        },
        loadcomment: (state: userState, action: PayloadAction) => {
            console.log(action.payload);
        },
    },
    extraReducers: {},
});
export const { loadaddcomment, getUsers, loadcomment } = commentSlice.actions;
export default commentSlice.reducer;
