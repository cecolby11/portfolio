// Dependencies
import React, { Component } from 'react';
import { Nav, Link, NavLink } from 'react-router-dom';
import { Menu, Icon, Button, Segment, Dropdown, Responsive } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

// export navbar 
class Navbar extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted pointing id="main-nav">
          <Menu.Menu id='nav-pagination'>
            <Menu.Item name="About" as={NavLink} to="/" exact color='teal'/>
            <Menu.Item name="Portfolio" as={NavLink} to="/portfolio" color='teal'/>
            {/*<Menu.Item name="Blog" as={NavLink} to="/blog" />*/}
            <Menu.Item name="Resume" as={NavLink} to="/resume" color='teal' />
            <MediaQuery maxWidth={768}>
              <Dropdown item text='Contact' id="nav-contact-mobile">
                <Dropdown.Menu>
                  <Dropdown.Item name='github' target="_blank" href="https://github.com/cecolby11"><Icon size='large' fitted name='github alternate' color='teal'/> GitHub</Dropdown.Item>
                  <Dropdown.Item name='linkedin' target="_blank" href="https://www.linkedin.com/in/caseycolby" className="linkedin"><Icon fitted name='linkedin' size='large' color='teal' /> LinkedIn</Dropdown.Item>
                  <Dropdown.Item name='mail' href="mailto:casey.colby@northwestern.edu?Subject=Inquiry%20via%20CaseyColby.com" target="_top"><Icon size='large' fitted name='mail' color='teal' /> Email</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </MediaQuery>
          </Menu.Menu>
          <MediaQuery minWidth={768}>
            <Menu.Menu id='nav-contact-desktop' position="right">
              <Menu.Item name='github' target="_blank" href="https://github.com/cecolby11"><Icon size='large' fitted name='github alternate' color='teal'/></Menu.Item>
              <Menu.Item name='linkedin' target="_blank" href="https://www.linkedin.com/in/caseycolby" className="linkedin"><Icon fitted name='linkedin' size='large' color='teal' /></Menu.Item>
              <Menu.Item name='mail' href="mailto:casey.colby@northwestern.edu?Subject=Inquiry%20via%20CaseyColby.com" target="_top"><Icon size='large' fitted name='mail' color='teal' /></Menu.Item>
              <Menu.Item>
                <Button basic animated='vertical' color='teal' className='resume-download' id='resume-download'>
                  <Button.Content visible>resume.pdf</Button.Content>
                  <Button.Content hidden>
                    <a href="/assets/Casey_Colby_Resume.pdf" download="Casey_Colby_Resume.pdf"><Icon color='teal' size="large" name="download"/></a>
                  </Button.Content>
                </Button>
              </Menu.Item>
            </Menu.Menu>
          </MediaQuery>
        </Menu>
      </Segment> 
    );
  }
}

export default Navbar;