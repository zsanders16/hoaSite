import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const HomeMainBody = ({ title, body }) => (
  <Segment basic>
    <Header as='h1' textAlign='center'>{title}</Header>
    { body.split('\n').map( (paragraph, i) => {
      return (
        <p key={i} style={{ fontSize: '1.5rem' }}>{paragraph}</p>
      )})
    }
  </Segment>
)

export default HomeMainBody
