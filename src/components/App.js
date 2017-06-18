import React, { Component } from 'react';
import Home from './home/Home'
import Access from './access/Access'
import FamilyPlanning from './family-planning/FamilyPlanning'
import Violence from './violence/Violence'
import FamilyHealth from './family-health/FamilyHealth'
import WomensHealth from './family-health/womens-health/WomensHealth'
import PregnancyNewborn from './pregnancy-newborn/PregnancyNewborn'
import SexualHealth from './sexual-health/SexualHealth'
import HealthyRelationships from './sexual-health/healthy-relationships/HealthyRelationships'
import SafeSex from './sexual-health/safe-sex/SafeSex'
import Contraception from './family-planning/contraception/Contraception'
import HealthSystemOverview from './access/health-system-overview/HealthSystemOverview'
import AustralianNorms from './access/australian-norms/AustralianNorms'
import BirthSpacing from './family-planning/birth-spacing/BirthSpacing'
import Pregnancy from './pregnancy-newborn/pregnancy/Pregnancy'
import Birth from './pregnancy-newborn/birth/Birth'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import './App.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;


class App extends Component {
  componentDidMount() {
    window.analytics.identify('testUserId', {
      username: 'testUsername'
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div className="container-body">
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/access"/>
            )}/>
            <Route exact path='/access' component={Access} />
            <Route exact path='/family-planning' component={FamilyPlanning} />
            <Route exact path='/family-planning/birth-spacing' component={BirthSpacing} />
            <Route exact path='/violence' component={Violence} />
            <Route exact path='/family-health' component={FamilyHealth} />
            <Route exact path='/family-health/womens-health' component={WomensHealth} />
            <Route exact path='/pregnancy-newborn' component={PregnancyNewborn} />
            <Route exact path='/sexual-health' component={SexualHealth} />
            <Route exact path='/sexual-health/healthy-relationships' component={HealthyRelationships} />
            <Route exact path='/sexual-health/safe-sex' component={SafeSex} />
            <Route exact path='/family-planning/contraception' component={Contraception} />
            <Route exact path='/access/health-system-overview' component={HealthSystemOverview} />
            <Route exact path='/access/australian-norms' component={AustralianNorms} />
            <Route exact path='/pregnancy-newborn/pregnancy' component={Pregnancy} />
            <Route exact path='/pregnancy-newborn/birth' component={Birth} />
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
          </div>
         <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
