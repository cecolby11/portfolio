// Dependencies
import React, { Component } from 'react';
import { Nav, Link, NavLink } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react';

// export navbar 
class Navbar extends Component {
  render() {
    return (
      <Menu secondary pointing>
        <Menu.Menu>
          <Menu.Item name='github' target="_blank" href="https://github.com/cecolby11"><Icon size='large' fitted name='github alternate' color='grey'/></Menu.Item>
          <Menu.Item name='linkedin' target="_blank" href="https://www.linkedin.com/in/caseycolby" className="linkedin"><Icon fitted name='linkedin' size='large' color='grey' /></Menu.Item>
          <Menu.Item name='mail' href="mailto:casey.colby@northwestern.edu?Subject=Inquiry%20via%20CaseyColby.com" target="_top"><Icon size='large' fitted name='mail' color='grey' /></Menu.Item>
          <Menu.Item>
            <Button basic animated='vertical' color='grey' className='resume-download'>
              <Button.Content visible>resume.pdf</Button.Content>
              <Button.Content hidden>
                <a href="/assets/Casey_Colby_Resume.pdf" download="Casey_Colby_Resume.pdf"><Icon color='grey' size="large" name="download"/></a>
              </Button.Content>
            </Button>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item name="About" as={NavLink} to="/" exact/>
          <Menu.Item name="Portfolio" as={NavLink} to="/portfolio" />
          {/*<Menu.Item name="Blog" as={NavLink} to="/blog" />*/}
          <Menu.Item name="Resume" as={NavLink} to="/resume" />
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;