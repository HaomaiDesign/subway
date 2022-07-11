import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from './components/home';
import status from './components/status';
import arrive from './components/arrive';
import Navigation from './components/navbar';


function App() {
  return(
     <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/home' component={home} />
        <Route path='/status' component={status} />
        <Route path='/arrive' component={arrive} />
      </Switch>
  </Router>
  )
}

export default App;
