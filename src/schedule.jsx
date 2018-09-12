import React, { Component } from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import Upcoming from './upcoming.jsx';
import './App.css';

export default class Schedule extends Component {
  state = {value: "upcoming"}

  handleClick = (e, { value }) => this.setState({ value })

  renderContent = () => {
    if (this.state.value === "upcoming") {
      return (
      <Upcoming allRequests={this.props.allRequests}/>
      )
    }
  }

  render() {
    return (
      <Container className='container'>
      <Menu>
        <Menu.Item value="upcoming" onClick={this.handleClick}>
          <Icon name="arrow alternate circle up" />
          Upcoming
        </Menu.Item>
      </Menu>
      <div className="content">
        {this.renderContent()}
      </div>
    </Container>
    )
  }
}