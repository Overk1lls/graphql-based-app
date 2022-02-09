import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import Menu from './components/Landing/Menu';
import Footer from './components/Landing/Footer';
import LandingPage from './components/Landing/LandingPage';
import AboutUs from './components/AboutUs/AboutUs';
import User from './components/UserPage/User';
import NoMatch from './components/NoMatch';

const App = () => (
  <div className='container main'>
    <Router>
      <Menu />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/user/:username' component={User} />
        <Route component={({ location }) => <NoMatch location={location} />} />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default withApollo(App);