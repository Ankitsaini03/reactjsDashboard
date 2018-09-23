import React, { Component } from 'react';
import Footer from '../../components/Footer.jsx';
import Navbar from '../../components/Navbar.jsx';
import CucumberPanelMpp from '../../components/cucumbertabs/CucumberPanelMpp';

class MPPCucumber extends Component {
    render() {
        return (
            <div>
                <div id="wrapper" className="toggled">
                    <Navbar />
                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <CucumberPanelMpp />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default MPPCucumber
