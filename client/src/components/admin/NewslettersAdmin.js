import React from 'react'
import { connect } from 'react-redux'
import { Checkbox, Segment } from 'semantic-ui-react'
import { updateComponentActiveStatus } from '../../actions/admin/adminModules'

class NewslettersAdmin extends React.Component{
    state = { active: false, security: 'admin'}

    componentDidMount(){
        this.props.adminModules.forEach( module =>{
            if(module.name === 'newsletter'){
                this.setState( { active: module.active, security: module.security } )
            }
        })
    }

    changeActiveStatus = () => {
        this.setState( { active: !this.state.active } )
        this.props.dispatch(updateComponentActiveStatus())
    }

    render(){
        const { active } = this.state
        return(
            <Segment raised>
                <Segment compact>
                    <Checkbox toggle checked={active} onChange={this.changeActiveStatus} />
                </Segment>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return { adminModules: state.adminModules }
}


export default connect(mapStateToProps)(NewslettersAdmin);