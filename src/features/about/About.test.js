import React from 'react';
import { shallow } from 'enzyme';
import  About from "./about";




it("should render About component without error", () => {
    const wrapper = shallow(<About/>);
    console.log(wrapper.debug())
    expect(wrapper.exists()).toBe(true);
});

it("should render message inside About component", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('p').text()).toEqual('Esto es un itinerario de aprendizaje Javascript.');
});