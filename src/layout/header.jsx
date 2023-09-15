import React, { useState } from 'react';
import Image from "next/image";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from "next/link";
import { X } from 'react-bootstrap-icons';
import ActiveLink from '../helpers/activeLink'

// images
import BrandLogo from "../assets/images/logo-header.png";
import imageLoader from "../utilities/imageLoader";
import creditcoin from '../assets/images/credit-coin-icon.png'
const Header = () => {
    const [isActive, setActive] = useState(false)
    const [userdropdown, setUserDropdown] = useState(false)

    const toggleClassnotification = () => {
        setActive(!isActive);
    }
    const togglehandleuser = () => {
        setUserDropdown(!userdropdown);
    }
    return (
        <>
            <header className='header-main'>
                <Navbar expand="lg">
                    <div className='left'>
                        <Navbar.Brand href="#home">
                            <Link href="/">
                                <Image
                                    src={BrandLogo}
                                    loader={imageLoader}
                                    layout="fill"
                                    alt=""
                                />
                            </Link>
                        </Navbar.Brand>
                    </div>



                    <div className='menulist center'>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='mobile-nav'>
                            <Nav className="me-auto dropdec">
                                <ul className="nav">
                                    <li>
                                        <ActiveLink activeClassName="active" href="/smstext">
                                            <a className="nav-link">Text &amp; SMS</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/#">
                                            <a className="nav-link">How-To</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/features">
                                            <a className="nav-link">Features</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/buy">
                                            <a className="nav-link">Buy</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink activeClassName="active" href="/blog">
                                            <a className="nav-link">Blog</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <NavDropdown title="Support" id="basic-nav-dropdown" className='dropdownmenu'>
                                            <ActiveLink activeClassName="active" href="/support/faq">
                                                <a className="nav-link">FAQ</a>
                                            </ActiveLink>
                                            <ActiveLink activeClassName="active" href="/support/terms">
                                                <a className="nav-link">Terms</a>
                                            </ActiveLink>
                                            <ActiveLink activeClassName="active" href="/support/contact">
                                                <a className="nav-link">Contact</a>
                                            </ActiveLink>
                                        </NavDropdown>
                                    </li>


                                </ul>
                                <div className='mbl-header-icon'>
                                    <ul className='list-unstyled d-flex align-items-center my-4'>
                                        <li>
                                            <div className='header-connected'>
                                                <p>connected</p>
                                                <div className="spinner-grow spinner-grow-sm" role="status">
                                                    <span className="sr-only"></span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='credit'>
                                                <span>10</span>
                                                <div className="credit-coin-navbar-icon">
                                                    <Image
                                                        src={creditcoin}
                                                        loader={imageLoader}
                                                        layout="fill"
                                                        alt=""
                                                    />

                                                </div>
                                            </div>
                                        </li>
                                        <li className='user-select-menus notify-menu'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                            </svg>
                                            <NavDropdown title="" id="basic-nav-dropdown" className='dropdownmenu'>
                                                <div className='notification-menu'>
                                                    <div className='notification-content'>
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                        <Link href="#">
                                                            <a>Learn More</a>
                                                        </Link>
                                                    </div>
                                                    <div className='notification-close'>
                                                        <X />
                                                    </div>
                                                </div>
                                                <div className='notification-menu'>
                                                    <div className='notification-content'>
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                        <Link href="#">
                                                            <a>Learn More</a>
                                                        </Link>
                                                    </div>
                                                    <div className='notification-close'>
                                                        <X />
                                                    </div>
                                                </div>
                                                <div className='notification-menu'>
                                                    <div className='notification-content'>
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                        <Link href="#">
                                                            <a>Learn More</a>
                                                        </Link>
                                                    </div>
                                                    <div className='notification-close'>
                                                        <X />
                                                    </div>
                                                </div>
                                                <div className='notification-menu'>
                                                    <div className='notification-content'>
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                        <Link href="#">
                                                            <a>Learn More</a>
                                                        </Link>
                                                    </div>
                                                    <div className='notification-close'>
                                                        <X />
                                                    </div>
                                                </div>
                                                <div className='notification-menu'>
                                                    <div className='notification-content'>
                                                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                        <Link href="#">
                                                            <a>Learn More</a>
                                                        </Link>
                                                    </div>
                                                    <div className='notification-close'>
                                                        <X />
                                                    </div>
                                                </div>
                                            </NavDropdown>
                                        </li>
                                        <li>
                                            <div className='envelop'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                </svg>

                                            </div>
                                        </li>
                                        <li className='user-select-menus'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>
                                            <NavDropdown title="" id="basic-nav-dropdown" className='dropdownmenu'>
                                                <ActiveLink activeClassName="active" href="/manage">
                                                    <a className="nav-link">Manage Account</a>
                                                </ActiveLink>
                                                <ActiveLink activeClassName="active" href="/orderhistory">
                                                    <a className="nav-link">Order History</a>
                                                </ActiveLink>
                                                <ActiveLink activeClassName="active" href="#">
                                                    <a className="nav-link">Sub Accounts</a>
                                                </ActiveLink>
                                                <ActiveLink activeClassName="active" href="#">
                                                    <a className="nav-link">Log Out</a>
                                                </ActiveLink>
                                            </NavDropdown>
                                        </li>
                                    </ul>
                                </div>

                            </Nav>
                        </Navbar.Collapse>
                    </div>

                    <div className='right'>
                        {/* <div className="log-sign">
                            <Link href="/login">
                                <span className='logIn'>Log In</span>
                            </Link>
                            <Link href="/signup">
                                <span className='signUp'>Sign Up</span>
                            </Link>

                        </div> */}
                        <div className='header-icon'>
                            <ul className='list-unstyled d-flex align-items-center justify-content-end mb-0'>
                                <li>
                                    <div className='header-connected'>
                                        <p>connected</p>
                                        <div className="spinner-grow spinner-grow-sm" role="status">
                                            <span className="sr-only"></span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='credit'>
                                        <span>10</span>
                                        <div className="credit-coin-navbar-icon">
                                            <Image
                                                src={creditcoin}
                                                loader={imageLoader}
                                                layout="fill"
                                                alt=""
                                            />

                                        </div>
                                    </div>
                                </li>
                                <li className='user-select-menus notify-menu'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                    </svg>
                                    <NavDropdown title="" id="basic-nav-dropdown" className='dropdownmenu'>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                    </NavDropdown>
                                </li>
                                {/* <li className={isActive ? 'shownotification' : null}>
                                    <div className='notification' onClick={toggleClassnotification} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                        </svg>
                                    </div>

                                    <div className='dropdown-menu-notification'>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                        <div className='notification-menu'>
                                            <div className='notification-content'>
                                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
                                                <Link href="#">
                                                    <a>Learn More</a>
                                                </Link>
                                            </div>
                                            <div className='notification-close'>
                                                <X />
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                <li>
                                    <div className='envelop'>
                                        <Link href="/messenger/inbox">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </li>
                                <li className='user-select-menus'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                    <NavDropdown title="" id="basic-nav-dropdown" className='dropdownmenu'>
                                        <ActiveLink activeClassName="active" href="/manage">
                                            <a className="nav-link">Manage Account</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="active" href="/orderhistory">
                                            <a className="nav-link">Order History</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="active" href="#">
                                            <a className="nav-link">Sub Accounts</a>
                                        </ActiveLink>
                                        <ActiveLink activeClassName="active" href="#">
                                            <a className="nav-link">Log Out</a>
                                        </ActiveLink>
                                    </NavDropdown>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Navbar>
            </header>
        </>
    )
}

export default Header; 