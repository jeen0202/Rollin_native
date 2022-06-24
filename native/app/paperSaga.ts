import { RootState } from "./store";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { selectPaper, getPapers, getPapersFail, loadPapers, load2, requestGetGift, getGiftByIdFails, getGiftFromId } from "./paper";
import { defaultAxios } from "./AxiosApi";
import { AxiosResponse } from "axios";

function* postPaper(data: any) {
  try {
    console.log(data);
    console.log(data.payload);
    yield call(defaultAxios, "/paper", "post", data.payload);
  } catch (error: any) {
    yield put(getPapersFail(error));
    console.error(error);
  }
}

function* handleGetAllPaper() {
  try {
    const paper: AxiosResponse<any, any> = yield call(defaultAxios, "/paper", "get", null);
    yield put(getPapers(paper.data));
  } catch (error: any) {
    console.error(error);
    yield put(getPapersFail(error));
  }
}
function* handleGetPaperById() {
  try {
    console.log("handle start");
    const id: number = yield select((state: RootState) => state.user.me?.id);
    const paper: AxiosResponse<any, any> = yield call(defaultAxios, `/paper/${id}`, "get", undefined);
    yield put(getPapers(paper.data));
  } catch (error: any) {
    console.error(error);
    yield put(getPapersFail(error));
  }
}
function* handleGetGiftFromId(data: any) {
  try {
    const giftId = data.payload.giftId;
    console.log(data.payload);
    console.log(giftId);
    if (giftId !== 0 && giftId !== undefined) {
      const myGift: AxiosResponse<any, any> = yield call(defaultAxios, `/gift/${giftId}`, "get", undefined);
      yield put(getGiftFromId(myGift.data));
    }
  } catch (error: any) {
    console.error(error);
    yield put(getGiftByIdFails(error));
  }
}
export function* watchGetPaper() {
  yield takeLatest(load2, postPaper);
  yield takeLatest(loadPapers, handleGetPaperById);
  yield takeLatest(requestGetGift, handleGetGiftFromId);
}
