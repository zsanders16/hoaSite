import React from 'react'
import { indexWatch, resetWatch } from '../actions/watch'
import { connect } from 'react-redux';
import { Segment, Table, Header, Icon } from 'semantic-ui-react'

class Watch extends React.Component{

    componentDidMount() {
        this.props.dispatch(indexWatch())
    }

    componentWillUnmount(){
        resetWatch(this.props.dispatch)
    }

    displayWatch = () => {
        const { watch } = this.props
        if( watch && watch.length > 0 ) {
          return watch.map( (member, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>{member.name}</Table.Cell>
              </Table.Row>
            )
          })
        }
      }

    render(){
        return(
            <Segment>
            <Header as='h1' icon textAlign='center'  size='huge'>
              <Icon name='group' circular/>
              <Header.Content>
                Woodstock Village Neighborhood Watch
              </Header.Content>
            </Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Members</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                { this.displayWatch() }
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan={2}>
                    &nbsp;
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Segment>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
      watch: state.watch,
    }
  }

export default connect(mapStateToProps)(Watch)