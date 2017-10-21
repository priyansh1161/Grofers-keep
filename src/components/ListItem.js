import React from 'react';
import Proptypes from 'prop-types';

const ListItem = ({ item, mark, remove }) => {
  const { name, qty, marked, unit } = item;
  return (
    <div className="row">
      <div className="col">
        <input type="checkbox" onChange={mark} checked={marked}/>
        {`${name} ${qty} ${unit}`}
      </div>
      <div className="pull-right">
        <button className="btn btn-danger" onClick={remove}>Remove</button>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  mark: Proptypes.func.isRequired,
  remove: Proptypes.func.isRequired,
  item: Proptypes.shape({ name : Proptypes.string, qty: Proptypes.string, marked: Proptypes.bool }).isRequired,
};

export default ListItem;
