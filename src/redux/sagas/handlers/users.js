import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/users";
import { setUser } from "../../userReducer/users";

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(setUser(data));
  } catch (e) {
    console.log(e);
  }
}
