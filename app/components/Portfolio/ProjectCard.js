import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card color={this.props.color}>
        <Card.Content>
          <Image floated='right' size='mini' src='http://via.placeholder.com/300x300' />
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <Card.Meta>
            {this.props.technologies}
          </Card.Meta>
          <Card.Description>
            {this.props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color={this.props.color}>View Detailed</Button>
        </Card.Content>
      </Card>
    )
  }
}

export default ProjectCard;