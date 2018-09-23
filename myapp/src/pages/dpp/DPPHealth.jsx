import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import ControlledTabsDpp from "../../components/healthtabs/ControlledTabsDpp";

class DPPHealth extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="toggled">
                    <Navbar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <ControlledTabsDpp />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default DPPHealth
