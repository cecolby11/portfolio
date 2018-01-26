import React, { Component } from 'react';
import BlogPost from './Blog/BlogPost';
import { Grid, Container, Button, Card, List } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Blog extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      allBlogs: [],
      blogs: [],
      filterTitle: '',
      tags: ["rails", "css", "cascade", "all"]
    }
  }

  filterBlogs(event) {
    if (event.currentTarget.textContent === 'all') {
      this.setState({
        blogs: this.state.allBlogs,
        filterTitle: ''
      });
    } else {
      var filteredBlogs = this.state.allBlogs;
      // filter exact matches
      filteredBlogs = filteredBlogs.filter(function(blog){
        // return indices of substrings/matches
        for (var i = 0; i < blog.technologies.length; i++) {
          if (blog.technologies[i].includes(event.currentTarget.textContent)) {
            return i;
          }
        }
      });

      this.setState({
        blogs: filteredBlogs,
        filterTitle: event.currentTarget.textContent
      });
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
          <div><h1>What I'm Working On</h1></div>
          {this.state.filterTitle &&
            <div id="filter-header"><h3> | {this.state.filterTitle}</h3></div>
            }
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            Filter By Technology
            <List selection verticalAlign='middle'>
            {this.state.tags.map((technology, index) => (
              <List.Item key = {index} onClick={this.filterBlogs.bind(this)}>
                <List.Content>
                  {technology}
                </List.Content>
              </List.Item>
              ))}
            </List> 
          </Grid.Column>
          <Grid.Column width={12}>
            <Card.Group>
               {this.state.blogs.map((blog, index) => (
                <BlogPost key={blog._id} blog={blog} />
              ))}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    )
  }
}

export default Blog;