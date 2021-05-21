/*
 *
 * Alerts reducer
 *
 */
import { types } from "./constants";

const initialState = {
  successSnackBarOpen: false,
  errorSnackBarOpen: false,
  warningSnackBarOpen: false,
  successSnackBarMessage: "",
  errorSnackBarMessage: "",
  warningSnackBarMessage: "",
};

/* eslint-disable default-case, no-param-reassign */
export default function alertProviderReducer(state = initialState, action) {
  switch (action.type) {
    case types.SUCCESS_SNACKBAR:
      return {
        ...state,
        successSnackBarOpen: true,
        successSnackBarMessage: action.payload,
      };
    case types.ERROR_SNACKBAR:
      return {
        ...state,
        errorSnackBarOpen: true,
        errorSnackBarMessage: action.payload,
      };

    case types.WARNING_SNACKBAR:
      return {
        ...state,
        warningSnackBarOpen: true,
        warningSnackBarMessage: action.payload,
      };

    case types.CLEAR_SNACKBAR:
      return {
        ...state,
      };

    default:
      return state;
  }
}
