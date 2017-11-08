import React, { Component } from 'react';
import { Header, Icon, Label, Grid } from 'semantic-ui-react';
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
      <div className='blog-post'>
        <Header as='h2' icon textAlign='center'>
          {!this.props.blog.icon &&
            <Icon name='laptop' circular />
          }
          {this.props.blog.icon &&
            <Icon name={this.props.blog.icon} circular />
          }
          <Header.Content>
            <Moment format='ddd MMM Do, YYYY'>{this.props.blog.date}</Moment>
          </Header.Content>
        </Header>
        <Header as='h4' textAlign='center'>
          <Header.Content>
            <Moment fromNow>{this.props.blog.date}</Moment>
          </Header.Content>
        </Header>
        <Label.Group className='tech'>
          {this.props.blog.technologies.map((technology, index) => (
            <Label tag size='small' key={index}>{technology}</Label>
            ))}
        </Label.Group>
        {this.props.blog.accomplishments.length > 0 &&
          <div>
          {this.props.blog.accomplishments.map((accomplishment, index) => (
            <p key={index}>{accomplishment}</p>
          ))}
          </div>
        }
      </div>
    )
  }
}

export default BlogPost;