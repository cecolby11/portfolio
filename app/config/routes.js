// Dependencies 
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// Components
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

// export routes
const App = (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    </div>
  </Router>
)

export default App;
