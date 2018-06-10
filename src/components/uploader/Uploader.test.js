import React from 'react';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme';
import Uploader from './Uploader';

describe('<Uploader />', () => {
  it('Render Uploader', () => {
    const wrapper = shallow(<Uploader onUpload={jest.fn()} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
