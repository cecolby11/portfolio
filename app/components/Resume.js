import React, { Component } from 'react';
import { Grid, Divider, Icon, Container, Image } from 'semantic-ui-react';

class Resume extends Component { 
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <Container>
      <Grid padded>
        <Grid.Row>
          <a href="/assets/Casey_Colby_Resume.pdf" download="Casey_Colby_Resume.pdf"><Icon size="big" name="download"/></a>
        </Grid.Row>
        <Grid.Row>
        
          <embed id='resume-pdf' src="/assets/Casey_Colby_Resume.pdf" width="500" height="375" type='application/pdf' />
        </Grid.Row>
      </Grid>
    </Container>
    )
  }
}

export default Resume;