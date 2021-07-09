import React from 'react'
import {Link} from 'react-router-dom'
import { Logo, Nav } from './navbarStyle'

function Navbar() {
    return (
            <Nav>
                <Logo>
                   <Link  to="/">BMI</Link>
                </Logo>
                <div>
                    <Link  to="/about">BMI Nedir?</Link>
                </div>
                <div>
                    <Link  to="/contact">İletişim</Link>
                </div>
            </Nav>
        
    )
}

export default Navbar
