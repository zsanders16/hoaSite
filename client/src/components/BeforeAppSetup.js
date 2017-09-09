import React from 'react'
import App from './App'
import { getNewsletterModule } from '../actions/admin/adminModules'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class BeforeAppSetup extends React.Component{
    state = { modules: [] }

    componentDidMount(){
        this.props.dispatch(getNewsletterModule())
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.adminModules !== this.props.adminModules){
            // if(nextProps.adminModules !== this.props.adminModules){
            //     this.setState( { open: [], ho: [], admin: [] })
            //     nextProps.adminModules.forEach( obj => {
            //       if(obj.active === true){
            //         if(obj.security === 'admin'){
            //           this.setState({ admin: [...this.state.admin, obj] })
            //         }else if(obj.security === 'ho') {
            //           this.setState({ ho: [...this.state.ho, obj] })
            //         }else{
            //           this.setState({ open: [...this.state.open, obj] })
            //         }
            //       }
            //     });
            // }

            // nextProps.adminModules.forEach( (module) => {
            //     this.setState({ activeModules: [...this.state.activeModules, module.name] })
            // });
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
