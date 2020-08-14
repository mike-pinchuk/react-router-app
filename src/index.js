import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Home, About, Events, Products, Contact, Whoops404 } from './Pages';
import './stylesheets/index.css';

window.React = React;

ReactDOM.render(
    <HashRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect from="/history" to="/about/history" />
          <Redirect from="/services" to="/about/services" />
          <Redirect from="/location" to="/about/location" />
          <Route path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </HashRouter>,
    document.getElementById('root')
  )
