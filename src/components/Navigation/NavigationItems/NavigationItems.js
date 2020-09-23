import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className="NavigationItems">
    <NavigationItem link="/">Login</NavigationItem>
    <NavigationItem link="/">Sign Up</NavigationItem>
  </ul>
);

export default navigationItems;
