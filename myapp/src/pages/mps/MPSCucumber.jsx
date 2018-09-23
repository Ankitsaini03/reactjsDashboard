import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import CucumberPanelMps from "../../components/cucumbertabs/CucumberPanelMps";

class MPSCucumber extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="toggled">
                    <Navbar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <CucumberPanelMps />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default MPSCucumber
