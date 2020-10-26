import React, { Component } from 'react';

import classes from './Diary.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import MoneyDisplay from '../../components/MoneyDisplay/MoneyDisplay';
import DiaryEntries from '../../components/DiaryEntries/DiaryEntries';
import Modal from '../../UI/Modal/Modal';
import AddEntry from '../AddEntry/AddEntry';

class Diary extends Component {

    state = {
        total: 2250,
        entries: [
            {
                id: 1,
                description: 'Saturday night drinks',
                money: '83',
                category: 'entertainment',
                date: new Date()
            },
            {
                id: 2,
                description: 'Gym membership',
                money: '220',
                category: 'subscriptions',
                date: new Date()
            },
            {
                id: 3,
                description: 'Food shopping for a few days',
                money: '52',
                category: 'nutrition&supplements',
                date: new Date()
            },
            {
                id: 4,
                description: 'Shopping for autumn outfits',
                money: '750',
                category: 'shopping&investitions',
                date: new Date()
            },
            {
                id: 5,
                description: 'Public transport',
                money: '25',
                category: 'subscriptions',
                date: new Date()
            }
        ],
        adding: false
    };

    addEntryHandler = () => {
        this.setState({adding: true});
    }

    cancelEntryHandler = () => {
        this.setState({adding: false});
    }

    onAddEntry = (formData) => {
        //Placeholder method
        const entry = {
            id: formData['name'],
            description: formData['description'],
            money: formData['money'],
            category: formData['category'],
            date: new Date()
        };
        this.setState(prevState => ({
            entries: [...prevState.entries, entry]
        }));
        this.setState({adding: false});
        this.setState(prevState => ({total: prevState.total - entry.money}));

    }

    render () {
        return (
            <Aux>
                <MoneyDisplay totalMoney={this.state.total}/>
                <div className={classes.AddButtonContainer}><button className={classes.AddButton} onClick={this.addEntryHandler}>ADD</button></div>
                <DiaryEntries entries={this.state.entries}/>
                <Modal show={this.state.adding} modalClosed={this.cancelEntryHandler}>
                    {this.state.adding ? <AddEntry onAddEntry={this.onAddEntry}/> : null}
                </Modal>
            </Aux>
        );
    }

}

export default Diary;