import React from 'react'
import { Link } from 'gatsby';
export default function Nav (): JSX.Element {
  return ( 
  <nav>
    <ul>
      <li><Link to="/">Hot now</Link></li>
      <li><Link to="/pizzas">Pizza Menu</Link></li>
      <li><Link to='/'>Logo</Link></li>
      <li><Link to="/slicemasters">SliceMasters</Link></li>
      <li><Link to="/order">Order</Link></li>  
    </ul>
  </nav>
  );
}