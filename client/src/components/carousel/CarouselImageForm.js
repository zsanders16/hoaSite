import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Segment, Form, Button, Image } from 'semantic-ui-react'
import FileBase64 from 'react-file-base64'
import styled from 'styled-components'

// Actions
import {
  updateCarouselImage,
  createCarouselImage,
  deleteCarouselImage,
} from '../../actions/carousel'

// Styled Components
const Label = styled.div`
  display: inline-block;
  padding-right: 1rem;
  font-weight: bold;
  :after {
    content: ':'
  }
`


class CarouselImageForm extends Component {
  defaults = { id: '', filename: '', image: '', category: '', active: 1 }
  state = { ...this.defaults }

  componentDidMount = () => this.loadImage(this.props.activeImage)
  componentWillReceiveProps = ( props ) => this.loadImage(props.activeImage)
  loadImage = ( image ) => this.setState({ ...image })

  handleSubmit = ( event ) => {
    event.preventDefault()
    const { dispatch } = this.props
    const { id } = this.state
    if( id ) {
      dispatch(updateCarouselImage(this.state))
    } else {
      dispatch(createCarouselImage(this.state))
    }
    this.props.handleOnClose()
  }
  handleDelete = () => {
    const { id } = this.state
    const { dispatch } = this.props
    dispatch(deleteCarouselImage(id))
    this.props.handleOnClose()
  }
  handleNew = () => this.setState({ ...this.defaults })

  handleChange = ({target: {id,value}}) => this.setState({[id]: value})
  handleBase64File = ( file ) => {
    this.setState({ filename: file.name, image: file.base64 })
  }

  render = () => {
    const { id, filename, image, category, active } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            control='input'
            label='Category'
            id='category'
            value={category}
            onChange={this.handleChange} />
          <Form.Field
            control='select'
            label='Active'
            id='active'
            value={active}
            onChange={this.handleChange}>
            <option value={1}>Active</option>
            <option value={0}>Inactive</option>
          </Form.Field>
        </Form.Group>
        <Segment basic>
          <Label>File Name</Label>{filename}
          <br />
          <Image
            size='mini'
            centered
            verticalAlign='middle'
            src={image}
            alt='N/A' />
        </Segment>
        <FileBase64 multiple={false} onDone={this.handleBase64File} />
        <Segment basic textAlign='right'>
          <Button.Group size='mini'>
            <Button primary type='submit'>
              { id ? 'Update' : 'Create' }
            </Button>
            <Button.Or />
            <Button color='red' type='button' onClick={this.handleDelete}>Delete</Button>
            <Button.Or />
            <Button primary type='button' onClick={this.handleNew}>New Form</Button>
          </Button.Group>
        </Segment>
      </Form>
    )
  }
}

export default connect()(CarouselImageForm)
