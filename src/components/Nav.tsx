import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const StyledNav = styled.nav`
  margin-bottom: 3rem;

  .logo {
    transform: translateY(-25%);
  }

  ul {
    margin: 0;
    margin-top: -6rem;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    text-align: center;
    list-style: none;
    align-items: center;
  }

  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;

    &:nth-child(1) {
    --rotate: 1.2deg;
    }

    &:nth-child(2) {
    --rotate: 1deg;
    }
    
    &:nth-child(3) {
    --rotate: -1.2deg;
    }

    &:nth-child(5) {
    --rotate: 1.2deg;
    }

    &:hover {
      --rotate: 3deg;
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    
    &:hover {
      color: var(--red);
    }

    /* &[aria-current="page"] {
      color: var(--red);
    } */
  }
`;


export default function Nav (): JSX.Element {
  return ( 
  <StyledNav>
    <ul>
      <li><Link to="/">Hot now</Link></li>
      <li><Link to="/pizzas">Pizza Menu</Link></li>
      <li><Link to='/'><Logo /></Link></li>
      <li><Link to="/slicemasters">SliceMasters</Link></li>
      <li><Link to="/order">Order</Link></li>  
    </ul>
  </StyledNav>
  );
}