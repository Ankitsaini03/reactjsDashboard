import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import CucumberPanelDpp from "../../components/cucumbertabs/CucumberPanelDpp";

class DPPCucumber extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="toggled">
                    <Navbar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <CucumberPanelDpp />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default DPPCucumber
