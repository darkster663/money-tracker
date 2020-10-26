import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import classes from './Modal.css';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';


const modal = props => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={props.show ? classes.Modal + ' ' + classes.ModalOpen : classes.Modal + classes.ModalClosed}>
                {props.children}
        </div>
    </Aux>
);

export default modal;