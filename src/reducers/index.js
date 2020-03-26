import { combineReducers } from 'redux'

import items from './allItems'
import cartItems from './cartItems'
export default combineReducers({
    items,
    cartItems
})