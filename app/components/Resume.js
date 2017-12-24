import React, { Component } from 'react';
import { Grid, Divider, Icon, Container, Image, List, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Resume extends Component { 
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <Container>
      <Grid padded>
        <Grid.Row>
          <a href="/assets/Casey_Colby_Resume.pdf" download="Casey_Colby_Resume.pdf">Download the PDF <Icon size="large" name="download"/></a>
        </Grid.Row>

        {/* -------- technical skill section -------- */}
        <Container className="resume-section">
          <Grid.Row>
            <h2>technical skills</h2>
          </Grid.Row>
          <List>
            <List.Item>
              strong: JavaScript, jQuery, R, React, Ruby on Rails, XSL, Node.js/Express, Semantic UI React, Git, Swift, HTML
            </List.Item>
            <List.Item>
            experienced: MySQL, Handlebars, MongoDB, Mongoose, Sequelize, Firebase, CSS
            </List.Item>
          </List>
        </Container>

        {/* ------- projects section -------- */}
        <Container className="resume-section"> 
          <Grid.Row>
            <h2>applications developed</h2>

          {/* Green Charge */}
          <Grid.Column>
            <h4>Green Charge | <a className="resume-link" target="_blank" href="https://github.com/wilfriedbarth/Green-Charge">View Repository</a></h4>
          </Grid.Column>
          <Grid.Column>
            <ul>
              <li>MERN full-stack web app that charges IoT devices when the carbon footprint of the power grid is lowest.</li>
              <li>Served as React developer focused on React.js (rendering components, managing app state), React Router v4 (front-end routing), JWT and axios (authentication), React-Sparklines (data visualization), and Semantic UI (layout/style).</li>
            </ul>
          </Grid.Column>

          {/* WCC Medical App */}
          <Grid.Column>
            <h4>WCC Medical Chat App | <a className="resume-link" target="_blank" href="https://github.com/cecolby11/Medical-Chat">View Repository</a></h4>
          </Grid.Column>
          <Grid.Column>
            <ul>
              <li>Chat application enabling multilingual communication between doctors and patients via the Google Translate API. Users see their conversations in their language of choice.</li>
              <li>Served as back-end JavaScript developer focused on Firebase and Google Auth (authentication); Firebase Database, JavaScript, and jQuery (chat, multiple users); and Google Translate API (translation).</li>
            </ul>
          </Grid.Column>
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
        </Container>

        {/* -------- work experience -------- */}
        <Container className="resume-section">
          <Grid.Row>
            <h2>professional experience</h2>
          </Grid.Row>
      
          <List relaxed>
            {/* McCormick */}
            <List.Item>
              <List.Content floated='right'>Present</List.Content>
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
        </Container>

        {/* -------- education section -------- */}
        <Container className="resume-section">
          <Grid.Row>
            <h2>education</h2>
          </Grid.Row>
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
        </Container>

      </Grid>
    </Container>
    )
  }
}

export default Resume;