import React from 'react'
import App from './App'
import { getNewsletterModule } from '../actions/admin/adminModules'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getNewsletters, clearNewsletters } from '../actions/newsletters'


class BeforeAppSetup extends React.Component{
    state = { modules: [] }

    componentDidMount(){
        this.props.dispatch(getNewsletterModule())
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.adminModules !== this.props.adminModules){
            this.setState( { modules: nextProps.adminModules }, this.getDocuments(nextProps.adminModules) )
        }

    }

    getDocuments = (modules) => {
        let { dispatch } = this.props
        modules.forEach( (element) => {
            if(element.name ==='newsletter'){
                if(element.active === true){
                    dispatch(getNewsletters())
                }else{
                    clearNewsletters(dispatch)
                }
            }
        });
    }

    render(){
        let { modules } = this.state
        return(
            <App adminModules={modules} />
        )
    }
}

const mapStateToProps = (state) => {
    return { adminModules: state.adminModules }
}

export default withRouter(connect(mapStateToProps)(BeforeAppSetup))
