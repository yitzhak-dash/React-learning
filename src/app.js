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

// pure build component function
const App = (props) => {
    return (<div className="app">
        {props.children}
    </div>)
};

const Sidebar = React.createClass({
    render(){
        let props = this.props;
        return (<div className="sidebar">
            <h2>All Decks</h2>
            <ul>
                {props.decks.map((deck, i)=>
                    <li key={i}>{deck.name}</li>
                )}
            </ul>
            {props.addingDeck && <input ref="add" />}
        </div>);
    }
});

ReactDOM.render(<App>
    <Sidebar decks={[{name:'deck 1'}]} addingDeck={true} />
</App>, document.getElementById('root'));
