import React from 'react';

import CountUp from 'react-countup';
import classes from './MoneyIndicator.css';

const moneyIndicator = props => {
    return (
        <div className={classes.MoneyIndicator}>
            <CountUp
                start={0}
                end={props.moneySum}
                duration={2.2}
                useEasing={true}
                useGrouping={true}
                separator=" "
                decimals={1}
                decimal=","
                prefix="RON "
                suffix=" left"/>
        </div>
    );
};

export default moneyIndicator;