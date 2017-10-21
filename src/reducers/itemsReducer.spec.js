import * as ActionTypes from '../constants/actionTypes';
import itemReducer from './itemsReducer';

describe('Reducers: itemReducer', () => {
  const initialState = [{
    name: 'Potato',
    qty: 5,
    unit: 'Kg',
    marked: false,
  }, {
    name: 'Chips',
    qty: 4,
    unit: 'pices',
    marked: true,
  },
  ];
  it('should handle ADD_ITEM', () => {
    const name = 'robot', qty = 1, unit = 'g';
    const action = {
      type: ActionTypes.ADD_ITEM,
      name,
      qty,
      unit,
    };
    const actual = itemReducer(initialState, action);
    const expected = JSON.parse(JSON.stringify(initialState));
    expected.push({ name, qty, unit, marked: false });
    expect(actual).toEqual(expected);
  });
  it('should handle REMOVE_ITEM', () => {
    const id = 1;
    const action = {
      type: ActionTypes.REMOVE_ITEM,
      id,
    };
    const actual = itemReducer(initialState, action);
    const expected = JSON.parse(JSON.stringify(initialState));
    expected.splice(id, 1);
    expect(actual).toEqual(expected);
  });
  it('should handle TOGGLE_MARK', () => {
    const id = 0;
    const action = {
      type: ActionTypes.TOGGLE_MARK,
      id,
    };
    const actual = itemReducer(initialState, action);
    const expected = JSON.parse(JSON.stringify(initialState));
    expected[id].marked = !expected[id].marked;
    expect(actual).toEqual(expected);
  });
});
