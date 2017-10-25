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
      <Card fluid className='blog-post'>
        <Card.Content>
          <Card.Header>{this.props.blog.date}</Card.Header>
          <Card.Meta>Today's Technologies and Tools</Card.Meta>
          <Card.Description>
            <Label.Group className='tech'>
              {this.props.blog.technologies.map((technology, index) => (
                <Label tag size='small' key={index}>{technology}</Label>
                ))}
            </Label.Group>
          </Card.Description>
        </Card.Content>
        {this.props.blog.accomplishments.length > 0 &&
        <Card.Content extra>
          {this.props.blog.accomplishments.map((accomplishment, index) => (
            <li key={index}>{accomplishment}</li>
          ))}
        </Card.Content>
        }
      </Card>
    )
  }
}

export default BlogPost;