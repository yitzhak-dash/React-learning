/**
 * Created by Yitzh on 8/21/2016.
 */

export const cards = (state, action) => {
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

export const decks = (state, action)=> {
    switch (action.type) {
        case 'ADD_DECK':
            let newDeck = {name: action.data, id: +new Date};
            return state.concat([newDeck]);
        default:
            return state || [];
    }
};

export const addingDeck = (state, action)=> {
    switch (action.type) {
        case "SHOW_ADD_DECK" :
            return true;
        case "HIDE_ADD_DECK":
            return false;
        default:
            return !!state; // (true -> true, false -> false, undefined -> false)
    }
};