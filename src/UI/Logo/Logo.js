import React from 'react';

import classes from './Logo.css';

const logo = props => (
    <div className={classes.Logo}>
        <img src={props.source} alt="Logo" />
    </div>

);

export default logo;