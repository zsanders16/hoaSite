import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavbarLink = (linkItem) => {
    return(
        <Link to={linkItem.linkItem.route} >
            <Menu.Item name={linkItem.linkItem.display_name} style={{color: '#FDFEFE'}} />
        </Link>
    )
}

export default NavbarLink