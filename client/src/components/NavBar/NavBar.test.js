import React from 'react';
import {NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Nav from './Navbar';

configure({adapter: new Adapter()});

describe('<Nav />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Nav />)
  })

  it('Deberia renderizar tres <NavLink/>', () => {
    expect(wrapper.find(NavLink)).toHaveLength(3);
  });
  it('El primer NavLink debe tener el texto "Home" y cambiar la ruta hacia "/Home".', () => {
    expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/Home');
    expect(wrapper.find(NavLink).at(0).text()).toEqual('Home');
  });
  it('El segundo NavLink debe tener el texto "Add Pokemon" y cambiar la ruta hacia "/Home/Add"', () => {
    expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/Home/Add');
    expect(wrapper.find(NavLink).at(1).text()).toEqual('Add Pokemon');
  });
  
})