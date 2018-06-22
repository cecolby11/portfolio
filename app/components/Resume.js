import React, { Component } from 'react';
import { Grid, Icon, Container, List, Button, Accordion } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Resume extends Component { 
  constructor(props) {
    super(props);

    this.state =  { 
      activeIndex: -1
    }
  }

  handleClick(e, titleProps) {
    const index = titleProps.index
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }


  render() {
    return (
    <Container>
      <Grid padded className="resume-container">
        <Accordion fluid>
          {/* -------- technical skill section -------- */}
          <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}><h2 className="accordion-title" ><Icon name='dropdown' />technical skills</h2></Accordion.Title>
          <Accordion.Content active={this.state.activeIndex === 0} className="accordion-panel">
            <List>
              <List.Item>
                strong: JavaScript, jQuery, R, React, Ruby on Rails, XSL, Node.js/Express, Semantic UI React, Git, Swift, HTML
              </List.Item>
              <List.Item>
              experienced: MySQL, Handlebars, MongoDB, Mongoose, Sequelize, Firebase, CSS
              </List.Item>
            </List>
          </Accordion.Content>

          {/* ------- projects section -------- */}
          <Accordion.Title active={this.state.activeIndex === 1} index={1} onClick={this.handleClick.bind(this)}><h2 className="accordion-title"><Icon name='dropdown' />applications developed</h2></Accordion.Title>
          <Accordion.Content active={this.state.activeIndex === 1} className="accordion-panel">
            {/* Green Charge */}
            <Grid.Row>
              <h4>Green Charge | <a className="resume-link" target="_blank" href="https://github.com/wilfriedbarth/Green-Charge">View Repository</a></h4>
            </Grid.Row>
            <Grid.Row>
              <ul>
                <li>MERN full-stack web app that charges IoT devices when the carbon footprint of the power grid is lowest.</li>
                <li>Served as React developer focused on React.js (rendering components, managing app state), React Router v4 (front-end routing), JWT and axios (authentication), React-Sparklines (data visualization), and Semantic UI (layout/style).</li>
              </ul>
            </Grid.Row>

            {/* WCC Medical App */}
            <Grid.Row>
              <h4>WCC Medical Chat App | <a className="resume-link" target="_blank" href="https://github.com/cecolby11/Medical-Chat">View Repository</a></h4>
            </Grid.Row>
            <Grid.Row>
              <ul>
                <li>Chat application enabling multilingual communication between doctors and patients via the Google Translate API. Users see their conversations in their language of choice.</li>
                <li>Served as back-end JavaScript developer focused on Firebase and Google Auth (authentication); Firebase Database, JavaScript, and jQuery (chat, multiple users); and Google Translate API (translation).</li>
              </ul>
            </Grid.Row>

            {/* Want to Buy Candy */}
            <Grid.Row>
              <h4>Want To Buy Candy | <a className="resume-link" target="_blank" href="https://github.com/cecolby11/ecommerce-app">View Repository</a></h4>
            </Grid.Row>
            <Grid.Row>
              <ul>
                <li>E-commerce web application enabling users to login, view products for sale (by category), add products to a shopping cart, checkout, and view order history.</li>
                <li>Served as back-end JavaScript developer focused on Node.js (server), Express.js (routing/api), express-handlebars (integrating handlebars with Express), express-session (adding session management to express), Passport.js (authentication), and the Stripe API (credit card processing).</li>
              </ul>
            </Grid.Row>
          </Accordion.Content>
        

          {/* -------- work experience -------- */}
          <Accordion.Title active={this.state.activeIndex === 2} index={2} onClick={this.handleClick.bind(this)}>
              <h2 className="accordion-title"><Icon name='dropdown' />professional experience</h2>
          </Accordion.Title>
          <Accordion.Content active={this.state.activeIndex === 2} className="accordion-panel">
            <List relaxed>
              {/* NIT */}
              <List.Item>
                <List.Content floated='right'>Present</List.Content>
                <List.Content>
                  <List.Header>IT Administrative Systems, Northwestern University</List.Header>
                  <List.Description>
                    <p><em>Developer Associate, Integration & Architecture</em></p>
                  </List.Description>
                </List.Content>
              </List.Item>

              {/* McCormick */}
              <List.Item>
                <List.Content floated='right'>2017-2018</List.Content>
                <List.Content>
                  <List.Header>McCormick School of Engineering, Northwestern University</List.Header>
                  <List.Description>
                    <p><em>Web Developer; Temporary</em></p>
                    <ul>
                      <li>Migrated department websites to a rebranded site structure in Cascade Server CMS; includes migrating content and building new webpages, page types, and XSLT stylesheets.</li>
                      <li>Implemented features/fixes on various production Rails apps. Developed a CRUD app in Ruby on Rails for internal users; designed and implemented relational schema in PostgreSQL database, optimized queries and indexes, designed UI in bootstrap and interactivity with jQuery, scripted integration testing with Rspec and Capybara and handled production deployments.</li>
                    </ul>
                  </List.Description>
                </List.Content>
              </List.Item>

              {/* IFM */}
              <List.Item>
                <List.Content floated='right'>2017</List.Content>
                <List.Content>
                  <List.Header>Intelligent Flying Machines, Inc.</List.Header>
                  <List.Description>
                    <em>Freelance Robotics Interface Developer</em>
                    <ul>
                      <li>Developed a browser-based front-end interface to visualize data from an automated robotics system.</li>
                      <li>Used at customer sites and during client demos with Fortune 500 companies.</li>
                      <li>JavaScript, jQuery, HTML, CSS, ROSlib [interface to robot]</li>
                    </ul>
                  </List.Description>
                </List.Content>
              </List.Item>

              {/* ChildLab */}
              <List.Item>
                 <List.Content floated='right'>2016-2017</List.Content>
                 <List.Content>
                  <List.Header>Child Language Development Lab, Northwestern University</List.Header>
                  <List.Description>
                    <em>Lab Manager & Software Developer</em>
                    <ul>
                      <li>Utilized Swift, Realm databases, iOS Physics Engine and UIDynamicAnimator, and Core Graphics to develop iOS applications to expand the Child Lab’s experimental capabilities with children.</li>
                      <li>Performed data analysis and visualization in R. Abstracted complex R analyses into packages with widespread compatibility; documentation with roxygen2.</li>
                      <li>Programmed experiments in JavaScript and JsPsych.</li>
                    </ul>
                  </List.Description>
                </List.Content>
                <List.Content floated='right'>2015-2016</List.Content>
                <List.Content>
                  <List.Description>
                    <em>Lab Manager</em>
                    <ul>
                      <li>Ran 22 studies investigating the language of events and quantification and analyzed preliminary data.</li>
                      <li>Member of the founding team; created all standard operating procedures and trained/managed all research staff.</li>
                    </ul>
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </Accordion.Content>

        {/* -------- education section -------- */}
          <Accordion.Title active={this.state.activeIndex === 3} index={3} onClick={this.handleClick.bind(this)}><h2 className="accordion-title"><Icon name='dropdown' />education</h2></Accordion.Title>
          <Accordion.Content active={this.state.activeIndex === 3} className="accordion-panel">
            <List verticalAlign='middle' relaxed>
              <List.Item>
                <List.Content floated='right'>2017</List.Content>
                <List.Content>
                  <strong>Northwestern University</strong>, Full-Stack Coding Bootcamp
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated='right'>2011-2015</List.Content>
                <List.Content>
                  <strong>Northwestern University</strong>, Weinberg College of Arts and Sciences<br/>Bachelor of Arts, <em>cum laude</em>, Economics and Linguistics, GPA: 3.74
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content>
                  Relevant Coursework: Fundamentals of Computer Programming I and II (C++, Racket), Intro to Computational Linguistics
                </List.Content>
              </List.Item>
            </List>
          </Accordion.Content>
        </Accordion>
      </Grid>
    </Container>
    )
  }
}

export default Resume;