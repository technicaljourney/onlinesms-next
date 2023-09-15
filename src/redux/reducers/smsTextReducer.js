import * as types from "../types";

const initialState = {
  smsFilterOption: null,
  filterLoading: false,
};

export default function smsTextReducer(state = initialState, action) {
  switch (action.type) {
    case types.ZIP_CODE_VALIDATION_REQUEST:
      return {
        ...state,
        smsFilterOption: null,
        filterLoading: true,
      };
    case types.ZIP_CODE_VALIDATION_SUCCESS:
      return {
        ...state,
        smsFilterOption: action.payload,
        filterLoading: false,
      };
    case types.ZIP_CODE_VALIDATION_FAILURE:
      return {
        ...state,
        smsFilterOption: null,
        filterLoading: false,
      };
    default:
      return state;
  }
}
