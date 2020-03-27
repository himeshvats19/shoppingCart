import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addItemToCart } from '../actions/shared'
class Item extends Component {
    addItemToCart = () => {
        const { item } = this.props;
        this.props.dispatch(addItemToCart(item))
    }
    render() {
        const { item } = this.props
        return (
           <div>
               <img className="loading" src={item.img_url} alt={item.name}/>
               <h3 className="item-title">{item.name}</h3>
               <div className="item-details">
                    <span className="item-price">Rs {parseFloat(item.price - (item.price * item.discount/100))} <strike>{item.price}</strike></span>
                    <span className="item-disc">{item.discount}% Off</span>
               </div>
               <button className="btn" onClick={this.addItemToCart}>Add To Cart</button>
           </div>
        )
    }
}

export default connect()(Item)
