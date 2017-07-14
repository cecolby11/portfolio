import React, { Component } from 'react';
import ProjectCard from './Portfolio/ProjectCard';
import { Card } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Portfolio extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  componentDidMount() {
    apiCaller.getAllProjects().then(function(data) {
      this.setState({data: data});
      console.log(this.state.data);
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Applications Developed</h1>
        <Card.Group itemsPerRow={2}>
          {this.state.data.map((project) => (
            <ProjectCard key={project._id} id={project._id} name={project.name} technologies={project.technologies} description={project.description} color='blue' />
          ))}
        </Card.Group>
      </div>
    )
  }
}

export default Portfolio;