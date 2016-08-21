/**
 * Created by Yitzh on 8/21/2016.
 */
import React from 'react';

// pure build component function
const App = (props) => {
    return (<div className="app">
        {props.children}
    </div>)
};

export default  App;