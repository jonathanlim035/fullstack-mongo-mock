import React from 'react';

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id="searchbox"/>
    <button className="btn hidden-sm-down" onClick={props.handleSearch}>
      <span className="glyphicon glyphicon-search">SEARCH</span>
    </button>
  </div>
);

export default Search;