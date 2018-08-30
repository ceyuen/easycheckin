import React, { Component } from 'react';
import { Container, Header, Icon, Menu } from 'semantic-ui-react';
import './addFlight.css';
import './App.css';

export default class AddFlight extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container className='container'>
      <Menu>
        <Menu.Item>
          <Icon name="add" />
          Add a Flight
        </Menu.Item>
      </Menu>
      <p className="content"> 
        Hello
      </p>
      </Container>
    )
  }
}