import React from 'react';
import PortfolioItems from '../Variables/PortfolioItems';


const PortfolioItem = (props) => {
  var item = PortfolioItems.find(function(i) { return i.id == props.match.params.id });
  return <div>
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
};

export default PortfolioItem;
