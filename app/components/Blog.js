import React, { Component } from 'react';
import BlogPost from './Blog/BlogPost';
import { Grid, Card, Container } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Blog extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    apiCaller.getAllBlogs().then(function(data) {
      this.setState({blogs: data});
    }.bind(this));
  }

  render() {
    return (
    <Container className='blog'>
      <Grid padded>
        <Grid.Row>
          <Card.Group>
            {this.state.blogs.map((blog, index) => (
              <BlogPost blog={blog} key={blog._id} />
            ))}
          </Card.Group>
        </Grid.Row>
      </Grid>
    </Container>
    )
  }
}

export default Blog;