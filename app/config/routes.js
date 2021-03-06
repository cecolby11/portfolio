// Dependencies 
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

// Components
import About from '../components/About';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import Resume from '../components/Resume';
import Blog from '../components/Blog';

// export routes
class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route path='/portfolio/:id' component={Project} />
            <Route exact path='/resume' component={Resume} />
            <Route exact path='/blog' component={Blog} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
