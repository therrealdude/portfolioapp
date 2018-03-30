import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioItems from '../Variables/PortfolioItems';


const Portfolio = () => (
  <div>
    {
      PortfolioItems.map((item) => (
        <Link to={'/portfolio/' + item.id}>{item.name}</Link>
      ))
    }
  </div>
);

export default Portfolio;
