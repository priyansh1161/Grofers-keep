import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/items';
import AddItem from './AddItem';
import ListItem from '../components/ListItem';

class HomePage extends React.Component {
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
    let main;
    if(!items.length) {
      main = <small className="text-muted"> Please Add items to get started</small>;
    } else {
      main = items.map((item, index) => {
        return <ListItem item={item}
                         remove={this.props.actions.removeItem.bind(this, index)}
                         mark={this.props.actions.toggleMark.bind(this, index)}
                         key={index}
        />;
      });
    }
    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">Grofer's Keep</h2>
          <h3 className="text-center text-muted"> [[Grosery List]] </h3>
        </div>
        <div className="row">
          <AddItem />
        </div>
        {main}
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
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


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
