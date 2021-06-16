import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { withApollo } from 'react-apollo';
import Menu from './landing/Header';
import ContentUsers from './landing/ContentUsers';
import ContentTable from './landing/ContentTable';
import ContentChart from './landing/ContentChart';
import ContentCTA from './landing/ContentCTA';
import Footer from './landing/Footer';
import User from './user-page/User';
import AboutUs from './about-us/AboutUs';

export const ROOT_QUERY = gql`
  query {
    totalCognito
    allCognito {
      id
      name
      username
      problems
      solves
    }
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
  }

  componentDidMount() {
    this.setState.isLoading = false;
  }

  render() {
    return (
      <div className="container main">
        <Router>
          <Menu />
          <Switch>
            <Route path="/user/:username" children={<User />} />
            <Route path="/about-us" children={<AboutUs />} />
            <Route path="/">
              <ContentUsers />
              <ContentTable />
              <ContentChart />
              <ContentCTA />
            </Route>
            <Route component={({ location }) => <h1 className="text-center">"{location.pathname}" not found</h1>} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default withApollo(App);