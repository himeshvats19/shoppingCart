import React, { Component } from 'react'
import {DebounceInput} from 'react-debounce-input';

class Filter extends Component {
    constructor(){
        super();
        this.state = {
            sliderValue: 1000
        }
    }
    applyFilter = () => {
        this.props.setFilter(parseInt(this.state.sliderValue))
    }
    filterValue = (e) => {
        this.setState({
            sliderValue: e.target.value
        })
     }
    render() {
        return (
            <div className="filter">
                <h4>Filter</h4>
                <span>100</span>
                <DebounceInput
                  type="range" 
                  min="100" max="1000" 
                  value={this.state.sliderValue} 
                  step="1" 
                  onChange={this.filterValue}
                  debounceTimeout={300} 
                />
                <span>1000</span>
                <p>Range from 100 to {this.state.sliderValue}</p>
                <button onClick={this.applyFilter}className="btn">Apply</button>
            </div>
        )
    }
}

export default Filter
