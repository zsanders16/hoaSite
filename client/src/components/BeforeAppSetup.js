import React from 'react'
import App from './App'
import { getNewsletterModule, getCcrModule } from '../actions/admin/adminModules'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getNewsletters, clearNewsletters } from '../actions/newsletters'
import { getCcrs, clearCcrs } from '../actions/ccrs'
import { getBylaws, clearBylaws } from '../actions/bylaws'


class BeforeAppSetup extends React.Component{
    state = { modules: [] }

    componentDidMount(){
        let { dispatch } = this.props
        dispatch(getNewsletterModule())
        dispatch(getCcrModule())
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
            }else if(element.name ==='ccr'){
                if(element.active === true){
                    dispatch(getCcrs())
                    dispatch(getBylaws())
                }else{
                    clearCcrs(dispatch)
                    clearBylaws(dispatch)
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
