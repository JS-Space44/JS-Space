import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import { Switch, Route} from 'react-router';


const MainContainer = props => {
    <div className='mainContainer'>
        <Switch>
            <Route exact path='/signUp' component={SignUpContainer}/>
        </Switch>


    </div>
}