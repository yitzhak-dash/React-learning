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

// action creator functions
const addDeck = name => ({type: 'ADD_DECK', data: name});
const showAddDeck = name => ({type: 'SHOW_ADD_DECK'});
const hideAddDeck = name => ({type: 'HIDE_ADD_DECK'});

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

const decks = (state, action)=> {
    switch (action.type) {
        case 'ADD_DECK':
            let newDeck = {name: action.data, id: +new Date};
            return state.concat([newDeck]);
        default:
            return state || [];
    }
};

const addingDeck = (state, action)=> {
    switch (action.type) {
        case "SHOW_ADD_DECK" :
            return true;
        case "HIDE_ADD_DECK":
            return false;
        default:
            return !!state; // (true -> true, false -> false, undefined -> false)
    }
};

const store = Redux.createStore(Redux.combineReducers({
    // instead ->   cards: cards
    cards,
    decks,
    addingDeck
}));

// pure build component function
const App = (props) => {
    return (<div className="app">
        {props.children}
    </div>)
};

// creates component
const Sidebar = React.createClass({
    // component lifecycle event
    componentDidUpdate(){
        var el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },
    render(){
        let props = this.props;
        return (<div className="sidebar">
            <button onClick={e => this.props.showAddDeck()}>add deck
            </button>
            <h2>All Decks</h2>
            <ul>
                {props.decks.map((deck, i)=>
                    <li key={i}>{deck.name}</li>
                )}
            </ul>
            {props.addingDeck && <input ref="add" onKeyPress={this.createDeck}/>}
        </div>);
    },
    createDeck(evt){
        if (evt.which !== 13) return;
        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }
});

function run() {
    let state = store.getState();
    console.log(state);
    ReactDOM.render(<App>
        <Sidebar
            decks={state.decks}
            addingDeck={state.addingDeck}
            addDeck={name => store.dispatch(addDeck(name))}
            showAddDeck={() => store.dispatch(showAddDeck())}
            hideAddDeck={() => store.dispatch(hideAddDeck())}
        />
    </App>, document.getElementById('root'));
}


run();

store.subscribe(run);