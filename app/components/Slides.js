import React, { Component } from 'react';
import { Grid, Image, Icon, Container, Feed, Header, Label, Button } from 'semantic-ui-react';
import { Parallax } from 'react-parallax';
import apiCaller from './utils/api';
import BlogPost from './Blog/BlogPost';
import Moment from 'react-moment';

class Slides extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    }
  }
  componentDidMount() {
    apiCaller.getLatestBlogs(4).then(function(data) {
      this.setState({
        blogs: data
      });
    }.bind(this));
  }

  render() {
    return (
      <div className='slides'>
        <div className='slide slide-1'>
          <Parallax bgImage="assets/img/Colby.jpg" strength={400} height='100%'>
            <br/>
            <div className='container'>
              <div className='name'>CASEY COLBY</div>
              <div className='title'>Web Developer with an Affinity for Linguistics</div>
            </div>
          </Parallax>
        </div>
        <div className='slide slide-2'>
          <Grid stackable columns={3}>
            <Grid.Row columns={3}>
                <Grid.Column>
                  <h4>@work</h4>
                  <p>Web developer at Northwestern University&#39;s McCormick School of Engineering (temporary).</p>
                  <p>Previously lab manager and software developer for Northwestern University&#39;s Child Language Development Lab, after receiving a B.A. in Economics and Linguistics from Northwestern University in 2015.</p><br/>
                </Grid.Column>
                <Grid.Column>
                  <h4>@school</h4>
                  <p>Making the leap towards full time web development: Learned to learn and problem-solve in any language like a programmer, write good code, and develop MERN stack web applications in Northwestern University&#39;s full-stack coding bootcamp.</p><br/>
                </Grid.Column>
                <Grid.Column>
                  <h4>@home</h4>
                  <p>As a jazz/latin pianist and drummer, I love making music and exploring the Chicago Jazz Scene.</p><br/>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div className='slide slide-3'>
          <h3>What I'm Up To</h3>
          <Grid centered padded='vertically' columns={2}>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <Feed>
                  {this.state.blogs.map((blog, index) => (
                    <Feed.Event>
                      {!blog.icon &&
                        <Feed.Label icon='laptop' />
                      }
                      {blog.icon &&
                        <Feed.Label icon={blog.icon}/>
                      }
                      <Feed.Content>
                        <Feed.Summary>
                          {blog.accomplishments.length > 0 &&
                            <div>
                            {blog.accomplishments.map((accomplishment, index) => (
                              <p key={index}>{accomplishment}</p>
                            ))}
                            </div>
                          }
                          <Feed.Date><Moment fromNow>{blog.date}</Moment></Feed.Date>
                        </Feed.Summary>
                        <Feed.Meta>
                          <Label.Group className='tech'>
                            {blog.technologies.map((technology, index) => (
                              <Label tag size='small' key={index}>{technology}</Label>
                              ))}
                          </Label.Group>
                        </Feed.Meta>
                      </Feed.Content>
                    </Feed.Event>
                ))}
              </Feed>
              <Button content='Blog' icon='right arrow' labelPosition='right' />
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Slides;