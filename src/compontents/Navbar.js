import React from 'react';
import {Nav,NavItem,NavLink,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown} from 'reactstrap'

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavItem>
            <NavLink disabled >
                100727-7259-8332
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink disabled >
                Custer support
            </NavLink>
        </NavItem>
      <NavItem>
        <NavLink disabled >
          My Orders
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled >
          Track My Order
        </NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Myaccount
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Myaccount</DropdownItem>
                <DropdownItem>Mycart</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
    </Nav>
      
    </div>
  )
}

export default Navbar
