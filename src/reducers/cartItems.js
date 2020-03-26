import { ADD_TO_CART, REMOVE_FROM_CART, REDUCE_FROM_CART }  from '../actions/cartItems'
const initialCartState = {
    arr:[]
}
export default function cartItems (state = initialCartState, action) {
    switch (action.type) {
      case ADD_TO_CART :
        if(state.arr.includes(action.item)){
          state.arr[state.arr.indexOf(action.item)].quantity += 1;
          return { 
            ...state,
            arr: [...state.arr]
        }
        }
        else{
          action.item.quantity = 1;
        }
        return { 
            ...state,
            arr: [...state.arr, action.item]
        }
      case REMOVE_FROM_CART :
        return { 
            ...state,
            arr: [...state.arr.filter(item => item !== action.item)]
        }
      case REDUCE_FROM_CART :
            state.arr[state.arr.indexOf(action.item)].quantity -= 1;
            return { 
              ...state,
              arr: [...state.arr]
          }
      default :
        return state
    }
  }