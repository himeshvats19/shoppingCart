import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem';

class CartList extends Component {
    render() {
        const { cartItems } = this.props;
        console.log(cartItems.arr)
        
        return (
            <ul>
                {cartItems.arr.length > 0 ? cartItems.arr.map(item => 
                <li key={item.id}>
                    <CartItem item={item}/>
                </li>) 
                : <p>Cart Empty!</p>}
            </ul>
        )
    }
}

function mapStateToProps ({ items, cartItems }) {
    return {
      items,
      cartItems
    }
  }
  
  export default connect(mapStateToProps)(CartList)
  