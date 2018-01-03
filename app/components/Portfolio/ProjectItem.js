import React, { Component } from 'react';
import { Button, Item, Image, Label, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class ProjectItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      detailLink: null
    }
  }

  componentWillMount() {
    const id = this.props.project._id;
    this.setState({id: id});
    const detailLink = `/portfolio/${id}`;
    this.setState({detailLink: detailLink});
  }

  render() {
    return(
      <Item>
         {this.props.project.thumbnailUrl &&
         <Item.Image size='tiny' src={this.props.project.thumbnailUrl} />
         }
        <Item.Content>
          <Item.Header>
            {this.props.project.name}
          </Item.Header>
          <Item.Meta>
            {this.props.project.role_short}
          </Item.Meta>
          <Item.Description>
            {this.props.project.description}
          </Item.Description>
          <Item.Extra>
            <Label.Group>
              {this.props.project.technologies.map((technology, index) => (
                <Label tag size='small' color={this.props.color} key={index}>{technology}</Label>
                ))}
            </Label.Group>
          </Item.Extra>
          <Item.Extra>
            <Button floated='right' as={NavLink} to={this.state.detailLink} basic>View Details <Icon circular inverted name='arrow right' color='teal' /></Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }
}

export default ProjectItem;