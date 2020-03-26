export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const REDUCE_FROM_CART = 'REDUCE_FROM_CART'

export function addToCart (item) {
  return {
    type: ADD_TO_CART,
    item,
  }
}

export function removeFromCart (item) {
    return {
      type: REMOVE_FROM_CART,
      item,
    }
  }

export function subtractItemFromCart (item) {
    return {
      type: REDUCE_FROM_CART,
      item,
    }
  }