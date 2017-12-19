import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './home.jsx';
import Forum from './forum.jsx';
import AutoX from './autoX.jsx';
import TrackDays from './trackDays.jsx';
import TSDRally from './TSDRally.jsx';
import ClubEvents from './clubEvents.jsx';
import Pictures from './pictures.jsx';
import Register from './register.jsx';
import Membership from './membership.jsx';
import SR from './supplementalRegulations.jsx';
import SlushSeries from './slushSeries.jsx';
import About from './about.jsx';
import ContactUs from './contactUs.jsx';
import NoMatch from './noMatch.jsx';
import '../App.css';
class currentPage extends Component {
  render() {

    return (
      <div className="mainContent">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/forum" component={Forum}/>
          <Route path="/racing/autoX" component={AutoX}/>
          <Route path="/racing/trackDays" component={TrackDays}/>
          <Route path="/racing/TSDRally" component={TSDRally}/>
          <Route path="/clubEvents" component={ClubEvents}/>
          <Route path="/pictures" component={Pictures}/>
          <Route path="/register" component={Register}/>
          <Route path="/membership" component={Membership}/>
          <Route path="/rules/sr" component={SR}/>
          <Route path="/rules/slushSeries" component={SlushSeries}/>
          <Route path="/about" component={About}/>
          <Route path="/contactUs" component={ContactUs}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}
export default currentPage;