import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Button, ButtonToolbar, Panel} from 'react-bootstrap';
import '../css/ControlledTabs.css';
import 'react-tabs/style/react-tabs.css';

class ControlledTabsMpp extends Component {

constructor(){
    super();
    this.state={working:""
       /* notWorking:""*/
    }
}


    fetchData = () => {
        fetch('http://localhost:8080/health')
            .then(result =>{
                return  result;
            }).then(data => {
                data.text().then(value => {
                   // this.setState({ suggestion: value})
                    if(value == 'welcome to JPMC'){
                        this.setState({ working: "fa fa-check iconwork"})}
                    else{
                        this.setState({ working: "fa fa-check iconDanger"})
                    }
                })
        }).catch((error) => {
            console.log(error, "catch the hoop")
        })
    }
    render() {
        return (
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">MBS Server Health check Test Panel.</Panel.Title>
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
                                    <label className="col-md-4 tablabelPlace">http://localhost:8080/health</label>
                                    {/*<ButtonToolbar>*/}
                                        <Button bsStyle="primary" onClick={this.fetchData}>Submit</Button>
                                    {/*</ButtonToolbar>*/}
                                    <i className={this.state.working}></i>
                                   {/* <i className={this.state.notWorking}></i>*/}
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