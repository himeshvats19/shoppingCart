import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemToCart, removeItemFromCart, reduceItemFromCart } from '../actions/shared'

class CartItem extends Component {
    removeItemFromCart = () => {
        const { item } = this.props
        this.props.dispatch(removeItemFromCart(item))
    }
    updateItemsInCart = (e) => {
        const { item } = this.props
        if(e.target.value === 'addItem'){
            this.props.dispatch(addItemToCart(item))
        }else{
            if(item.quantity > 1){
                this.props.dispatch(reduceItemFromCart(item))
            }else{
                this.props.dispatch(removeItemFromCart(item))
            }
            
        }
        
    }

    render() {
        const { item } = this.props;
        return (
            <div className="cart-item">
                <img src={item.img_url} alt={item.name}/>
                    <div>
                        <h3>{item.name}</h3>
                        <span>
                            Rs {parseFloat(item.price - (item.price * item.discount/100))}
                        <strike>{item.price}</strike>
                        <span className="discount">{item.discount}% Off</span>
                        </span>
                    </div>
                    <div>
                        <button className="btn btn-edit" value='addItem' onClick={this.updateItemsInCart}>+</button>
                        <span>{item.quantity}</span>
                        <button  className="btn btn-edit" value='subtractItem' onClick={this.updateItemsInCart}>-</button>
                    </div>
                   <div>
                    <button  className="btn btn-remove" onClick={this.removeItemFromCart}>Remove</button>
                   </div>
                </div>  
        )
    }
}
function mapStateToProps ({ items, cartItems }) {
    return {
      items,
      cartItems
    }
  }
  
  export default connect(mapStateToProps)(CartItem)
