import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const HomeMainBody = ({ title, body }) => (
  <Segment basic>
    <Header as='h1'>{title}</Header>
    <p style={{ fontSize: '2rem' }}>
      { body }
    </p>
  </Segment>
)

export default HomeMainBody
