import { call, put, takeLatest } from "redux-saga/effects";
import { getPapersFail, load2 } from "./paper";
import { defaultAxios, AuthAxios } from "./AxiosApi";
import { getUsers, getUserById, login, load3, load4, load5, load7, checkLogin } from "./users";
import { AxiosResponse } from "axios";

function* getUser() {
  try {
    const response: AxiosResponse<any, any> = yield call(defaultAxios, "user", "get", undefined);
    yield put(getUsers(response.data));
  } catch (error) {
    console.error(error);
  }
}
function* postUser(data: any) {
  try {
    console.log(data);
    console.log(data.payload);
    yield call(defaultAxios, "/user", "post", data.payload);
    alert("회원가입이 완료되었습니다");
  } catch (error: any) {
    alert("아이디가 중복입니다 다시 가입해 주세요");
    yield put(getPapersFail(error));
    console.error(error);
  }
}

function* idCheck(data: any) {
  try {
    console.log("data.payload", data.payload);
    const responser: AxiosResponse<any, any> = yield call(defaultAxios, "/user/Id", "post", data.payload);
    yield put(load5(responser.data));
    // yield put(load4(responser.data));
  } catch (error: any) {
    alert("아이디가 중복입니다");
    yield put(getPapersFail(error));
    console.error(error);
  }
}

function* LoginCheck(data: any) {
  try {
    // console.log('data.payload', data.payload);
    const response: AxiosResponse<any, any> = yield call(defaultAxios, "/user/Login", "post", data.payload);
    yield put(getUserById(response.data.id));
    yield put(login(true));
    localStorage.setItem("loginUser", response.data.token);
    // yield put(load4(responser.data));
  } catch (error: any) {
    alert("아이디랑 비밀번호를 확인해 주세요");
    yield put(getPapersFail(error));
    yield put(login(false));
    console.error(error);
  }
}
function* handleCheckLogin() {
  try {
    const myToken = localStorage.getItem("loginUser");
    const response: AxiosResponse<any, any> = yield call(AuthAxios, "/user/me", "get", undefined);
    console.log(response.data);
    yield put(getUserById(response));
    yield put(login(true));
  } catch (error) {
    //console.error(error);
    yield put(login(false));
  }
}
export function* watchGetUser() {
  yield takeLatest(load7, LoginCheck);
  yield takeLatest(login, getUser);
  yield takeLatest(load3, postUser);
  yield takeLatest(load4, idCheck);
  yield takeLatest(checkLogin, handleCheckLogin);
}
