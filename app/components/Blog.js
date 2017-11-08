import React, { Component } from 'react';
import BlogPost from './Blog/BlogPost';
import { Grid, Container } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Blog extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      allBlogs: [],
      blogs: [],
      tags: ["rails", "css", "cascade"]
    }
  }

  filterBlogs(event) {
    var filteredBlogs = this.state.allBlogs;
    filteredBlogs = this.state.blogs.filter(function(blog){
    return blog.technologies.indexOf(event.target.value) !== -1;
    });

    this.setState({blogs: filteredBlogs});
  }

  componentDidMount() {
    apiCaller.getAllBlogs().then(function(data) {
      this.setState({blogs: data, allBlogs: data});
    }.bind(this));
  }

  render() {
    return (
    <Container className='blog'>
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={4}>
            Filter By Technology
            {this.state.tags.map((tag, index) => (
              <button onClick={this.filterBlogs.bind(this)} value={tag} key={index}>{tag}</button>
            ))}
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