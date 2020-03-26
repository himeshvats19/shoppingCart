import React, { Component } from 'react'

export default class Sort extends Component {
    handleSort = (e) => {
        this.props.sortBy(e.target.value)
    }
    render() {
        return (
            <div className="sort">
                <span>Sort By</span>
               <button value='highToLow' onClick={this.handleSort} className="btn">Price -- High -> Low</button>
               <button value='lowToHigh' onClick={this.handleSort} className="btn">Price -- Low -> High</button>
            </div>
        )
    }
}
