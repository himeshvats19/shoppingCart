import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import CartIconComponent from './CartIconComponent'
import Search from './Search'


export default class Header extends Component {
    searchQuery = (searchValue) => {
        this.props.searchQuery(searchValue)
    }
    render() {
        return (
            <div className="header">
                <Link to={{
                pathname: '/shoppingCart/',
                 }}> 
                 <div className='logo'>
                     <FontAwesomeIcon icon={faStar} />
                 </div>
                </Link>
                <Search searchQuery={this.searchQuery}/>

                <CartIconComponent/>
            </div>
        )
    }
}
