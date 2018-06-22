import React, { Component } from 'react';
import { Grid, Image, Icon, Container } from 'semantic-ui-react';

class About extends Component { 
  render() {
    return (
      <Grid stackable className='home'>
        <Grid.Row columns={2} className='headshot-row'>
          <Grid.Column className='headshot-container' computer={8} tablet={16}>
            <Image id='headshot' src='/assets/img/Colby.jpg' />
          </Grid.Column>
          <Grid.Column className='about-col' computer={8} tablet={16}>
            <h3 className="name">Casey Colby</h3>
            <h4 className='title'>Web developer with an affinity for linguistics</h4>

            <Grid relaxed>
              <Grid.Row className='about-text'>
                <Grid.Column computer={3} tablet={16}>
                  <h4>@work</h4>
                </Grid.Column>
                <Grid.Column computer={13} tablet={16}>
                  <p>Developer Associate on the Integration & Architecture team, Northwestern University IT Administrative Systems</p>
                  <p>Previously web developer at Northwestern University&#39;s McCormick School of Engineering (temporary).</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className='about-text'>
                <Grid.Column computer={3} tablet={16}>
                  <h4>@school</h4>
                </Grid.Column>
                <Grid.Column computer={13} tablet={16}>
                  <p>Learned to learn and problem-solve in any language like a programmer, write good code, and develop MERN stack web applications in Northwestern University&#39;s full-stack coding bootcamp, after receiving a B.A. in Economics and Linguistics from Northwestern University in 2015.</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row className='about-text'>
                <Grid.Column computer={3} tablet={16}>
                  <h4>@home</h4>
                </Grid.Column>
                <Grid.Column computer={13} tablet={16}>
                  <p>As a jazz/latin pianist and drummer, I love making music and exploring the Chicago Jazz Scene.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default About;