import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import _ from 'lodash'


class EventForm extends Component {
  defaults = {
    id: '', title: '', date: '', description: '', active: '',
  }
  state = { ...this.defaults }

  componentDidMount = () => this.loadEvent( this.props )
  componentWillReceiveProps = ( nextProps ) => this.loadEvent( nextProps )

  loadEvent = ( props ) => {
    const { eventId, events } = props
    if( eventId && events.length > 0 ){
      if( _.isNumber(eventId) ) {
        const event = events.find( e => e.id === eventId )
        this.setState({ ...event })
      } else if ( _.isBoolean ) {
        this.setState({ ...this.defaults })
      }
    }
  }

  handleSubmit = ( event ) => {}

  handleChange = ({target:{id,value}}) => this.setState({ [id]: value })

  handleStatusChange = ( event, data ) => {
    this.setState({ [data.id]: data.value })
  }

  handleDateChange = ( moment ) => {
    this.setState({ date: moment.utc() })
  }

  render() {
    const { id, title, date, description, active } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label='Title'
          id='title'
          value={title}
          placeholder='...'
          onChange={this.handleChange} />
        <Form.Input
          label='Description'
          id='description'
          value={description}
          placeholder='Short text...'
          onChange={this.handleChange} />
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Date</label>
            <DatePicker
              selected={date}
              onChange={this.handleDateChange}
              showTimeSelect
              timeIntervals={15}
              dateFormat="LLL"
              />
          </Form.Field>
          <Form.Select
            label='Status'
            id='active'
            value={active}
            options={[
              { key: 'active', text: 'Active', value: true },
              { key: 'inactive', text: 'Inactive', value: false },
            ]}
            onChange={this.handleStatusChange} />
        </Form.Group>
        <Segment basic clearing>
          <Button.Group size='mini' floated='right'>
            <Button type='submit'>
              { id ? 'Update' : 'Create' }
            </Button>
            <Button.Or />
            <Button
              disable={ id ? false : true }
              type='button'
              onClick={this.handleDelte}>
              Delete
            </Button>
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
    events: state.events.data,
  }
}

export default connect(mapStateToProps)(EventForm)
