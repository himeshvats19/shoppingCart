import React, { Component } from 'react'
import { connect } from 'react-redux'

class PriceComponent extends Component {
    render() {
        const { cartItems } = this.props;
        let totalPrice = 0
        let totalQuantity = 0
        let totalPayble = 0;
        cartItems.arr.forEach(item => {
            totalPrice += (item.price * item.quantity)
            totalQuantity += item.quantity
            let discountedPrice = parseFloat(item.price - (item.price * item.discount/100)) * item.quantity;
            totalPayble += discountedPrice
        });
        return (
            <div className="price-container">
                <h4>PRICE DETAILS</h4>
                <hr/>
               <p>Price:(Item : {totalQuantity}) <span>Rs.{totalPrice}</span></p>
                <p>Discount : <span>Rs.{totalPrice - totalPayble}</span></p>
                <hr/>
                <p>Total Payble : <span>Rs.{totalPayble}</span></p>
            </div>
        )
    }
}

function mapStateToProps ({ cartItems }) {
    return {
        cartItems
    }
  }
  
export default connect(mapStateToProps)(PriceComponent)