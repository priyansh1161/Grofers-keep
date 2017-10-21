import cloneDeep from 'lodash/cloneDeep';
import initialState from './initialState';
import { ADD_ITEM, REMOVE_ITEM, TOGGLE_MARK } from '../constants/actionTypes';

export default function (state = initialState.items, action) {
  let newState;
  switch (action.type) {
    case ADD_ITEM:
      newState = cloneDeep(state); // Using deep cloning as Object.assign dose only shallow cloning
      newState.push({
        name: action.name,
        qty: action.qty,
        unit: action.unit,
        marked: false,
      });
      return newState;
    case REMOVE_ITEM:
      newState =  cloneDeep(state);
      newState.splice(action.id, 1);
      return newState;
    case TOGGLE_MARK:
      newState = cloneDeep(state);
      newState[action.id].marked = !newState[action.id].marked;
      return newState;
    default:
      return state;
  }
}
