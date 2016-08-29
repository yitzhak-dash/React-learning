/**
 * Created by Yitzh on 8/21/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {addDeck, showAddDeck, hideAddDeck} from '../actions'


const mapStateToProps = ({decks, addingDeck}) => ({
    decks,
    addingDeck
});

const mapDispatchToProps = (dispatch) =>({
    addDeck: (name) => dispatch(addDeck(name)), // using action creator
    showAddDeck: () => dispatch(showAddDeck()),
    hideAddDeck: () => dispatch(hideAddDeck())
});

const Sidebar = React.createClass({
    // component lifecycle event
    componentDidUpdate(){
        var el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },
    render(){
        let props = this.props;
        return (<div className="sidebar">
            <h2>All Decks</h2>
            <ul>
                {props.decks.map((deck, i)=>

                    <li key={i}>
                        <Link to={`/deck/${deck.id}`}> {deck.name} </Link>
                    </li>
                )}
            </ul>
            {props.addingDeck && <input ref="add" onKeyPress={this.createDeck}/>}
        </div>);
    },
    createDeck(evt){
        if (evt.which !== 13) return;// wait for ENTER
        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();
    }
});

export default  connect(mapStateToProps, mapDispatchToProps)(Sidebar);