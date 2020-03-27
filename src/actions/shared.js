import { getAllItems } from './getAllItems'
import { addToCart, removeFromCart, subtractItemFromCart } from './cartItems'

const API_URL = 'https://api.myjson.com/bins/qzuzi'

export function handleInitialLoad (sortByID, filterValue, searchValue = '') {
    return (dispatch) => {
      return fetch(API_URL)
        .then(status)
        .then(json)
        .then(function(data) {
          if(sortByID === 'lowToHigh'){
            data.sort(function(a, b){
              return a.price-b.price;
            });
          }else if(sortByID === 'highToLow'){
            data.sort(function(a, b){
              return b.price-a.price;
            });
          }else{
            data.sort(function(a, b){
              return a.discount-b.discount;
            });
          }
          data = data.filter(item => item.price < filterValue)
          if(searchValue.length > 0){
            data = data.filter(item => {
              return item.name.toLowerCase() === searchValue
            })
          }
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