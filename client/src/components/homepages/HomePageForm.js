import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button } from 'semantic-ui-react'
import _ from 'lodash'

import {
  updateHomePage,
  createHomePage,
  deleteHomePage,
} from '../../actions/homepages'

class HomePageForm extends Component {
  defaults = {
    id: '', title: '', body: '', image: ''
  }
  state = { ...this.defaults}

  componentDidMount = () => this.loadForm(this.props)
  componentWillReceiveProps = ( nextProps ) => this.loadForm(nextProps)

  loadForm = ( props ) => {
    const { homepages, homePageId } = this.props
    if( homepages && homePageId ) {
      if( _.isNumber(homePageId) ) {
        this.setState({ ...homepages.find( hp => hp.id === homePageId ) })
      } else if( _.isBoolean(homePageId) ) {
        this.setState({ ...this.defaults })
      }
    }
  }

  handleChange = ( {target: {id,value}} ) => this.setState({ [id]: value })
  handleNewForm = () => this.setState({ ...this.defaults })

  handleSubmit = ( event ) => {
    event.preventDefault()
    const { dispatch, closeFormModal } = this.props
    const { id } = this.state
    if( id ) {
      dispatch(updateHomePage(this.state))
    } else {
      dispatch(createHomePage(this.state))
    }
    closeFormModal()
  }

  handleDelete = () => {
    const { dispatch, closeFormModal } = this.props
    dispatch(deleteHomePage(this.state.id))
    closeFormModal()
  }

  render() {
    const { id, title, body } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='Title'
          id='title'
          value={title}
          onChange={this.handleChange} />
        <Form.TextArea
          label='Main Content'
          id='body'
          value={body}
          onChange={this.handleChange} />
        <Segment basic clearing>
          <Button.Group size='mini' floated='right'>
            <Button
              type='submit'>
              { id ? 'Update' : 'Create' }
            </Button>
            <Button.Or />
            <Button
              type='button'
              onClick={this.handleDelete}>
              Delete
            </Button>
            <Button.Or />
            <Button
              type='button'
              onClick={this.handleNewForm}>
              New Form
            </Button>
          </Button.Group>
        </Segment>
      </Form>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    homepages: state.homepages.data,
  }
}

export default connect(mapStateToProps)(HomePageForm)
