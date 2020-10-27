import React, { Component } from 'react';

import classes from './AddEntry.css';
import Input from '../../UI/Input/Input';
import { updateObject, checkValidity } from '../../shared/utility';

class AddEntry extends Component {
    state = {
        form: {
            description: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Description'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            money: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Amount spent'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            category: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'entertainment', displayValue: 'Entertainment'},
                        {value: 'subscriptions', displayValue: 'Subscriptions'},
                        {value: 'nutrition&supplements', displayValue: 'Nutrition and Supplements'},
                        {value: 'shopping&investitions', displayValue: 'Shopping and Investitions'}
                    ]
                },
                value: 'entertainment',
                validation: {},
                valid: true
            },
        },
        formIsValid: false
    };

    componentDidMount() {
        if (this.props.editEntry) {
            const updatedForm = this.state.form;
            updatedForm.description.value = this.props.editEntry.description;
            updatedForm.description.valid = true;
            updatedForm.money.value = this.props.editEntry.money;
            updatedForm.money.valid = true;
            updatedForm.category.value = this.props.editEntry.category;
            this.setState({form: updatedForm});
        }
    }

    addHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.form) {
            formData[formElementIdentifier] = this.state.form[formElementIdentifier].value;
        }
        formData['id'] = this.props.editEntry ? this.props.editEntry.id : formData['description'];
        this.props.onAddEntry(formData);
    }

    

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElement = updateObject(this.state.form[inputIdentifier], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.form[inputIdentifier].validation),
            touched: true
        });
        const updatedForm = updateObject(this.state.form, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let identifier in updatedForm) {
            formIsValid = updatedForm[identifier].valid && formIsValid;
        }

        this.setState({form: updatedForm});
        this.setState({formIsValid: formIsValid});
    }
    

    render () {
        const formElementsArray = [];
        for (let key in this.state.form) {
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            });
        }
        let form = (
            <form onSubmit={this.addHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}/>     
                ))}
                <button className={classes.Button} disabled={!this.state.formIsValid}>Submit</button>
            </form>
        )
        return (
            <div className={classes.AddEntry}>
                <h2>{this.props.editEntry ? "Edit entry data" : "Add entry data"}</h2>
                {form}
            </div>
        );
    }

}

export default AddEntry;