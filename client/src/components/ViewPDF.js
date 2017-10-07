import React from 'react'
import { connect } from 'react-redux'
import { Segment } from 'semantic-ui-react'

class ViewPDF extends React.Component {

    render(){
        let { displayPDF } = this.props
        return(
            <Segment>
                <iframe src={displayPDF.attachment}  title={displayPDF.name} style={{width: '100%', height: '1200px'}}  />
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { displayPDF: state.displayPDF }
  }

export default connect(mapStateToProps)(ViewPDF)