// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

// export navbar 
const Navbar = () => (
  <Menu>
    <Menu.Menu position="right">
      <Menu.Item name="Home" as={NavLink} to="/" />
      <Menu.Item name="Portfolio" as={NavLink} to="/portfolio" />
    </Menu.Menu>
  </Menu>
)

export default Navbar;