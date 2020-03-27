import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.scss'


import { handleInitialLoad } from './actions/shared'

import Header from './components/Header'
import Filter from './components/Filter'
import Sort from './components/Sort'
import ItemList from './components/ItemList'
import CartList from './components/CartList';
import PriceComponent from './components/PriceComponent';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      sortByID : 'lowToHigh',
      filterValue: 1000,
      searchValue: ''
    }
  }
  componentDidMount() {
    this.props.dispatch(handleInitialLoad(this.state.sortByID, this.state.filterValue));
  }
/*
* Filtered Dispatch
*/
  setFilter = (filterValue) => {
    this.setState({
      filterValue: filterValue
    })
    this.props.dispatch(
      handleInitialLoad(
        this.state.sortByID, 
        filterValue
      ));
  }
/*
* Sorted Dispatch
*/
  setSortedBy = (sortById) => {
    this.setState({
      sortByID: sortById
    })
    this.props.dispatch(
      handleInitialLoad(
        sortById, 
        this.state.filterValue
        ));
  }
  clearFilters = () => {
    this.setState({
      sortByID : 'lowToHigh',
      filterValue: 1000
    })
  this.props.dispatch(handleInitialLoad('lowToHigh', 1000));
  }

  searchQuery = (searchValue) => {
    this.setState({
      searchValue: searchValue
    });
    this.props.dispatch(
      handleInitialLoad(
        this.state.sortByID, 
        this.state.filterValue,
        searchValue
        ));
  }

  render(){
    return (
      <Router>
        <div className="App">
        <Route path="/shoppingCart" exact render = { (props) => 
        <React.Fragment>
         <Header searchQuery={this.searchQuery}/> 
         <div className="container">
             <div className="col-2">
               <Filter filterValue={this.state.filterValue} setFilter={this.setFilter}/>
             </div>
             <div className="col-10">
               <Sort sortBy={this.setSortedBy} clearFilters={this.clearFilters}/>
               <ItemList items={this.props.items}></ItemList>
             </div>
         </div>
         </React.Fragment>
        }/>
         <Route path="/shoppingCart/checkout" render = { (props) => 
          <div className="checkout">
            <React.Fragment>
              <Header/>
              <div className="container">
                  <div className="col-10">
                    <CartList/>
                  </div>
                  <div className="col-2">
                  <PriceComponent/>
                  </div>
             </div>
            </React.Fragment>
          </div>
        }/> 
         </div>
      </Router>
     
    );
  }
}


function mapStateToProps ({ items }) {
  return {
    items
  }
}

export default connect(mapStateToProps)(App)
