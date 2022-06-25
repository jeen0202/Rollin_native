import AsyncStorage from "@react-native-async-storage/async-storage";
import { call, put, select, takeLatest } from "redux-saga/effects";
import { getPapersFail } from "./paper";
import { defaultAxios, AuthAxios } from "./AxiosApi";
import { getUsers, getUserById, login, joinIdCheck, setCheck, tryLogin, checkLogin, addUser } from "./users";
import { AxiosResponse } from "axios";
import { RootState } from "./store";
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
    // console.log(data);
    // console.log(data.payload);
    const responser: AxiosResponse<any, any> = yield call(defaultAxios, "/user/Id", "post", data.payload);
    // console.log("check in PostUser : ", responser.data);
    if (responser.data === 0) {
      yield call(defaultAxios, "/user", "post", data.payload);
    } else {
      alert("이미 존재하는 아이디 입니다.");
    }
    // alert("회원가입이 완료되었습니다");
  } catch (error: any) {
    // alert("아이디가 중복입니다 다시 가입해 주세요");
    yield put(getPapersFail(error.data));
    console.error(error);
  }
}

// function* idCheck(data: any) {
//   try {
//     //console.log("data.payload", data.payload);
//     const responser: AxiosResponse<any, any> = yield call(defaultAxios, "/user/Id", "post", data.payload);
//     // console.log("response data : ", responser.data);
//     yield put(setCheck(responser.data));
//     // yield put(load4(responser.data));
//     return responser.data;
//     // return responser.data;
//   } catch (error: any) {
//     // alert("아이디가 중복입니다");
//     yield put(getPapersFail(error));
//     console.error(error);
//   }
// }

function* LoginCheck(data: any) {
  try {
    //console.log("data.payload", data.payload);
    const response: AxiosResponse<any, any> = yield call(defaultAxios, "/user/Login", "post", data.payload);
    // console.log(response.data);
    // console.log("로그인 시도 데이터 : " ,data.payload);
    if (response.data) {
      yield put(getUserById(response.data.id));
      yield put(login(true));
      AsyncStorage.setItem("loginUser", response.data.token);
    } else {
      alert("아이디와 비밀번호를 확인해 주세요");
      yield put(login(false));
    }
    // yield put(load4(responser.data));
  } catch (error: any) {
    // alert("아이디와 비밀번호를 확인해 주세요");
    yield put(getPapersFail(error));
    yield put(login(false));
    console.error(error);
  }
}
function* handleCheckLogin() {
  try {
    const response: AxiosResponse<any, any> = yield call(AuthAxios, "/user/me", "get", undefined);
    //console.log("response", response.data);
    yield put(getUserById(response.data));
    yield put(login(true));
  } catch (error) {
    // console.error(error);
    yield put(login(false));
  }
}
export function* watchGetUser() {
  yield takeLatest(tryLogin, LoginCheck);
  yield takeLatest(login, getUser);
  yield takeLatest(addUser, postUser);
  // yield takeLatest(joinIdCheck, idCheck);
  yield takeLatest(checkLogin, handleCheckLogin);
}
