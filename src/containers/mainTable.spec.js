import React from 'react';
import { shallow } from 'enzyme';
import { MainTable } from './MainTable';
import ListItem from '../components/ListItem';

describe('<MainTable />', () => {
  it('should contain exactly 2 <ListItem />', () => {
    const actions = {
      addItem: () => { },
      removeItem: () => { },
      toggleMark: () => { },
    };
    const props = {
      items: [{
        name: 'Eraser',
        qty: 1,
        unit: 'Unit'
      }, {
        name: 'Chips',
        qty: 14,
        unit: 'Unit',
      }
      ],
    };
    const wrapper = shallow(<MainTable actions={actions} {...props} />);
    expect(wrapper.find(ListItem).length).toEqual(2);
  });

});
