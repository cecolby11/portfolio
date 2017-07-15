import React, { Component } from 'react';
import { Grid, Image, Icon, Container } from 'semantic-ui-react';

class Home extends Component { 
  render() {
    return (
      <Grid className='home'>
        <Grid.Row columns={2} className='headshot-row'>
          <Grid.Column className='headshot-container'>
            <Image id='headshot' src='/assets/img/Colby.jpg' />
          </Grid.Column>
          <Grid.Column className='about-col'>
            <h3 className="name">Casey Colby</h3>
            <h4 className='title'>Web developer with an affinity for linguistics</h4>
            <Grid relaxed>
              <Grid.Row>  
                <Container textAlign='center'>
                  <a target="_blank" href="https://github.com/cecolby11" className="github"><Icon name='github' size='large' color='black'/></a>
                  <a target="_blank" href="https://www.linkedin.com/in/caseycolby" className="linkedin"><Icon name='linkedin' size='large' color='blue' /></a>
                  <a target="_blank" href="https://twitter.com/cecolby11" className="twitter"><Icon name='twitter' size='large' color='blue' /></a>
                </Container>
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column width={3}>
                  <h4>@home</h4>
                </Grid.Column>
                <Grid.Column width={13}>
                  <p>Lab manager and software developer for Northwestern University&#39;s Child Language Development Lab, after receiving a B.A. in Economics and Linguistics from Northwestern University in 2015.</p>
                  <p>Developing mobile applications to extend the Child Lab's experimental capabilities with children sparked my zeal for programming.</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}>
                  <h4>@school</h4>
                </Grid.Column>
                <Grid.Column width={13}>
                  <p>Making the leap towards full time web development: Learning to learn and problem-solve in any language like a programmer, write good code, and develop web applications with JavaScript, HTML, CSS, and Node.js in Northwestern University&#39;s full-stack coding bootcamp.</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={3}>
                  <h4>@work</h4>
                </Grid.Column>
                <Grid.Column width={13}>
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

export default Home;