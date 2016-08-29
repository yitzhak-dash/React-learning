/**
 * Created by Yitzh on 8/21/2016.
 */
import React from 'react';
import  Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import {connect} from 'react-redux';

// the <deckId> param is taken from the router(see app.js)
const mapStateToProps = (props, {params:{deckId}}) => ({
    deckId
});

// pure build component function
const App = ({deckId, children}) => {
    return (<div className="app">
        <Toolbar deckId={deckId}/>
        <Sidebar />
        {children}
    </div>)
};

export default connect(mapStateToProps)(App);