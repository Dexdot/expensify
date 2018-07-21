import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.sass';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);
const AddExpensePage = () => <div>This is from my add component</div>;
const EditExpensePage = () => <div>This is from my edit component</div>;
const HelpPage = () => <div>This is from my help component</div>;
const NotFoundPage = () => <div>404!</div>;

const routes = (
  <Router>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact />
      <Route path="/create" component={AddExpensePage} exact />
      <Route path="/edit" component={EditExpensePage} exact />
      <Route path="/help" component={HelpPage} exact />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
