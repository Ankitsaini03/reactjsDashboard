import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import MpsHealth from './pages/mps/MPSHealth.jsx';
import MppHealth from './pages/mpp/MPPHealth.jsx';
import DppHealth from './pages/dpp/DPPHealth.jsx';
import MbsHealth from './pages/mbs/MBSHealth.jsx';
import MbsCucumber from './pages/mbs/MBSCucumber';
import MppCucumber from './pages/mpp/MPPCucumber';
import MpsCucumber from './pages/mps/MPSCucumber';
import DppCucumber from './pages/dpp/DPPCucumber';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/mpsHealth" component={MpsHealth}/>
                <Route path="/mpsCucumber" component={MpsCucumber}/>
                <Route path="/mppHealth" component={MppHealth}/>
                <Route path="/mppCucumber" component={MppCucumber}/>
                <Route path="/dppHealth" component={DppHealth}/>
                <Route path="/dppCucumber" component={DppCucumber}/>
                <Route path="/mbsHealth" component={MbsHealth}/>
                <Route path="/mbsCucumber" component={MbsCucumber}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
            </div>
        </Router>
    );
  }
}

export default App;
