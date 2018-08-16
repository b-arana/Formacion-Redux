import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import  Nombre from "./Nombre";



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should render appComponenet without error", () => {
    const wrapper = shallow(<Nombre/>);
    console.log(wrapper.debug())
    expect(wrapper.exists()).toBe(true);
});

it("should render welcome header with name", () => {
    const wrapper = shallow(<Nombre />);
    expect(wrapper.find('h1').text()).toEqual('Bienvenido al itinerario, ');
});