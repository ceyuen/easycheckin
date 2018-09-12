import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'

export default class Schedule extends Component {
  render() {
    return (
      <Table stackable striped>
        <Table.Body>
          {this.props.allRequests
            ? this.props.allRequests.map((element, key) => {
              return (
                <Table.Row key={key}>
                  <Table.Cell> time </Table.Cell>
                  <Table.Cell> date </Table.Cell>
                  <Table.Cell> depature <Icon name="plane" className="plane" /> arrival </Table.Cell>
                  <Table.Cell> Confirmation # {element.confirmationNumber} </Table.Cell>
                  <Table.Cell> {`${element.firstName} ${element.lastName}`} </Table.Cell>
                  <Table.Cell> <Icon name="check circle outline" color="green" /> status </Table.Cell>
                </Table.Row>
              )
            })
            : null
          }
          <Table.Row>
            <Table.Cell> 12/28/18 </Table.Cell>
            <Table.Cell> 5:00 PM </Table.Cell>
            <Table.Cell> FLL <Icon name="plane" className="plane" /> SEA </Table.Cell>
            <Table.Cell> Confirmation # BHQK728 </Table.Cell>
            <Table.Cell> Christina Yuen </Table.Cell>
            <Table.Cell> Check In Unavailable </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

