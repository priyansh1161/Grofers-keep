import React from 'react';
import { shallow } from 'enzyme';

import ListItem from './ListItem';

describe('<ListItem />', () => {
  it('should render <ListItem /> properly', () => {
    const props = {
      item: {
        name: 'potato',
        qty: 2,
        unit: 'Kg',
        marked: false,
      },
      mark: () => { },
      remove: ( ) => { },
    };
    const wrapper = shallow(<ListItem {...props} />);
    const allListItems = wrapper.find('td');
    expect(wrapper.find('input[type="checkbox"]').length).toEqual(1);
    expect(allListItems.at(1).text()).toEqual(`${props.item.qty} ${props.item.unit}`);
    expect(allListItems.at(2).text()).toEqual(props.item.name);
  });
  it('should have class strike-through when marked', () => {
    const props = {
      item: {
        name: 'potato',
        qty: 2,
        unit: 'Kg',
        marked: true,
      },
      mark: () => { },
      remove: ( ) => { },
    };
    const wrapper = shallow(<ListItem {...props} />);
    const allListItems = wrapper.find('td');
    expect(allListItems.at(1).hasClass('strike-through')).toEqual(true);
    expect(allListItems.at(2).hasClass('strike-through')).toEqual(true);
  });
});
