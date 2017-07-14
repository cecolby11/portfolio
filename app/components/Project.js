import React, { Component } from 'react';
import { Grid, Segment, Item, Label, Image } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        technologies: []
      }
    }
  }

  componentWillMount() {
    // get data for project with that id from database
    const id = this.props.match.params.id;
    apiCaller.getProject(id).then(function(data) {
      this.setState({project: data});
    }.bind(this));
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Item>
            <Item.Image size='medium' src={this.state.project.thumbnailUrl} />
            <Item.Content>
              <Item.Header>
                {this.state.project.name}
              </Item.Header>
              <Item.Meta>
                Role: {this.state.project.role}
              </Item.Meta>
              <Item.Description>
                {this.state.project.description}
              </Item.Description>
              <Item.Extra>
                Technologies used:
                {this.state.project.technologies.map((technology, index) => (
                <Label size='large' key={index}>{technology}</Label>
                ))}
              </Item.Extra>
            </Item.Content>
          </Item>
        </Grid.Row>
        <Grid.Row>
          Buttons here
        </Grid.Row>
      </Grid>
    )
  }
}

export default Project;