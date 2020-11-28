import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './view/home/home';
import Dashboard from './view/dashboard/dashboard';
import AddColors from './view/addColors/addColors';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
          <Route path="/color/add" component={AddColors}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
