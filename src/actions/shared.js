import { getAllItems } from './getAllItems'
import { addToCart, removeFromCart, subtractItemFromCart } from './cartItems'

const API_URL = 'https://api.myjson.com/bins/qzuzi'

export function handleInitialLoad (sortByID, filterValue) {
    return (dispatch) => {
      return fetch(API_URL)
        .then(status)
        .then(json)
        .then(function(data) {
          if(sortByID === 'lowToHigh'){
            data.sort(function(a, b){
              return a.price-b.price;
            });
          }else{
            data.sort(function(a, b){
              return b.price-a.price;
            });
          }
          data = data.filter(item => item.price < filterValue)
            dispatch(getAllItems(data))

        }).catch(function(error) {
            console.log('Request failed', error);
    });
    }
}

export function addItemToCart (item) {
  return (dispatch) => {
        dispatch(addToCart(item))
      }
}

export function removeItemFromCart (item) {
  return (dispatch) => {
        dispatch(removeFromCart(item))
      }
}

export function reduceItemFromCart (item) {
  return (dispatch) => {
        dispatch(subtractItemFromCart(item))
      }
}

  ////////////////////////////////////////////
  //Utilities
  ///////////////////////////////////////////
  function status(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText))
    }
  }
  
  function json(response) {
    return response.json()
  }