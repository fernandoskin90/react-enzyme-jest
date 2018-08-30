import React from 'react';
import ReactDOM from 'react-dom';
import App, { Link } from '../App';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'

describe("<App /> shallow renderig", () => {
  it("should contain 1 p element", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find("h1").text()).toBe("Welcome to React");
  });
  it('matches the snapshots', () => {
    const tree = shallow(<App />)
    expect(toJson(tree)).toMatchSnapshot()
  });
  it('updates className with new state', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.blue').length).toBe(1);
    expect(wrapper.find(".red").length).toBe(0);
    // set state
    wrapper.setState({ mainColor: 'red'});
    expect(wrapper.find(".blue").length).toBe(0);
    expect(wrapper.find(".red").length).toBe(1);
  });
  it('on button click changes p text', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('!No');
    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('Yes!')
  });
  it('On input change, title change text', () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find('input');
    expect(wrapper.find('h2').text()).toBe('');
    input.simulate('change', { target: { value: 'Fernando' }});
    expect(wrapper.find('h2').text()).toBe('Fernando');
  });
});

describe('<Link />', () => {
  it('link component accepts addrss prop', () => {
    const wrapper = shallow(<Link address="www.google.com.co"/>);
    expect(wrapper.instance().props.address).toBe("www.google.com.co")
  });
  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address="www.google.com.co" />)
    expect(wrapper.props().href).toBe("www.google.com.co");
  });
  it('returns null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />);
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull()
  });
});

// test for lifecycle
describe("<App /> mount renderig", () => {
  it("should contain 1 p element", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("h1").text()).toBe("Welcome to React");
    wrapper.unmount()
  });
  it("matches the snapshots", () => {
    const tree = mount(<App />);
    expect(toJson(tree)).toMatchSnapshot();
    tree.unmount()
  });
});
