import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from './components/home';
import status from './components/status';
import arrive from './components/arrive';
import jsonView from './components/json';
import Navigation from './components/navbar';


function App() {
  return(
     <Router>
      <Navigation />
      <Switch>
        <Route path='/home' exact component={home} />
        <Route path='/status' component={status} />
        <Route path='/arrive' component={arrive} />
        <Route path='/json' component={jsonView} />
      </Switch>
  </Router>
  )
}

export default App;
