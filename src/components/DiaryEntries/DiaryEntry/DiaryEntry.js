import React from 'react';

import classes from './DiaryEntry.css';
import entertainmentLogo from '../../../assets/images/categories/entertainment.png';
import subscriptionsLogo from '../../../assets/images/categories/subscriptions.png';
import nutritionLogo from '../../../assets/images/categories/nutrition_supplements.png';
import shoppingLogo from '../../../assets/images/categories/shopping_investitions.png';
import Logo from '../../../UI/Logo/Logo';

const diaryEntry = props => {

    let logoSource = null;

    switch(props.category) {
        case('entertainment'):
            logoSource = entertainmentLogo;
            break;
        case('subscriptions'):
            logoSource = subscriptionsLogo
            break;
        case('nutrition&supplements'):
            logoSource = nutritionLogo;
            break;
        case('shopping&investitions'):
            logoSource = shoppingLogo;
            break;
        default:
            logoSource = null;
            break;
    }

    return (
        <div className={classes.Card}>
            <p className={classes.Description}>{props.description}</p>
            <p className={classes.Money}>{props.money} RON</p>
            <p className={classes.Category}>{props.category}</p>
            <p className={classes.Date}>{props.date.toLocaleDateString().split(",")[0]}</p>
            <div className={classes.Logo}><Logo source={logoSource} /></div>
        </div>
    );
};

export default diaryEntry;