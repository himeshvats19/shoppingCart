import React, { Component } from 'react'
import {DebounceInput} from 'react-debounce-input';

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
            searchValue: ''
        }
    }
    searchQuery = (e) => {
        this.setState({
            searchValue: e.target.value
        })
        this.props.searchQuery(this.state.searchValue)
    }
    render() {
        return (
            <div>
                <DebounceInput
                  type="text"
                  className="search-box"
                  placeholder="Search Items Here(eg: item1, item3)" 
                  value={this.state.searchValue} 
                  onChange={this.searchQuery}
                  debounceTimeout={300} 
                />
            </div>
        )
    }
}
