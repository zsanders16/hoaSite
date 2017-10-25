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
          <Grid celled style={{ margin: '0' }}>
            <Grid.Row>
              <Grid.Column computer={12} tablet={12} mobile={16} >
                <HomeMainBody title={title} body={body} />
              </Grid.Column>
              <Grid.Column computer={4} tablet={4} mobile={16} >
                <Access />
                <Divider style={{marginTop: '-30px'}}/>
                <Events />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <footer>
            <Segment basic textAlign='center'>
              <h3 style={{marginBottom: '10px'}}>Woodstock Village Homeowners Association</h3>
              <h5 style={{marginTop: '-10px'}}>Mailing Address:</h5>
              <p style={{marginBottom: '10px'}}>P.O. Box 71963 </p>
              <p style={{marginTop: '-10px'}}>SLC UT, 84171-0963 </p>
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
// <Grid.Row>
//   <Grid.Column mobile={16} >
//     <HomeHeaderImage attachment={attachment} />
//   </Grid.Column>
// </Grid.Row>
