/**
 * Created by Yitzh on 8/21/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

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

export default  Sidebar;