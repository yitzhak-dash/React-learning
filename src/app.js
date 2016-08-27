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
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import * as reducers  from './reducers';
reducers.routing = routerReducer;
import App from './components/App';
import VisibleCards from "./components/VisibleCards";
import * as localStore from "./localStore";

const store = createStore(combineReducers(reducers), localStore.get());
const history = syncHistoryWithStore(browserHistory, store);
// creates component


function run() {
    let state = store.getState();
    localStore.set(state, ['decks', 'cards']);
    console.log(state);
    ReactDOM.render((<Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <Route path='/deck/:deckId' component={VisibleCards}/>
            </Route>
        </Router>
    </Provider>), document.getElementById('root'));
}

run();

store.subscribe(run);