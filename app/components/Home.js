import React, { Component } from 'react';
import { Link } from 'react-router';
import { Grid, Image, Header, Icon } from 'semantic-ui-react';

class Home extends Component { 
  render() {
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column className='headshot-container'>
            <Image id='headshot' src='/assets/img/Colby.jpg' />
          </Grid.Column>
          <Grid.Column>
            <Header size='big' textAlign='center'>Casey Colby</Header>
            <Header size='medium' textAlign='center'>Web developer with an affinity for linguistics</Header>
            <Grid>
              <Grid.Row>
                <a target="_blank" href="https://github.com/cecolby11" class="github"><Icon name='github' size='big' color='black'/></a>
                <a target="_blank" href="https://www.linkedin.com/in/caseycolby" class="linkedin"><Icon name='linkedin' size='big' color='blue' /></a>
                <a target="_blank" href="https://twitter.com/cecolby11" class="twitter"><Icon name='twitter' size='big' color='blue' /></a>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                @home
                </Grid.Column>
                <Grid.Column width={12}>
                <p>Lab manager and software developer for Northwestern University&#39;s Child Language Development Lab, after receiving a B.A. in Economics and Linguistics from Northwestern University in 2015.</p>
                <p>Developing mobile applications to extend the Child Lab's experimental capabilities with children sparked my zeal for programming.</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                @school
                </Grid.Column>
                <Grid.Column width={12}>
                <p>Making the leap towards full time web development: Learning to learn and problem-solve in any language like a programmer, write good code, and develop web applications with JavaScript, HTML, CSS, and Node.js in Northwestern University&#39;s full-stack coding bootcamp.</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                @work
                </Grid.Column>
                <Grid.Column width={12}>
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