import React from 'react';
import { shallow } from 'enzyme';

import AddItem from './AddItem';

describe('<AddItem />', () => {
  it('should handle form submit', () => {
    const addItem = jest.fn();
    const wrapper = shallow(<AddItem addItem={addItem} />);
    wrapper.find('#item-field').simulate('change', {target: {value: 'Potato'}});
    wrapper.find('#item-qty').simulate('change', {target: {value: 2}});
    wrapper.find('#item-unit').simulate('change', {target: {value: 'Kg'}});
    expect(addItem).not.toBeCalled();
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(addItem).toBeCalled();
  });
});
