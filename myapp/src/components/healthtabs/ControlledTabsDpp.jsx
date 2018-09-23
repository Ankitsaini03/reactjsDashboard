import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Button, ButtonToolbar, Panel} from 'react-bootstrap';
import '../css/ControlledTabs.css';
import 'react-tabs/style/react-tabs.css';

class ControlledTabsMpp extends Component {
    render() {
        return (
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">DPP Server Health check Test Panel.</Panel.Title>
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
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Five years of experience in Web Technology and</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Consistently honored as an effective and proven</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Acknowledged by peers as a dedicated, versatile</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                            </ul>
                        </div></TabPanel>
                        <TabPanel> <div className="bs-callout bs-callout-danger">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Five years of experience in Web Technology and</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Consistently honored as an effective and proven</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Acknowledged by peers as a dedicated, versatile,</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Recognized for extensive experience in</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                            </ul>
                        </div></TabPanel>
                        <TabPanel> <div className="bs-callout bs-callout-danger">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Five years of experience in Web Technology and</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Consistently honored as an effective and proven</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Acknowledged by peers as a dedicated, versatile,</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Recognized for extensive experience in</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                </li>
                                <li className="list-group-item">
                                    <label className="col-md-4 tablabelPlace">Honored for expertize in the field of Enterprise</label>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
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