import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Item, Label, Image, Button, Divider, Grid, Icon, Container } from 'semantic-ui-react';
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
    <Container>
      <Grid padded relaxed>
        <Grid.Row>
          <Button basic color='blue' as={NavLink} to='/portfolio'><Icon name='arrow left' />Portfolio</Button>
        </Grid.Row>
      <Container text>
        <Grid.Row>
        <Item.Group relaxed='very'>
          <Item>
            {this.state.project.thumbnailUrl &&
            <Item.Image size='small' wrapped src={this.state.project.thumbnailUrl} />
            }
            <Item.Content>
              <Item.Header>
                {this.state.project.name}
              </Item.Header>
              <Item.Meta>
                <a target='_blank' href={this.state.project.githubUrl}><Button basic color='teal'>GitHub Repository</Button></a>
                {this.state.project.projectUrl &&
                <a target='_blank' href={this.state.project.projectUrl}><Button basic color='orange'>View App</Button></a>
                }
              </Item.Meta>
              <Item.Description>
              {this.state.project.description}
              </Item.Description>
            </Item.Content>
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
                  <Label size='large' key={index}>{technology}</Label>
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
          {this.state.project.screenshots.length > 0 &&
          <Item>
            <Item.Content>
              <Item.Header>
                Screenshots
              </Item.Header>
              {this.state.project.screenshots.length > 0 && 
              <Image.Group size='large'>
                {this.state.project.screenshots.map((imgSrc, index) => (
                <Image src={imgSrc} key={index} />
                ))}
              </Image.Group>
              }
            </Item.Content>
          </Item>
          }
          </Item.Group>
        </Grid.Row>
        </Container>
      </Grid>
    </Container>
    )
  }
}

export default Project;