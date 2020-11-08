import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" placeholder="By how many days"/>
      <input type="text" placeholder="Image url"/>
      <input type="text" placeholder="Item name"/>
      <input type="text" placeholder="Minimum cost"/>
      <input type="submit" />
    </form>
  )
}


export default Form;