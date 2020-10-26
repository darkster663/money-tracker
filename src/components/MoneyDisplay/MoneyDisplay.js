import React from 'react';

import Flipper from '../Flipper/Flipper';
import MoneyIndicator from './MoneyIndicator/MoneyIndicator';
import DateIndicator from './DateIndicator/DateIndicator';
import classes from './MoneyDisplay.css';

const moneyDisplay = props => (
    <div className={classes.MoneyDisplay}>
        <Flipper
            front={<MoneyIndicator moneySum={props.totalMoney}/>} 
            back={<DateIndicator/>}/>
    </div>
)
export default moneyDisplay;