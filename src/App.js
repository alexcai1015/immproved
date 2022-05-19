import logo from './logo.svg';
import Routing from "./Routing/routing";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from 'react-ga';
import { PRODUCTION } from './Services/util';
import { Component } from 'react';
import createHistory from 'history/createBrowserHistory'
import { trackPageEnter } from './util/tracking';

ReactGA.initialize('UA-187241314-2');

const history = createHistory()
history.listen((location, action) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(window.location.pathname + window.location.search);
});


class App extends Component {

  componentDidMount() {
    trackPageEnter();
  }

  render() {
    return (
      <div className="App" style={{ backgroundColor: "#F4F7FE" }}>
        <Router history={history}>
          <Routing />
        </Router>
      </div>
    );
  }
}

export default App;
