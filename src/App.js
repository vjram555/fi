import React, { Suspense, lazy } from 'react';
import './App.css';
import ListTemplate from './components/ListTemplate';
import { Switch, Route,BrowserRouter as Router } from "react-router-dom";
const Landing = lazy(() => import('./pages/Landing/Landing'));
const Templates = lazy(() => import('./pages/Templates/Templates'));
const CreateChannel = lazy(() => import('./pages/CreateChannel/CreateChannel'));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>      
            <Route exact path="/" component={Landing} />
            <Route exact path="/list" component={Templates} />
            <Route exact path="/create" component={CreateChannel} />
          </Switch>
        </Suspense>
      </Router>
      );
}

export default App;
