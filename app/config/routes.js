// Dependencies 
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// Components
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';

// export routes
const App = (
  <Router>
    <div>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route path='/portfolio/:id' component={Project} />
        </Switch>
      </Container>
    </div>
  </Router>
)

export default App;
