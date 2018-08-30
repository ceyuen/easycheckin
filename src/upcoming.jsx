import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const upcoming = () => (
  <Table stackable striped>
    <Table.Body>
      <Table.Row>
        <Table.Cell> 12/22/18 </Table.Cell>
        <Table.Cell> 12:00 PM </Table.Cell>
        <Table.Cell> SJC <Icon name="plane" className="plane"/> FLL </Table.Cell>
        <Table.Cell> Confirmation # WEBY472 </Table.Cell>
        <Table.Cell> Christina Yuen </Table.Cell>
        <Table.Cell> <Icon name="check circle outline" color="green" /> Checked In </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 12/22/18 </Table.Cell>
        <Table.Cell> 12:00 PM </Table.Cell>
        <Table.Cell> SJC <Icon name="plane" className="plane"/> FLL </Table.Cell>
        <Table.Cell> Confirmation # UER2472 </Table.Cell>
        <Table.Cell> Phillip Tsui </Table.Cell>
        <Table.Cell> <Icon name="exclamation circle" color="red" /> Error. Please check in manually. </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell> 12/28/18 </Table.Cell>
        <Table.Cell> 5:00 PM </Table.Cell>
        <Table.Cell> FLL <Icon name="plane"className="plane"/> SEA </Table.Cell>
        <Table.Cell> Confirmation # BHQK728 </Table.Cell>
        <Table.Cell> Christina Yuen </Table.Cell>
        <Table.Cell> Check In Unavailable </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default upcoming