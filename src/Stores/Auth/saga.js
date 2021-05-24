import { takeEvery, call, put } from "redux-saga/effects";
import { types } from "./constants";
import axios from "axios";
import { createLoginSuccess, createLoginFailure ,createPasswordSuccess, createPasswordFailure} from "./actions";
import { successAlert, errorAlert } from '../Alerts/actions';
const BACKEND_URI ="http://demo.thingsboard.io/api";


//Login Saga
function* addLogin({ payload }) {
  try {
    const response = yield call(
      axios.post,
      `${BACKEND_URI}/auth/login`,
      payload
    );

    console.log("response>>>", response);
    yield put(createLoginSuccess({ data: response.data }));
  } catch (error) {
    yield put(createLoginFailure(error));
    yield put(errorAlert(error.response.data.message));
    alert(error.response.data.message)
    console.log("error>>>",error.response.data.message)
  }
  
}

export function* authSaga() {
  yield takeEvery(types.CREATE_LOGIN, addLogin);
}

//Password Saga

function* addPassword({ payload }) {
  try {
    const response = yield call(
      axios.post,
      `${BACKEND_URI}/noauth/resetPasswordByEmail`,
      payload
    );

    console.log("response>>>", response);
    yield put(createPasswordSuccess({ data: response.data }));
  } catch (error) {
    yield put(createPasswordFailure(error));
    yield put(errorAlert(error.response.data.message));
    alert(error.response.data.message)
    console.log("error>>>",error.response.data.message)
  }
  
}

export function* authPasswordSaga() {
  yield takeEvery(types.CREATE_PASSWORD, addPassword);
}
