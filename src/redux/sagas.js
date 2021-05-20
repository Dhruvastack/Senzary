import { take, call, all } from "redux-saga/effects";

import { authSaga } from "../Auth/saga";
export default function* rootSagas() {
  yield all(
      [
    authSaga()]);
}