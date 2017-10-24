import React, { Component } from 'react';
import { Card, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentWillMount() {
  }

  render() {
    return(
      <Card fluid>
        <Card.Content>
          <Card.Header>{this.props.blog.date}</Card.Header>
          <Card.Meta>Meta</Card.Meta>
          <Card.Description>Text Here</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label.Group>
            {this.props.blog.technologies.map((technology, index) => (
              <Label tag size='small' key={index}>{technology}</Label>
              ))}
          </Label.Group>
        </Card.Content>
      </Card>
    )
  }
}

export default BlogPost;