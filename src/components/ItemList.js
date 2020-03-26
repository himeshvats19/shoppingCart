import React, { Component } from 'react'
import Item from './Item'

export default class ItemList extends Component {
    render() {
        const { items } = this.props;
        console.log(items)
        return (
            <div className="item-list-container">
                <ul>
                    {items.length > -1 ? items.map( item => (
                     <li className="item" key={item.id}>
                         <Item item={item}/>
                         </li>
                    )) : <p>Loading...</p>}

                </ul>
            </div>
        )
    }
}
