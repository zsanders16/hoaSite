import React from 'react'
import App from './App'
import { getNewsletterModule } from '../actions/admin/adminModules'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class BeforeAppSetup extends React.Component{
    state = { activeModules: [] }

    componentDidMount(){
        this.props.dispatch(getNewsletterModule())
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.adminModules !== this.props.adminModules){
            nextProps.adminModules.forEach( (module) => {
                this.setState({ activeModules: [...this.state.activeModules, module.name] })
            });
        }
    }

    render(){
        return(
            <App adminModules={this.state.activeModules}/>
        )
    }
}

const mapStateToProps = (state) => {
    return { adminModules: state.adminModules }
}

export default withRouter(connect(mapStateToProps)(BeforeAppSetup))
