import React from 'react'
import App from './App'
import {    getNewsletterModule, 
            getCcrModule, 
            getLegalModule, 
            getMinutesModule, 
            getDiscussionModule } from '../actions/admin/adminModules'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { getNewsletters, clearNewsletters } from '../actions/newsletters'
import { getCcrs, clearCcrs } from '../actions/ccrs'
import { getBylaws, clearBylaws } from '../actions/bylaws'
import { getLegals, clearLegals } from '../actions/legal'
import { getNonAdminMinutes, clearMinutes } from '../actions/minutes'
import { getDiscussions, clearDiscussions } from '../actions/discussion'


class BeforeAppSetup extends React.Component{
    state = { modules: [] }

    componentDidMount(){
        let { dispatch } = this.props
        dispatch(getNewsletterModule())
        dispatch(getCcrModule())
        dispatch(getLegalModule())
        dispatch(getMinutesModule())
        dispatch(getDiscussionModule())
        this.getDocuments(this.state.modules)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.adminModules !== this.props.adminModules){
            this.setState( { modules: nextProps.adminModules }, this.filterModulesByLogin(nextProps.adminModules) )
        }
        if(nextProps.user !== this.props.user){
            this.filterModulesByLogin(nextProps.adminModules, nextProps.user)
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
            }else if(element.name ==='legal'){
                if(element.active === true){
                    dispatch(getLegals())
                }else{
                    clearLegals(dispatch)
                }
            }
            else if(element.name ==='minutes'){
                if(element.active === true){
                    dispatch(getNonAdminMinutes())
                }else{
                    clearMinutes(dispatch)
                }
            }else if(element.name ==='discussion'){
                if(element.active === true){
                    dispatch(getDiscussions())
                }else{
                    clearDiscussions(dispatch)
                }
            }
        });
    }

    filterModulesByLogin = (modules, user = this.props.user) => {
        if(user.admin){
            this.getDocuments(modules)
        }else if(user.id){
            let loginFilter = modules.filter( module => {
                return module.security !== 'admin'
            }) 
            this.getDocuments(loginFilter)
        }else{
            let noLoginFilter = modules.filter( module => {
               return module.security === 'open'
            })
            this.getDocuments(noLoginFilter)
        }
    }

    render(){
        let { modules } = this.state
        return(
            <App adminModules={modules} />
        )
    }
}

const mapStateToProps = (state) => {
    return { adminModules: state.adminModules, user: state.user }
}

export default withRouter(connect(mapStateToProps)(BeforeAppSetup))
