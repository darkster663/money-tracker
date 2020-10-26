import React from 'react';
import classes from './Flipper.css';


const flipper = props => (
    <div className={classes.FlipperContainer}>
        <div className={classes.Flipper}>
            <div className={classes.Front}>
                {props.front}
            </div>
            <div className={classes.Back}>
                {props.back}
            </div>
        </div>
    </div>
);

export default flipper;