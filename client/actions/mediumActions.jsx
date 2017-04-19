import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { SET_RESPONSE,SET_SELECTION } from '../actions/types';

export function onResponseChange(text) {
  return dispatch => dispatch({
    type: SET_RESPONSE,
    text
  });
}

export function onGetSelection(selection) {
  return dispatch => dispatch({
    type: SET_SELECTION,
    selection
  });
}
