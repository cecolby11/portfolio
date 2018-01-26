import React, { Component } from 'react';
import { Header, Icon, Label, Grid, Card } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Moment from 'react-moment';

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
      <Card color='teal'>

        <Card.Content>
          <Card.Header>
              {!this.props.blog.icon &&
                <Icon name='laptop' circular />
              }
              {this.props.blog.icon &&
                <Icon name={this.props.blog.icon} circular/>
              }
              <Moment format='ddd MMM Do, YYYY'>{this.props.blog.date}</Moment>    
          </Card.Header>
          <Card.Meta>
            <Moment fromNow>{this.props.blog.date}</Moment>    
          </Card.Meta>
        </Card.Content>
        
        {this.props.blog.accomplishments.length > 0 &&
        <Card.Content>
        <ul>
            {this.props.blog.accomplishments.map((accomplishment, index) => (
                <li key={index}>{accomplishment}</li>
            ))}
        </ul>
        </Card.Content>
        }

        <Card.Content extra>
          <Card.Description>
            {this.props.blog.technologies.map((technology, index) => (
              <Label className='tech' tag size='small' key={index}>{technology}</Label>
            ))}
          </Card.Description>
        </Card.Content>

      </Card>
    )
  }
}

export default BlogPost;