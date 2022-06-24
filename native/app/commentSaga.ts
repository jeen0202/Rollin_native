import { call, put, takeLatest } from "redux-saga/effects";
import { getPapersFail, load2 } from "./paper";
import { getUsers } from "./users";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { loadaddcomment, loadcomment } from "./comment";
import { defaultAxios } from "./AxiosApi";

function* getComment() {
    try {
        const response: AxiosResponse<any, any> = yield call(defaultAxios, "comment/", "get", undefined);
        // console.log(response.data);
        yield put(getUsers(response.data));
    } catch (error) {
        console.error(error);
    }
}

function* addcomment(data: any) {
    try {
        const response: AxiosResponse<any, any> = yield call(defaultAxios, "/comment", "post", data.payload);
    } catch (error) {
        console.error(error);
    }
}

export function* watchGetComment() {
    yield takeLatest(loadaddcomment, addcomment);
    yield takeLatest(loadcomment, getComment);
}
