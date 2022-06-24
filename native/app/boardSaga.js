import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { SELECT_ALL_BOARDS, BOARDS_REQUEST, FAILED_REQUEST, INSERT_BOARD, INSERT_REQUEST } from "./board";
import { AuthAxios, defaultAxios, fileAxios } from "./AxiosApi";

function* handleInsertBoards(action) {
  try {
    console.log("handleInsertBoards start");
    let filePath = "";
    console.log(action.data);
    const { content, img, file } = action.data;
    console.log("content: ", content, "img: ", img, "file: ", file);
    let uploadFile = new FormData();
    uploadFile.append("file", file);
    if (file) {
      yield call(fileAxios, "/upload", "post", uploadFile);
    }
    const post = {
      content,
      img: filePath ? filePath : "/img/" + img,
      userId: null,
    };
    console.log("post입니다!!!: ", post);
    yield call(AuthAxios, "/board/", "post", post);
    yield put({
      type: INSERT_BOARD,
    }); //put은 특정 액션을 dispatch한다
  } catch (error) {
    yield put({
      type: FAILED_REQUEST,
      error: error,
    });
  }
}
function* handleSelectAllBoards() {
  try {
    console.log("handleSelectAllBoards start");
    const allBoards = yield call(defaultAxios, "/board/", "get");
    // console.log(allBoards.data);
    yield put({
      type: SELECT_ALL_BOARDS,
      payload: allBoards.data,
    }); //put은 특정 액션을 dispatch한다
  } catch (error) {
    yield put({
      type: FAILED_REQUEST,
      error: error,
    });
  }
}

export function* watchGetBoards() {
  console.log("saga / watchGetBoards");
  yield takeLatest(INSERT_REQUEST, handleInsertBoards);
  yield takeLatest(BOARDS_REQUEST, handleSelectAllBoards);
}
