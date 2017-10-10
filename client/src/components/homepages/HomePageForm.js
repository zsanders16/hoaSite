import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button } from 'semantic-ui-react'
import _ from 'lodash'
import FileBase64 from 'react-file-base64'

import {
  updateHomePage,
  createHomePage,
  deleteHomePage,
} from '../../actions/homepages'

import {
  reloadHomepage,
} from '../../actions/homepage'

class HomePageForm extends Component {
  defaults = {
    id: '', title: '', body: '',
    active: '', attachment: '', attachment_name: '',
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
    const { id, active } = this.state
    if( id ) {
      dispatch(updateHomePage(this.state))
    } else {
      dispatch(createHomePage(this.state))
    }
    if( active ) {
      dispatch(reloadHomepage())
    }
    closeFormModal()
  }

  handleDelete = () => {
    const { dispatch, closeFormModal } = this.props
    dispatch(deleteHomePage(this.state.id))
    closeFormModal()
  }

  handleSelectChange = ( event, data ) => {
    this.setState({ [data.id]: data.value })
  }

  handleFileSelect = ( file ) => {
      this.setState({
        attachment: file.base64,
        attachment_name: file.name
      })
  }


  render() {
    const { id, title, body, active, attachment_name } = this.state
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
        <Form.Select
          label='Status'
          id='active'
          value={active}
          options={[
            { key: 'active', text: 'Active', value: 1 },
            { key: 'inactive', text: 'Inactive', value: 0 },
          ]}
          onChange={this.handleSelectChange} />
        <Form.Field>
          <label>Current File:&nbsp;{attachment_name}</label>
          <FileBase64
            multiple={false}
            onDone={this.handleFileSelect} />
        </Form.Field>
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
