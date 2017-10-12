import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Container, Segment, Grid, Divider } from 'semantic-ui-react';
// import logo from '../assets/logo.jpg'

// Actions
import { activeHomepage } from '../../actions/homepage'

// Custom Components
import HomeMainBody from './HomeMainBody'
import HomeHeaderImage from './HomeHeaderImage'
import Events from './Events'
import Access from '../requests/Access'

class Home extends Component {
  defaults = {
    id: '', title: '', body: '', active: '',
    attachment: '', attachment_name: '',
  }
  state = { ...this.defaults }

  componentDidMount = () => {
    const { dispatch, homepage, reload } = this.props
    if( reload || !homepage || !homepage.title ) {
      dispatch(activeHomepage())
    }
    this.setState({ ...homepage })
  }
  componentWillReceiveProps = (nextProps) => this.loadHomepage(nextProps)

  loadHomepage = ( props ) => {
    const { homepage } = props
    if( homepage && homepage.title ) {
      this.setState({ ...homepage })
    }
  }

  render() {
    const {
      title, body, attachment
    } = this.state
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
                <Access />
                <Divider style={{marginTop: '-30px'}}/>
                <Events />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <footer>
            <Segment basic textAlign='center'>
              <p>WoodStock Village Property Owners Association</p>
              <p>Mailing Address</p>
            </Segment>
          </footer>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ( state, props ) => {
  return {
    homepage: state.homepage.data,
    reload: state.homepage.reload,
  }
}

export default connect(mapStateToProps)(Home);
