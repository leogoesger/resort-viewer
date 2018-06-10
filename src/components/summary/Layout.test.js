import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Layout from './Layout';

describe('<Summary Layout />', () => {
  it('Render Layout', () => {
    const wrapper = shallow(<Layout resorts={[]} mapping={{}} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
