import React from 'react'
import App from './App'
import { getNewsletterModule } from '../actions/admin/adminModules'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getNewsletters } from '../actions/newsletters'


class BeforeAppSetup extends React.Component{
    state = { modules: [] }

    componentDidMount(){
        this.props.dispatch(getNewsletterModule())
        this.props.dispatch(getNewsletters())
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.adminModules !== this.props.adminModules){
            this.setState( { modules: nextProps.adminModules })

        }
    }

    render(){
        let { modules } = this.state
        return(
            <App adminModules={modules} />
            // <App openModules={open} hoModels={ho} adminModules={admin}/>
        )
    }
}

const mapStateToProps = (state) => {
    return { adminModules: state.adminModules }
}

export default withRouter(connect(mapStateToProps)(BeforeAppSetup))
