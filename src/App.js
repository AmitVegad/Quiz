import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Question from './components/Question'
import './App.css' 
import Result from './components/Result';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/quiz" component={Question} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;