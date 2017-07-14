import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import apiCaller from './utils/api';

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: ''
    }
  }

  componentWillMount() {
    // get data for project with that id from database
    const id = this.props.match.params.id;
    apiCaller.getProject(id).then(function(data) {
      console.log(data);

    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>{this.state.project}</h1>
      </div>
    )
  }
}

export default Project;