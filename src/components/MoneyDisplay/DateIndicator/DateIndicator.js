import React from 'react';

import classes from './DateIndicator.css';

const dateIndicator = props => {
    let date = new Date();
    let time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    let days = time.getDate() - date.getDate();

    return <div className={classes.DateIndicator}>{days} days left until next salary</div>


};

export default dateIndicator;
