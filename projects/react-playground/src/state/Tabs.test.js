import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

/* now showing all the content of the file */

it('renders empty given no tabs', () => {
  const wrapper = shallow(<Tabs />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

describe('Tabs Component', () => {
    it('renders without errors', () => {
        const tabsProp = [
            { name: 'First tab',
              content: 'this is the first tab'},
            { name: 'Second tab',
              content: 'this is the second tab'},
            { name: 'Third tab',
              content: 'this is the third tab'},
          ];
        })
        it('renders without errors', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Tabs />, div);
            ReactDOM.unmountComponentAtNode(div);
        })
        it('renders empty given no tabs', () => {
            const wrapper = shallow(<Tabs />)
            expect(toJson(wrapper)).toMatchSnapshot()
          })
          it('renders the first tab by default', () => {
              const tree= renderer.create(<Tabs tabs= {tabsProp} />).toJSON()
              expect(tree).toMatchSnapshot()
        })
        it('closes the first tab and opens any clicked tab', () => {
            const wrapper = shallow(<Tabs tabs={tabsProp} />)
            wrapper.find('button').at(1).simulate('click')
            expect(toJson(wrapper)).toMatchSnapshot()
          })
    })