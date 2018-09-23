import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import ControlledTabsMps from "../../components/healthtabs/ControlledTabsMps";

class MPSHealth extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="toggled">
                    <Navbar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <ControlledTabsMps />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default MPSHealth
