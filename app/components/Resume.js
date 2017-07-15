import React, { Component } from 'react';
import { Grid, Divider, Icon, Container } from 'semantic-ui-react';

class Resume extends Component { 
  constructor(props) {
    super(props);

  }

  render() {
    return (
    <Container>
      <Grid padded>
        <Grid.Row>
          <h2>Resume <a href="/assets/Casey_Colby_Resume.pdf" download="Casey_Colby_Resume.pdf"><Icon size="small" name="download"/></a></h2>
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