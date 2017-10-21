import React from 'react';
import { shallow } from 'enzyme';
import { HomePage } from './Home';
import AddItems from '../components/AddItem';

describe('<HomePage />', () => {
  it('should contain <AddItem /> when no items in list', () => {
    const actions = {
      addItem: () => { },
      removeItem: () => { },
      toggleMark: () => { },
    };
    const props = {
      isListEmpty: true,
    };
    const wrapper = shallow(<HomePage actions={actions} {...props} />);
    expect(wrapper.find(AddItems).length).toEqual(1);
  });

  it('should not contain <AddItem /> when no items in list', () => {
    const actions = {
      addItem: () => { },
      removeItem: () => { },
      toggleMark: () => { },
    };
    const props = {
      isListEmpty: false,
    };
    const wrapper = shallow(<HomePage actions={actions} {...props} />);

    expect(wrapper.find(AddItems).length).toEqual(0);
  });
});
