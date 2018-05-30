import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route } from "react-router-dom";
import history from "./history";
import Auth from './Auth'
import registerServiceWorker from './registerServiceWorker';

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

ReactDOM.render((
  <div>
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <h1>Callback</h1>
        }} />
      </div>
    </Router>
  </div>
), document.getElementById('root'));
registerServiceWorker();
