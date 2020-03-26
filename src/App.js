import React from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom'
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
      filterValue: 1000
    }
  }
  componentDidMount() {
    this.props.dispatch(handleInitialLoad());
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
        this.state.filterValue
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
        this.state.sortByID, 
        this.state.filterValue
        ));
  }

  render(){
    return (
      <Router>
        <BrowserRouter basename="/shoppingCart" />
        <div className="App">
        <Route path="/" exact render = { (props) => 
        <React.Fragment>
         <Header/> 
         <div className="container">
             <div className="col-2">
               <Filter setFilter={this.setFilter}/>
             </div>
             <div className="col-10">
               <Sort sortBy={this.setSortedBy}/>
               <ItemList items={this.props.items}></ItemList>
             </div>
         </div>
         </React.Fragment>
        }/>
         <Route path="/checkout" render = { (props) => 
          <div className="checkout">
            <React.Fragment>
              <Header/>
              <div className="container">
              <Link to={{
                pathname: '/',
                 }}> <p>Back</p> </Link>
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
