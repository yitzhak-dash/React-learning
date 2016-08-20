/**
 * State shape:
 * {
 *  cards: [{deckId: 123}],
 *  decks: []
 * }
 */

/**
 * Break reducer for each top level property(like cards)
 * @param state: cards parameter
 * @param action
 */
const cards = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, { // creates new object based on another one.
                score: 1,
                id: +new Date
            });
            return state.concat([newCard]);
        default:
            return state || [];
    }
};

const store = Redux.createStore(Redux.combineReducers({
    // instead ->   cards: cards
    cards
}));

const App = (props) => {
    return (<div className="app">
        {props.children}
    </div>)
};
ReactDOM.render(<App>Hello <strong>React</strong> </App>, document.getElementById('root'));
