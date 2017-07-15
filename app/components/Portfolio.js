import React, { Component } from 'react';
import ProjectItem from './Portfolio/ProjectItem';
import { Grid, Item, Divider, Container } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Portfolio extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      colors: ['violet', 'blue', 'red', 'orange', 'yellow', 'olive', 'green', 'teal',
  'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black']
    }
  }

  componentDidMount() {
    apiCaller.getAllProjects().then(function(data) {
      this.setState({data: data});
    }.bind(this));
  }

  render() {
    return (
    <Container>
      <Grid padded>
        <Divider hidden />
        <Grid.Row>
          <Item.Group divided relaxed>
            {this.state.data.map((project, index) => (
              <ProjectItem project={project} key={project._id} color={this.state.colors[index]} />
            ))}
          </Item.Group>
        </Grid.Row>
      </Grid>
    </Container>
    )
  }
}

export default Portfolio;