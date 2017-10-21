import { ADD_ITEM, REMOVE_ITEM, TOGGLE_MARK } from '../constants/actionTypes';

export const addItem = ({ name, qty, unit }) => {
  return {
    type: ADD_ITEM,
    name,
    qty,
    unit,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    id,
  };
};

export const toggleMark = (id) => {
  return {
    type: TOGGLE_MARK,
    id,
  };
};
