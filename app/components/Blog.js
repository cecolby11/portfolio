import React, { Component } from 'react';
import BlogPost from './Blog/BlogPost';
import { Grid, Container } from 'semantic-ui-react';
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
          <Grid.Column width={4}>
            sidebar
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid centered divided='vertically' padded='vertically'>
              {this.state.blogs.map((blog, index) => (
                <Grid.Row><BlogPost blog={blog} key={blog._id} /></Grid.Row>
              ))}
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    )
  }
}

export default Blog;