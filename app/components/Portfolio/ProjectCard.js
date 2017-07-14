import React, { Component } from 'react';
import { Button, Card, Image, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      detailLink: null
    }
  }

  componentWillMount() {
    const id = this.props.id;
    this.setState({id: id});
    const detailLink = `/portfolio/${id}`;
    this.setState({detailLink: detailLink});
  }

  render() {
    return(
      <Card color={this.props.color}>
        <Card.Content>
          {this.props.thumbnail &&
          <Image floated='right' size='tiny' src={this.props.thumbnail} />
          }
          <Card.Header>
            {this.props.name}
          </Card.Header>
          <Card.Meta>
            {this.props.technologies.map((technology, index) => (
              <Label size='small' color='blue' key={index}>{technology}</Label>
              ))}
          </Card.Meta>
          <Card.Description>
            {this.props.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button as={NavLink} to={this.state.detailLink} basic color={this.props.color}>View Detailed</Button>
        </Card.Content>
      </Card>
    )
  }
}

export default ProjectCard;