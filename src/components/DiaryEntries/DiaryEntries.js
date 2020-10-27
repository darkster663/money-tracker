import React from 'react';

import DiaryEntry from './DiaryEntry/DiaryEntry';
import classes from './DiaryEntries.css';

const diaryEntries = props => (
    <div className={classes.DiaryEntries}>
        {props.entries.map(entry => (
            <DiaryEntry
                key={entry.id}
                id={entry.id} 
                description={entry.description}
                money={entry.money}
                category={entry.category}
                date={entry.date}
                delete={props.onDeleteEntry}/>
        ))}
    </div>
)

export default diaryEntries;