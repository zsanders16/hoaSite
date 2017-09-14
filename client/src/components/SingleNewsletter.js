import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import { deleteNewsletter } from '../actions/newsletters'
import { connect } from 'react-redux'


class SingleNewletter extends React.Component {

    handleDelete = () => {
        debugger
        let { newsletter } = this.props
        this.props.dispatch(deleteNewsletter(newsletter))
    }

    render(){
        let { newsletter } = this.props
        return(
            <Table.Row>
                <Table.Cell>{newsletter.name}</Table.Cell>
                <Table.Cell collapsing >
                    <Button color='blue'><a href={`file:///Users/zacharysanders/Documents/WoodStock/woodstockvillage/public${newsletter.attachment['url']}`}></a>Download</Button>
                    <Button color='blue' onClick={this.handleDelete}>Delete</Button>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default connect()(SingleNewletter)