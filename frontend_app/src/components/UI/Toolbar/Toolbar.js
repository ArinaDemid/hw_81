import React from 'react';
import {NavLink as RouterNavLink} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';

const Toolbar = () => {

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand tag={RouterNavLink} to="/">Show Links</NavbarBrand>
    </Navbar>
  );
};

export default Toolbar;