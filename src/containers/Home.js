import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/itemsAction';
import AddItem from '../components/AddItem';
import MainTable from './MainTable';

import '../styles/main.css';

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isListEmpty: props.isListEmpty,
      addingMoreItems: false,
    };
    this.addItem = this.addItem.bind(this);
  }
  // So that we get add items as soon as there are no items in the list
  componentWillReceiveProps({ isListEmpty }) {
    if(this.state.isListEmpty !== isListEmpty)
      this.setState({ isListEmpty });
  }
  addItem({ name, qty, unit }) {
    this.props.actions.addItem({ name, qty, unit });
    this.setState({addingMoreItems: false});
  }
  render() {
    const { isListEmpty, addingMoreItems } = this.state;
    let showAddItems = addingMoreItems;
    if(isListEmpty) {
      showAddItems = true;
    }
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">Grofer's Keep</h2>
          <h5 className="text-center text-muted"> [[Grocery List]] </h5>
        </div>
        <div className="row">
          <MainTable />
        </div>
        <div className="row">
          {
            showAddItems ? <AddItem addItem={this.addItem}/> : <div className="add-more">
            <button
              onClick={() => this.setState({addingMoreItems: true})}
            >
              Add More Items...
            </button>
          </div>
          }
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  isListEmpty: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    isListEmpty: !state.items.length,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
