/**
 * Created by Yitzh on 8/21/2016.
 */
import React from 'react';
import  Sidebar from './Sidebar';


// pure build component function
const App = ({children}) => {
    return (<div className="app">
        <Sidebar />
        {children}
    </div>)
};

export default  App;