import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button } from 'semantic-ui-react'

// Actions
import {
  createLink,
} from '../../actions/links'

class NewLinkForm extends Component {
  defaults = { title: '', link: '', category: '', active: 1 }
  state = { ...this.defaults }

  handleOnChange = ({target: {id,value}}) => this.setState({ [id]: value })

  handleOnSubmit = ( event ) => {
    event.preventDefault()
    const { dispatch } = this.props
    dispatch(createLink(this.state))
    this.props.handleOnClose()
  }

  render = () => {
    const { title, link, category, active } = this.state
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Input
          label='Title'
          id='title'
          value={title}
          onChange={this.handleOnChange} />
        <Form.Input
          label='Link'
          id='link'
          value={link}
          onChange={this.handleOnChange} />
        <Form.Input
          label='Category'
          id='category'
          value={category}
          onChange={this.handleOnChange} />
        <Form.Field
          control='select'
          label='Status'
          id='active'
          value={active}
          onChange={this.handleOnChange}>
          <option value={1}>Active</option>
          <option value={0}>Inactive</option>
        </Form.Field>
        <Segment basic>
          <Button
            color='blue'
            type='submit'
            onClick={this.handleOnSubmit}>
            Create
          </Button>
        </Segment>
      </Form>
    )
  }
}

export default connect()(NewLinkForm)
