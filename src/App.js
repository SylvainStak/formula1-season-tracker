import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Nav from './components/Nav';
import Constructor from './components/Constructor';

function App() {
  const appUri = '/formula1-season-tracker';

  return (
    <>
      <Router>
        <Nav constUri={appUri}/> 
        <Switch>
          <Route path={`${appUri}`} exact component={Home} />
          <Route path={`${appUri}/schedule`} exact component={Schedule} />
          <Route path={`${appUri}/constructor`} exact component={Constructor} />
        </Switch>
      </Router>
    </>
  );
}

export default App;