import { SET_RESPONSE, SET_SELECTION, FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions/types';
const initialState = {
  username: "John Doe",
  response: "",
  selection:"",
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function medium (state = initialState, action) {
  switch (action.type) {
    case SET_RESPONSE:
      return {
        ...state,
        response: action.text
      }
    case SET_SELECTION:
      return {
        ...state,
        selection: action.selection
      }
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
