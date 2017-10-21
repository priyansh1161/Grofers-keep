import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './itemsAction';

describe('Actions', () => {
  it('should create an Action to add item', () => {
    const name = 'Potato', qty = 2, unit = 'Kg';
    const actual = ActionCreators.addItem({ name, qty, unit });
    const expected = {
      type: ActionTypes.ADD_ITEM,
      name,
      qty,
      unit,
    };
    expect(actual).toEqual(expected);
  });
  it('should create an Action to remove item', () => {
    const id = 3;
    const actual = ActionCreators.removeItem(id);
    const expected = {
      type: ActionTypes.REMOVE_ITEM,
      id,
    };
    expect(actual).toEqual(expected);
  });
  it('should create an Action to toggle mark', () => {
    const id = 3;
    const actual = ActionCreators.toggleMark(id);
    const expected = {
      type: ActionTypes.TOGGLE_MARK,
      id,
    };
    expect(actual).toEqual(expected);
  });
});
