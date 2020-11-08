import React from 'react';
import Products from './Products';

const ProductList = (props) => {
   return(
    <div className='product-list'>
      <h2>Current Products: </h2>
      {
        props.data.map((item) => {
          return(
            <Products key={item._id} item={item} updateCurrent={props.updateCurrent}/>
          )
        })
      }
    </div>
  )
}

export default ProductList