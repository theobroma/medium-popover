import axios from 'axios';
import { apiPrefix } from '../../etc/config.json';
import { ADD_TO_CART, SET_CART, DELETE_CART_ITEM, DELETE_CART, QUANTITY_INCREMENT, QUANTITY_DECREMENT, FETCHING_CART } from './types';

/*export function onAddToCart(data) {
  return dispatch => axios.post(`${apiPrefix}/cart`, data);
}*/

export function  onAddToCart(item) {
  return {
    type: ADD_TO_CART,
    item
  };
}

export function onIncrement(productId) {
  return dispatch => dispatch({
    type: QUANTITY_INCREMENT,
    productId
  });
}

export function onDecrement(productId) {
  return dispatch => dispatch({
    type: QUANTITY_DECREMENT,
    productId
  });
}

/*export function fetchCart() {
  return function (dispatch) {
    axios.get(`${apiPrefix}/cart`)
    .then((response) => {
      dispatch({
        type: SET_CART,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  };
}*/

// Action Creators
export function loadCart() {
  return {type: FETCHING_CART};
}



export function onItemDelete(productId) {
  return dispatch => axios.delete(`${apiPrefix}/cart/${productId}`)
    .then(() => {
      dispatch({
        type: DELETE_CART_ITEM,
        productId
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function cartDelete() {
  return dispatch => axios.delete(`${apiPrefix}/cart`)
    .then(() => {
      dispatch({
        type: DELETE_CART
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

export function addOrder(data) {
  return dispatch => axios.post(`${apiPrefix}/profile/orders`, data);
}
