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

store.subscribe(()=> {
    console.log(store.getState());
});

store.dispatch({        // sending store action
    type: 'ADD_CARD',
    data: {
        front: 'front',
        back: 'back'
    }
});

store.dispatch({
    type: 'ADD_CARD',
    data: {}
});