import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class CartIconComponent extends Component {
    render() {
        const { cartItems } = this.props;
        let cartSize = 0
        cartItems.arr.forEach(item => {
            cartSize += item.quantity;
        });;
        return (
          
            <div className="shopping-cart">
                  <Link to={{
                pathname: '/shoppingCart/checkout',
                 }}> 
                <FontAwesomeIcon icon={faShoppingCart} />
                <span className="cart-count">{cartSize}</span>
                </Link>
            </div>
        )
    }
}
function mapStateToProps ({ cartItems }) {
    return {
     cartItems
    }
  }

export default connect(mapStateToProps)(CartIconComponent)
