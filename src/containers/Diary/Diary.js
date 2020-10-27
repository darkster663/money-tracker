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
        showingModal: false,
        entryForDeletionId: null,
        editedEntry: null
    };

    addEntryHandler = () => {
        this.setState({showingModal: true});
    }


    onAddEntry = (formData) => {
        //Placeholder method
        const entry = {
            id: formData['id'],
            description: formData['description'],
            money: formData['money'],
            category: formData['category'],
            date: new Date()
        };
        let index = null;
        let money = null
        for (let i=0; i < this.state.entries.length; i++) {
            if (this.state.entries[i].id === entry.id) {
                index = i;
                money = this.state.entries[i].money;
            }
        }
        if (index != null) {
            const updatedEntries = [...this.state.entries];
            updatedEntries[index] = entry;
            this.setState(prevState => ({total: prevState.total -parseInt(entry.money) + parseInt(money)}));
            this.setState({entries: updatedEntries});

        } else {
            this.setState(prevState => ({
                entries: [...prevState.entries, entry]
            }));
            this.setState(prevState => ({total: prevState.total - entry.money}));

        }
        this.setState({showingModal: false});
        
        
    }
    deleteEntryHandler = () => {
        const entries = this.state.entries;
        let moneyTotal = this.state.total;
        const updatedEntries = entries.filter(entry => {
            if (entry.id === this.state.entryForDeletionId) {
                moneyTotal = moneyTotal + parseInt(entry.money);
            }
            return entry.id !== this.state.entryForDeletionId}
        );
        this.setState({entries: updatedEntries, total: moneyTotal, showingModal: false, entryForDeletionId: null});
    }


    onDeleteEntry = (id) => {
        this.setState({showingModal: true, entryForDeletionId: id});
    }

    closeModalHandler = () => {
        this.setState({showingModal: false, entryForDeletionId: null, editedEntry: null});
    }

    onEditEntry = (id) => {
        for (let entry of this.state.entries) {
            if (entry.id == id) {
                this.setState({editedEntry: entry});
                break;
            }
        }
        this.setState({showingModal: true});
    }
    

    render () {
        const deleteMenu = (
            <div>
                <h1>Delete this entry?</h1>
                <h2 className={classes.Confirm} onClick={this.deleteEntryHandler}>Yes</h2>
                <h2 className={classes.Cancel} onClick={this.closeModalHandler}>No</h2>
            </div>
        );
        return (
            <Aux>
                <MoneyDisplay totalMoney={this.state.total}/>
                <div className={classes.AddButtonContainer}><button className={classes.AddButton} onClick={this.addEntryHandler}>ADD</button></div>
                <DiaryEntries entries={this.state.entries} onDeleteEntry={this.onDeleteEntry} onEditEntry={this.onEditEntry}/>
                <Modal show={this.state.showingModal} modalClosed={this.closeModalHandler}>
                    {this.state.showingModal && !this.state.entryForDeletionId ? <AddEntry onAddEntry={this.onAddEntry} editEntry={this.state.editedEntry}/> : null}
                    {this.state.showingModal && this.state.entryForDeletionId ? deleteMenu : null}
                </Modal>
            </Aux>
        );
    }

}

export default Diary;