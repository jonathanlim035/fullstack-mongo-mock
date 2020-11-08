import React from 'react';
import axios from 'axios';

export default class ProductViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      data: {}
    },
    this.onChange = this.onChange.bind(this),
    this.handleSubmit = this.handleSubmit.bind(this),
    this.updateData = this.updateData.bind(this)
  }

  onChange(e) {
    this.setState({input: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    e.persist();
    if (this.state.input > this.props.data.min_cost) {
      axios.put(`http://localhost:3000/api/products/${this.props.data._id}`, { curr_bid: this.state.input })
        .then(() => {
          this.props.updateData(this.props.updateCurrentPrice(this.state.input));
          window.alert('Successfully bid');
          e.target.reset();
        })
        .catch((err) => {
          console.error(err);
        })
    } else {
      window.alert('BID MORE');
    }
  }

  updateData() {
    this.setState({ data: this.props.data });
  }

  componentDidMount() {
    this.updateData();
  }

  render(){
    return(
      <div className = 'product-viewer'>
        <img src={this.props.data.image} />
        <h1> {this.props.data.item} </h1>
        <div>
          <span>Current Bid: ${this.props.data.curr_bid}</span>
          <br/>
          <span>Original Posting Price: ${this.props.data.min_cost}</span>
          <br/>
          <span>Bidding Ends in {this.props.data.ends_in} day(s)</span>
          <br/>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.onChange}/>
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}