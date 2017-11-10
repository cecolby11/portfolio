import React, { Component } from 'react';
import BlogPost from './Blog/BlogPost';
import { Grid, Container, Button } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Blog extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      allBlogs: [],
      blogs: [],
      tags: ["rails", "css", "cascade", "all"]
    }
  }

  filterBlogs(event) {
    if (event.target.value === 'all') {
      this.setState({blogs: this.state.allBlogs})
    } else {
      var filteredBlogs = this.state.allBlogs;
      filteredBlogs = filteredBlogs.filter(function(blog){
      // exact match
      return blog.technologies.indexOf(event.target.value) !== -1;
      // substring
      return blog.technologies.includes(event.target.value) !== -1;
      });

      this.setState({blogs: filteredBlogs});
    }
  }

  componentDidMount() {
    apiCaller.getAllBlogs().then(function(data) {
      this.setState({
        blogs: data, 
        allBlogs: data
      });
    }.bind(this));
  }

  render() {
    return (
    <Container className='blog'>
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={4}>
            Filter By Technology
            {this.state.tags.map((technology, index) => (
              <Button basic value={technology} onClick={this.filterBlogs.bind(this)} size='small' key={index}>{technology}</Button>
              ))}
          </Grid.Column>
          <Grid.Column width={12}>
            <Grid centered divided='vertically' padded='vertically'>
              {this.state.blogs.map((blog, index) => (
                <Grid.Row key={blog._id}><BlogPost blog={blog} key={blog._id} /></Grid.Row>
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