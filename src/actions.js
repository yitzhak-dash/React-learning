/**
 * Created by Yitzh on 8/21/2016.
 */
// action creator functions
export const addDeck = name => ({type: 'ADD_DECK', data: name});
export const showAddDeck = name => ({type: 'SHOW_ADD_DECK'});
export const hideAddDeck = name => ({type: 'HIDE_ADD_DECK'});
