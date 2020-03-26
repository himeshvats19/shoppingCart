import { GET_ITEMS } from '../actions/getAllItems'

export default function items (state = {}, action) {
  switch(action.type) {
    case GET_ITEMS :
      return [
        ...action.items
      ]
    default :
      return state
  }
}