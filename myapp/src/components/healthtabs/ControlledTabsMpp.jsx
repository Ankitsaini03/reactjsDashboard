import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Panel } from 'react-bootstrap';
import '../css/ControlledTabs.css';
import 'react-tabs/style/react-tabs.css';

class ControlledTabsMpp extends Component {
    render() {
        return (
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">MPP Server Health check Test Panel.</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                    <Tabs>
                        <TabList>
                            <Tab><span className="nav-link" >DEV </span></Tab>
                            <Tab><span className="nav-link" >QA </span></Tab>
                            <Tab><span className="nav-link" >ITE </span></Tab>
                        </TabList>

                        <TabPanel> <div className="bs-callout bs-callout-danger">
                            <ul className="list-group">
                                <li className="list-group-item">Five years of experience in Web Technology and
                                </li>
                                <li className="list-group-item">Consistently honored as an effective and proven
                                </li>
                                <li className="list-group-item">Acknowledged by peers as a dedicated, versatile,
                                </li>
                            </ul>
                        </div></TabPanel>
                        <TabPanel> <div className="bs-callout bs-callout-danger">
                            <ul className="list-group">
                                <li className="list-group-item">Five years of experience in Web Technology and
                                </li>
                                <li className="list-group-item">Consistently honored as an effective and proven
                                </li>
                                <li className="list-group-item">Acknowledged by peers as a dedicated, versatile,
                                </li>
                                <li className="list-group-item">Recognized for extensive experience in
                                </li>
                            </ul>
                        </div></TabPanel>
                        <TabPanel> <div className="bs-callout bs-callout-danger">
                            <ul className="list-group">
                                <li className="list-group-item">Five years of experience in Web Technology and
                                </li>
                                <li className="list-group-item">Consistently honored as an effective and proven
                                </li>
                                <li className="list-group-item">Acknowledged by peers as a dedicated, versatile,
                                </li>
                                <li className="list-group-item">Recognized for extensive experience in
                                </li>
                                <li className="list-group-item">Honored for expertize in the field of Enterprise
                                </li>
                            </ul>
                        </div></TabPanel>
                    </Tabs>
                            </Panel.Body>
                        </Panel>
        );
    }
}
export default ControlledTabsMpp;