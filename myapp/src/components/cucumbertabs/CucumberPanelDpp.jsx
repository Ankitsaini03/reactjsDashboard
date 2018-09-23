import React, { Component } from 'react';
import { Panel, Button ,ButtonToolbar} from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import './../css/CucumberPanelDpp.css';

class CucumberPanelDpp extends Component {
    render() {
        return (
                        <Panel>
                            <Panel.Heading>
                                <Panel.Title componentClass="h3">DPP Cucumber Script run Panel.</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>
                                <div className="container">
                                    <div className="form-group">
                                        <label className="col-md-4 labelPlace">Env.</label>
                                        <div className="col-md-4 selectContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i
                                                    className="glyphicon glyphicon-list"></i></span>
                                                <select name="department" className="form-control selectpicker">
                                                    <option value="">Select your Env.</option>
                                                    <option>Dev</option>
                                                    <option>QA</option>
                                                    <option>ITE</option>
                                                </select>
                                            </div>
                                        </div>
                                        <label className="col-md-4 labelPlace">Scenario</label>
                                        <div className="col-md-4 selectContainer">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i
                                                    className="glyphicon glyphicon-list"></i></span>
                                                <select name="department" className="form-control selectpicker">
                                                    <option value="">Select your scenario.</option>
                                                    <option>Smoke Test</option>
                                                    <option>Coffee Test</option>
                                                    <option>ITE</option>
                                                </select>
                                            </div>
                                        </div>
                                    <ButtonToolbar>
                                        <Button bsStyle="primary" type="submit">Submit</Button>
                                    </ButtonToolbar>
                                    </div>
                                </div>
                            </Panel.Body>
                        </Panel>
        );
    }
}
export default CucumberPanelDpp;