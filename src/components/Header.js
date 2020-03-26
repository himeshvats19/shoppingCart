import React, { Component } from 'react'
import CartIconComponent from './CartIconComponent'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <CartIconComponent/>
            </div>
        )
    }
}
