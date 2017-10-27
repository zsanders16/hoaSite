import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button, Select } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import _ from 'lodash'

// Actions
import {
  updateEvent,
  addEvent,
  removeEvent,
} from '../../actions/events'


class EventForm extends Component {
  defaults = {
    id: '', title: '', date: '', description: '', active: '1',
  }
  state = { ...this.defaults }

  componentDidMount = () => this.loadEvent( this.props )
  componentWillReceiveProps = ( nextProps ) => this.loadEvent( nextProps )

  loadEvent = ( props ) => {
    const { eventId, events } = props
    if( eventId && events.length > 0 ){
      if( _.isNumber(eventId) ) {
        const event = events.find( e => e.id === eventId )
        let isActive = event.active === true ? '1' : '0'
        let incomingEvent = {
          title: event.title,
          date: event.date,
          description: event.description,
          active: isActive,
          id: event.id
        }
        this.setState({ ...incomingEvent })
      } else if ( _.isBoolean ) {
        this.setState({ ...this.defaults })
      }
    }
  }

  handleNewForm = () => this.setState({ ...this.defaults })
  handleDelete = () => {
    this.props.dispatch(removeEvent(this.state))
    this.props.closeFormModal()
  }

  handleSubmit = ( event ) => {
    let { id } = this.state
    event.preventDefault()
    const { dispatch } = this.props
    debugger
    if( _.isNumber(id) ) {
      let isActive = this.state.active === '1' ? true : false
      let updatedEvent = {
        id: this.state.id,
        title: this.state.title,
        date: this.state.date,
        description: this.state.description,
        active: isActive,
      }
      dispatch(updateEvent(updatedEvent))
    } else{
      let isActive = this.state.active === '1' ? true : false
      let newEvent = {
        title: this.state.title,
        date: this.state.date,
        description: this.state.description,
        active: isActive,
      }
      dispatch(addEvent(newEvent))
    }
    this.props.closeFormModal()
  }

  handleChange = ({target:{id,value}}) => this.setState({ [id]: value })

  handleStatusChange = ( event, data ) => {
    this.setState({ [data.id]: data.value })
  }

  handleDateChange = ( moment ) => {
    this.setState({ date: moment.format('LL') })
  }

  render() {
    const { id, title, date, description, active } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          required
          label='Title'
          id='title'
          value={title}
          placeholder='...'
          onChange={this.handleChange} />
        <Form.Input
          required
          label='Description'
          id='description'
          value={description}
          placeholder='Short text...'
          onChange={this.handleChange} />
        <Form.Group >
          <Form.Field width={12}>
            <label>Date</label>
            <DatePicker
              required
              value={date}
              selected={moment()}
              onChange={() => this.handleDateChange(moment())}
              dateFormat="LL"
              />
          </Form.Field>
          <Form.Field
            required
            width={4}
            label='Status'
            control={Select}
            id='active'
            value={active}
            options={[
              { key: 'active', text: 'Active', value: '1' },
              { key: 'inactive', text: 'Inactive', value: '0' },
            ]}
            onChange={this.handleStatusChange} />
        </Form.Group>
        <Segment basic clearing>
          <Button.Group size='mini' floated='right'>
            <Button primary type='submit'>
              { id ? 'Update' : 'Create' }
            </Button>
            <Button.Or />
            <Button
              primary
              type='button'
              onClick={this.handleNewForm}>
              Clear Form
            </Button>
          </Button.Group>
        </Segment>
      </Form>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    events: state.events.data,
  }
}

export default connect(mapStateToProps)(EventForm)
