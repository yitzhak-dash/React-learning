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

import {addDeck, showAddDeck, hideAddDeck} from './actions'
import * as reducers  from './reducers';
import App from './components/App';
import  Sidebar from './components/Sidebar';

const store = createStore(combineReducers(reducers));

// creates component

function run() {
    let state = store.getState();
    console.log(state);
    ReactDOM.render(<App>
        <Sidebar
            decks={state.decks}
            addingDeck={state.addingDeck}
            addDeck={name => store.dispatch(addDeck(name))} // using action creator
            showAddDeck={() => store.dispatch(showAddDeck())}
            hideAddDeck={() => store.dispatch(hideAddDeck())}
        />
    </App>, document.getElementById('root'));
}

run();

store.subscribe(run);