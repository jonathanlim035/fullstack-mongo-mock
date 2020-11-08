import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      current: {}
    },
    this.updateData = this.updateData.bind(this),
    this.updateCurrent = this.updateCurrent.bind(this),
    this.updateCurrentPrice = this.updateCurrentPrice.bind(this),
    this.handleSearch = this.handleSearch.bind(this);
  }

  updateData(callback = () => {}) {
    axios.get('http://localhost:3000/api/products')
      .then((results) => {
        this.setState({ data: results.data });
        callback();
      })
      .catch((err) => {
        console.error(err);
      })
  }

  handleSearch(e) {
    e.preventDefault();
    let resultArr = this.state.data.filter((product) => {
      if (product.item.includes(document.getElementById('searchbox').value)) {
        return product;
      }
    })
    this.setState({ current: resultArr[0]});
    document.getElementById('searchbox').value = '';
  }

  updateCurrent(item) {
    this.setState({ current: item })
  }

  updateCurrentPrice(price) {
    this.setState({ current: {
      __v: this.state.current.__v,
      _id: this.state.current._id,
      curr_bid: price,
      ends_in: this.state.current.ends_in,
      image: this.state.current.image,
      item: this.state.current.item,
      min_cost: this.state.current.min_cost
    }});
  }

  componentDidMount() {
    this.updateData(() => this.setState({ current: this.state.data[0] }));
  }

  render(){

    return(
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearch={this.handleSearch}/>
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer data={this.state.current} updateData={this.updateData} updateCurrentPrice={this.updateCurrentPrice}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList  data={this.state.data} updateCurrent={this.updateCurrent}/>
          </div>
        </div>
      </div>
    )
  }
}