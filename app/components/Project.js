import React, { Component } from 'react';
import { Item, Label, Image, Button, Divider, Grid } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {
        technologies: [],
        screenshots: []
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
        <Item.Group relaxed>
          <Item>
            <Item.Content>
              <Item.Header>
                {this.state.project.name}
              </Item.Header>
              <Item.Description>
              {this.state.project.description}
              </Item.Description>
            </Item.Content>
            <Item.Extra>
                <a target='_blank' href={this.state.project.githubUrl}><Button basic color='teal'>GitHub Repository</Button></a>
                <a target='_blank' href={this.state.project.projectUrl}><Button basic color='orange'>View App</Button></a>
            </Item.Extra>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header>Role</Item.Header>
              <Item.Meta>
                {this.state.project.role_short}
              </Item.Meta>
              <Item.Description>
                {this.state.project.role}
              </Item.Description>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header>
                Technologies
              </Item.Header>
              <Item.Description>
                <Label.Group>
                  {this.state.project.technologies.map((technology, index) => (
                  <Label size='large' key={index} tag>{technology}</Label>
                  ))}
                </Label.Group>
              </Item.Description>
            </Item.Content>
          </Item>
          {this.state.project.team &&
            <Item>
              <Item.Content>
                <Item.Header>
                  Team
                </Item.Header>
                <Item.Description>
                  {this.state.project.team}
                </Item.Description>
              </Item.Content>
            </Item>
          }
          <Item>
            <Item.Content>
              <Item.Header>
                Screenshots
              </Item.Header>
              {this.state.project.screenshots.map((imgSrc, index) => (
              <Image size='medium' src={imgSrc} key={index}/>
              ))}
            </Item.Content>
          </Item>

        </Item.Group>
      </Grid.Row>
      </Grid>
    )
  }
}

export default Project;