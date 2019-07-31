import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Home from './components/pages/Home';
import Tools from './components/pages/Tools';
import About from './components/pages/About';
import './App.css';

const App = () => {

  return(
    <Router>
      <Fragment>
        <Navbar /> 
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tools' component={Tools} />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;