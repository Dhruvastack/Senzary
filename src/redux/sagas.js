import { take, call, all } from "redux-saga/effects";

import { authSaga } from "../Stores/Auth/saga";
export default function* rootSagas() {
  yield all(
      [
    authSaga()]);
}