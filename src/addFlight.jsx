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
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      confirmationNumber: '',
      email: '',
      phoneNumber: ''
    }
  }

  componentWillMount() {
    this.setState({value: 'Christina Yuen'})
    //TODO: change to user info
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    this.setState({
      firstName: '',
      lastName: '',
      confirmationNumber: '',
      email: '',
      phoneNumber: ''
    })
    this.props.addNewRequest(this.state.firstName, this.state.lastName, this.state.confirmationNumber, this.state.email, this.state.phoneNumber);
  }

  renderNewPersonInfo = () => {
    if (this.state.value === 'Other') {
      return (
        <div>
          <Form.Group widths='equal'>
            <Form.Field 
              control={Input} 
              label='First Name' 
              placeholder='John' 
              name='firstName' 
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
            <Form.Field 
              control={Input} 
              label='Last Name' 
              placeholder='Smith' 
              name='lastName' 
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field 
              control={Input} 
              label='Email (Optional)' 
              placeholder='AnnaBanana@gmail.com' 
              name='email' 
              onChange={this.handleInputChange}
            />
            <Form.Field 
              control={Input} 
              label='Phone Number (Optional)' 
              placeholder='(123) 456-7890' 
              name='phoneNumber' 
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </div>
      )
    }
  }

  renderMessage = () => {
    if (this.props.addFlightError === false) {
      return (
        <Message positive>
          <Message.Header>You have successfully added a flight.</Message.Header>
          <p>
            Go to your <b>schedule</b> down below to see now.
          </p>
        </Message>
      )
    } else if (this.props.addFlightError === true) {
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
              <Form.Field required 
                control={Input} 
                label='Confirmation Number' 
                placeholder='ABCD1234' 
                name='confirmationNumber'
                onChange={this.handleInputChange}
              />
              <Form.Field required 
                control={Select} 
                label='Person' 
                options={options} 
                onChange={this.handleChange} 
                defaultValue={this.state.value}
              />
            </Form.Group>
            {this.renderNewPersonInfo()}
            {console.log('this.state: ', this.state)}
            <Form.Field control={Button} onClick={this.handleSubmit}>Submit</Form.Field>
          </Form>
            {this.renderMessage()}
        </div>
      </Container>
    )
  }
}