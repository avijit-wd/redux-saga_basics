import { takeLatest } from "redux-saga/effects";
import { GET_USER } from "../userReducer/users";
import { handleGetUser } from "../sagas/handlers/users";
export function* watcherSaga() {
  yield takeLatest(GET_USER, handleGetUser);
}
