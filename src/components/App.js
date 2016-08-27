/**
 * Created by Yitzh on 8/21/2016.
 */
import React from 'react';
import  Sidebar from './Sidebar';
import {connect} from 'react-redux';

// the <deckId> param is taken from the router(see app.js)
const mapStateToProps = (props, {params:{deckId}}) => ({
    deckId
});

// pure build component function
const App = ({deckId, children}) => {
    return (<div className="app">
        <Sidebar />
        {children}
        <h3>deckId: {deckId}</h3>
    </div>)
};

export default connect(mapStateToProps)(App);