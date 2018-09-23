import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import CucumberPanelMbs from "../../components/cucumbertabs/CucumberPanelMbs";

class MBSCucumber extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="toggled">
                    <Navbar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <CucumberPanelMbs />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default MBSCucumber
