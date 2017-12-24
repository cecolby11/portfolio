// Dependencies
import React, { Component } from 'react';
import { Nav, Link, NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

// export navbar 
class Navbar extends Component {
  render() {
    return (
      <Menu>
        <Menu.Menu position="right">
          <Menu.Item name="Home" as={NavLink} to="/" exact/>
          <Menu.Item name="Portfolio" as={NavLink} to="/portfolio" />
          {/*<Menu.Item name="Blog" as={NavLink} to="/blog" />*/}
          <Menu.Item name="Resume" as={NavLink} to="/resume" />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;