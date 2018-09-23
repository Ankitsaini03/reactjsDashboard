import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import ControlledTabsMbs from "../../components/healthtabs/ControlledTabsMbs";

class MBSHealth extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="toggled">
                    <Navbar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <ControlledTabsMbs />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default MBSHealth
