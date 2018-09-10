import React, { Component } from 'react';
import { Container, Icon, Menu, Message, Button, Form, Input, Select } from 'semantic-ui-react';
import './addFlight.css';
import './App.css';

const options = [
  { key: 'CY', text: 'Christina Yuen', value: 'Christina Yuen' },
  { key: 'PT', text: 'Phillip Tsui', value: 'Phillip Tsui' },
  { key: 'Other', text: 'Other', value: 'Other' }
]

export default class AddFlight extends Component {
  constructor(props) {
    super();
    this.state = {}
  }

  handleChange = (e, { value }) => this.setState({ value })

  renderNewPersonInfo = () => {
    if (this.state.value === 'Other') {
      return (
        <div>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='First Name' placeholder='John' />
            <Form.Field control={Input} label='Last Name' placeholder='Smith' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Email (Optional)' placeholder='AnnaBanana@gmail.com' />
            <Form.Field control={Input} label='Phone Number (Optional)' placeholder='(123) 456-7890' />
          </Form.Group>
        </div>
      )
    }
  }

  componentWillMount() {
    this.setState({value: 'Christina Yuen'})
    //TODO: change to user info
  }

  renderMessage = () => {
    if (this.props.addFlightError === true) {
      return (
        <Message positive>
          <Message.Header>You have successfully added a flight.</Message.Header>
          <p>
            Go to your <b>schedule</b> down below to see now.
          </p>
        </Message>
      )
    } else if (this.props.addFlightError === false) {
      return (
        <Message
          error
          header='There was some errors with your submission'>
          <p>Please try again.</p>
        </Message>
      )
    }
  }

  render() {
    return (
      <Container className='container'>
        <Menu>
          <Menu.Item>
            <Icon name="add" />
            Add a Flight
        </Menu.Item>
        </Menu>
        <div className="content">
          <Form>
            <Form.Group widths='equal'>
              <Form.Field required control={Input} label='Confirmation Number' placeholder='ABCD1234' />
              <Form.Field required 
                control={Select} 
                label='Person' 
                options={options} 
                onChange={this.handleChange} 
                defaultValue={this.state.value}
              />
            </Form.Group>
            {this.renderNewPersonInfo()}
            <Form.Field control={Button}>Submit</Form.Field>
          </Form>
            {this.renderMessage()}
        </div>
      </Container>
    )
  }
}