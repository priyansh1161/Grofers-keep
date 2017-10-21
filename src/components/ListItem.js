import React from 'react';
import PropTypes from 'prop-types';

import '../styles/listItem.css';


const ListItem = ({ item, mark, remove }) => {
  const { name, qty, marked, unit } = item;
  return (
    <tr>
      <td><input type="checkbox" onChange={mark} checked={marked}/></td>
      <td className={marked ? 'strike-through' : ''}>{qty} <strong>{unit}</strong></td>
      <td className={marked ? 'strike-through' : ''}>{name}</td>
      <td><button className="trash-btn" onClick={remove}><span className="glyphicon glyphicon-trash" /></button></td>
    </tr>
  );
};

ListItem.propTypes = {
  mark: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  item: PropTypes.shape({ name : PropTypes.string, qty: PropTypes.string, marked: PropTypes.bool }).isRequired,
};

export default ListItem;
