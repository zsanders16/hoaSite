import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Segment, Image, Grid, Divider } from 'semantic-ui-react';
// import logo from '../assets/logo.jpg'

// Actions
import { activeHomepage } from '../../actions/homepage'

// Custom Components
import HomeMainBody from './HomeMainBody'
import HomeHeaderImage from './HomeHeaderImage'
import Events from './Events'

class Home extends Component {
  defaults = {
    id: '', title: '', body: '', active: '',
    attachment: '', attachment_name: '',
  }
  state = { ...this.defaults }

  componentDidMount = () => {
    const { dispatch, homepage } = this.props
    if( !homepage || !homepage.title ) {
      dispatch(activeHomepage())
    }
  }

  render() {
    const {
      title, body, attachment
    } = this.props.homepage
    return(
      <div>
        <Container style={{backgroundColor: '#FFFFFF'}} >
          <HomeHeaderImage attachment={attachment} />
          <Grid celled>
            <Grid.Row>
              <Grid.Column width={12}>
                <HomeMainBody title={title} body={body} />
              </Grid.Column>
              <Grid.Column width={4}>
                <Events />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <footer>
            <Segment basic textAlign='center'>
              <p>WoodStock Village Property Owners Association</p>
              <p>Mailing Address</p>
              <Divider hidden />
              <a href='#'>Contact Site Adminstrator</a>
            </Segment>
          </footer>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    homepage: state.homepage,
  }
}

export default connect(mapStateToProps)(Home);
