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
    this.updateCurrent = this.updateCurrent.bind(this)
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

  updateCurrent(item) {
    this.setState({ current: item })
  }

  componentDidMount() {
    this.updateData(() => {this.updateCurrent(this.state.data[0])});
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
            <Search />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer data={this.state.current} updateData={this.updateData} updateCurrent={this.updateCurrent}/>
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList  data={this.state.data} updateCurrent={this.updateCurrent}/>
          </div>
        </div>
      </div>
    )
  }
}