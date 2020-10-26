import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../UI/Navigation/Toolbar/Toolbar';
import classes from './Layout.css';
import SideDrawer from '../../UI/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        sideDrawerIsVisible: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({sideDrawerIsVisible: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState(prevState =>  ({sideDrawerIsVisible: !prevState.sideDrawerIsVisible}));
    }

    

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.sideDrawerIsVisible}
                    closed={this.sideDrawerClosedHandler}/>
           
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }

};

export default Layout;