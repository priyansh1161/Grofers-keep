import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ListItem from '../components/ListItem';

import * as actions from '../actions/items';

import '../styles/listItem.css';

class MainTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
    };
  }
  componentWillReceiveProps({ items }) {
    if(this.state.items !== items)
      this.setState({ items });
  }
  render() {
    const { items } = this.state;
    if(!items.length)
      return null;
    const main = items.map((item, index) => {
      return (<ListItem item={item}
                        remove={this.props.actions.removeItem.bind(this, index)}
                        mark={this.props.actions.toggleMark.bind(this, index)}
                        key={index}
      />);
    });
    return (
      <div className="table-responsive">
        <table className="table">
          <thead>
          <tr>
            <th>Mark</th>
            <th>Quantity</th>
            <th>Product</th>
            <th>Remove</th>
          </tr>
          </thead>
          <tbody>{main}</tbody>
        </table>
      </div>
    );
  }
}

MainTable.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainTable);
