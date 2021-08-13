import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import SingleArticle from '../components/SingleArticle';
import Articles from '../components/Articles';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={SingleArticle} />
        <Redirect to="/articles" />
      </Switch>
    </Router>
  );
};

export default Routes;
