import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.sass';

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);
const AddExpensePage = () => <div>This is from my add component</div>;
const EditExpensePage = () => <div>This is from my edit component</div>;
const HelpPage = () => <div>This is from my help component</div>;
const NotFoundPage = () => (
  <div>
    404!
    <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact activeClassName="is-active">
      Home
    </NavLink>
    <NavLink to="/create" exact activeClassName="is-active">
      Create expense
    </NavLink>
    <NavLink to="/edit" exact activeClassName="is-active">
      Edit expense
    </NavLink>
    <NavLink to="/help" exact activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const routes = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage} exact />
        <Route path="/edit" component={EditExpensePage} exact />
        <Route path="/help" component={HelpPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
