import React from 'react';
import {
    Nav, 
    NavItem, 
    NavLink,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    UncontrolledDropdown,
    Button,
} from 'reactstrap'
const NavbarTwo = () => {
    return (
        <div>
            <Nav>
                <NavItem>
                    <NavLink disabled>
                        Home
                    </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Shop
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            Shop
                        </DropdownItem>
                        <DropdownItem>
                            Featured Brands
                        </DropdownItem>
                        <DropdownItem>
                            Bulk Enquiry
                        </DropdownItem>
                        <DropdownItem>
                            Track Your Orders
                        </DropdownItem>
                        <DropdownItem>
                            Payment options
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <NavLink disabled>
                        New Arrivals
                    </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Services
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem disabled>
                            <UncontrolledDropdown nav inNavbar direction='end'>
                                <DropdownToggle nav caret>
                                    3D printing
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        FDM
                                    </DropdownItem>
                                    <DropdownItem>
                                        SLA
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </DropdownItem>
                        <DropdownItem>
                            <UncontrolledDropdown nav inNavbar direction='end'>
                                <DropdownToggle nav caret>
                                    Laser Cutting
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        Non-metal
                                    </DropdownItem>
                                    <DropdownItem>
                                        Metal
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </DropdownItem>
                        <DropdownItem>
                            PCB Manufacturing
                        </DropdownItem>
                        <DropdownItem>
                            Coustum Battery Pack
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem >
                    <NavLink disabled>
                        Bulk Enquiry
                    </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Blogs
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>
                            Blogs
                        </DropdownItem>
                        <DropdownItem>
                            Tutorials
                        </DropdownItem>
                        <DropdownItem>
                            Viedos
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <NavLink disabled>
                        <Button
                            color="primary"
                        >
                            Careers
                        </Button>

                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        FAQ
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}

export default NavbarTwo;
