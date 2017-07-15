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
import Project from '../components/Project';
import Resume from '../components/Resume';

// export routes
const App = (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route path='/portfolio/:id' component={Project} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </div>
  </Router>
)

export default App;
