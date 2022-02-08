import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import Menu from './components/Landing/Menu';
import ContentUsers from './components/Landing/UserTable/Users';
import ContentTable from './components/Landing/ContentTable';
import ContentChart from './components/Landing/ContentChart';
import ContentCTA from './components/Landing/ContentCTA';
import Footer from './components/Landing/Footer';
import User from './components/UserPage/User';
import AboutUs from './components/AboutUs/AboutUs';

const App = () => (
  <div className='container main'>
    <Router>
      <Menu />
      <Switch>
        <Route path={'/user/:username'}>
          <User />
        </Route>
        <Route path={'/about-us'}>
          <AboutUs />
        </Route>
        <Route path={'/'} strict>
          <ContentUsers />
          <ContentTable />
          <ContentChart />
          <ContentCTA />
        </Route>
        <Route component={({ location }) =>
          <h1 className='text-center'>
            "{location.pathname}" not found (404)
          </h1>
        } />
      </Switch>
      <Footer />
    </Router>
  </div>
);

export default withApollo(App);