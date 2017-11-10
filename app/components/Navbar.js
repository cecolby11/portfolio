// Dependencies
import React from 'react';
import { Nav, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

// export navbar 
const Navbar = () => (
  <Menu>
    <Menu.Menu position="right">
      <Menu.Item name="Home" as={NavLink} to="/" />
      {/*<Menu.Item name="Portfolio" as={NavLink} to="/portfolio" />*/}
      <Menu.Item name="Blog" as={NavLink} to="/blog" />
      {/*<Menu.Item name="Resume" as={NavLink} to="/resume" />*/}
    </Menu.Menu>
  </Menu>
)

export default Navbar;