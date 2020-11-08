import React from 'react';

const Products = ({ item }) => {
   return(
    <div className='product-list-entry'>
      <img src={item.image} />
      <h3>{item.item}</h3>
      <h4> Current Bid: {item.curr_bid}</h4>
      <h4> Bid Ends in: {item.ends_in}</h4>
    </div>
  )
}

export default Products