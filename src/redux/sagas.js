import { take, call, all } from "redux-saga/effects";

import { authSaga,authPasswordSaga } from "../Stores/Auth/saga";
export default function* rootSagas() {
  yield all(
      [
    authSaga(),
    authPasswordSaga()
  
  ]);
}