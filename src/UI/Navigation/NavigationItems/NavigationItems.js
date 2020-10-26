import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem>Diary</NavigationItem>
        <NavigationItem>Configure</NavigationItem>
        <NavigationItem>History</NavigationItem>
    </ul>

);

export default navigationItems;