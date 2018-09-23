import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

class Navbar extends Component {
  render() {
    return (
            <div id="sidebar-wrapper">
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a href="#">
                            Start Bootstrap
                        </a>
                    </li>
                    <li>
                        <Link  to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" data-target="#mps" aria-expanded="false" className="dropdown-toggle">MPS Application</a>
                        <ul className="collapse list-unstyled submenu" id="mps">
                            <li>
                                <Link  to="/mpsHealth">Health Check</Link>
                            </li>
                            <li>
                                <Link  to="/mpsCucumber">Test Application</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" data-target="#mpp" aria-expanded="false" className="dropdown-toggle">MPP Chasepay</a>
                        <ul className="collapse list-unstyled submenu" id="mpp">
                            <li>
                                <Link  to="/mppHealth">Health Check</Link>
                            </li>
                            <li>
                                <Link  to="/mppCucumber">Test Application</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" data-target="#dpp" aria-expanded="false" className="dropdown-toggle">DPP Application</a>
                        <ul className="collapse list-unstyled submenu" id="dpp">
                            <li>
                                <Link  to="/dppHealth">Health Check</Link>
                            </li>
                            <li>
                                <Link  to="/dppCucumber">Test Application</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#pageSubmenu" data-toggle="collapse" data-target="#mbs" aria-expanded="false" className="dropdown-toggle">MBS Application</a>
                        <ul className="collapse list-unstyled submenu" id="mbs">
                            <li>
                                <Link  to="/mbsHealth">Health Check</Link>
                            </li>
                            <li>
                                <Link  to="/mbsCucumber">Test Application</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link  to="/about">About</Link>
                    </li>
                    <li>
                        <Link  to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
    );
  }
}

export default Navbar;
