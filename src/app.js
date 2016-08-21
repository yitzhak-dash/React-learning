/**
 * State shape:
 * {
 *  cards: [{deckId: 123}],
 *  decks: []
 * }
 */

/**
 * ADD_DECK
 * SHOW_ADD_DECK
 * HIDE_ADD_DECK
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';

import {Provider} from 'react-redux';
import * as reducers  from './reducers';
import App from './components/App';
import  Sidebar from './components/Sidebar';

const store = createStore(combineReducers(reducers));

// creates component

function run() {
    let state = store.getState();
    console.log(state);
    ReactDOM.render((<Provider store={store}>
        <App>
            <Sidebar />
        </App>
    </Provider>), document.getElementById('root'));
}

run();

store.subscribe(run);